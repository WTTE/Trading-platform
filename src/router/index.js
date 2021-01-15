import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

// constantRouterMap：主要是通用部分，每个用户都有的页面
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/chart',
    children: [{
      path: 'chart',
      name: 'Chart',
      component: () => import('@/views/chart/index'),
      meta: {
        title: '图文详情',
        icon: 'chart'
      }
    }]
  },

  // 404 page must be placed at the end !!!
  // {
  //   path: '*',
  //   redirect: '/chart',
  //   hidden: true
  // }
]

// asyncRouterMap：需要进行权限过滤的页面
export const asyncRoutes = [{
    path: '/product',
    component: Layout,
    redirect: '/product/index',
    name: 'Product',
    meta: {
      roles: ['editor', 'admin'],
      title: '商品列表',
      icon: 'shopping'
    },
    children: [{
        path: 'index',
        name: 'product',
        component: () => import('@/views/product/index'),
        meta: {
          title: '苹果专区'
        }
      },
      {
        path: 'edit-apple',
        name: 'Edit-apple',
        component: () => import('@/views/product/edit-apple')
      },
      {
        path: 'edit-android',
        name: 'Edit-android',
        component: () => import('@/views/product/edit-android')
      },
      {
        path: 'new',
        name: 'New',
        component: () => import('@/views/product/new')
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/product/index-android'),
        meta: {
          title: '安卓专区'
        }
      },
      {
        path: 'new-android',
        name: 'New-android',
        component: () => import('@/views/product/new-android')
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {
      roles: ['editor', 'admin'],
      title: '订单查询',
      icon: 'example'
    },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: {
          title: '订购订单'
        }
      },
      {
        path: 'orderDetail',
        name: 'orderDetail',
        component: () => import('@/views/table/orderDetail'),
        meta: {title: '订单详情'},
        hidden : true
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: {
          title: '回收订单'
        }
      }
    ]
  },

  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/info',
    // alwaysShow: true, 
    name: 'Permission',
    meta: {
      title: '信息管理',
      icon: 'tree',
      roles: ['admin', 'editor', 'postman'] // you can set roles in root nav
    },
    children: [{
        path: 'info',
        component: () => import('@/views/permission/info'),
        name: 'Info',
        meta: {
          title: '个人信息',
          roles: ['admin', 'editor', 'postman']
        }
      },
      {
        path: 'editor',
        component: () => import('@/views/admin/editor'),
        name: 'EditorInfo',
        meta: {
          title: '员工信息',
          roles: ['admin']
        }
      },
      {
        path: 'newEditor',
        name: 'NewEditor',
        component: () => import('@/views/admin/newEditor'),
      },
      {
        path: 'admin',
        component: () => import('@/views/admin/admin'),
        name: 'AdminInfo',
        meta: {
          title: '管理员信息',
          roles: ['admin']
        }
      },
      {
        path: 'newAdmin',
        name: 'NewAdmin',
        component: () => import('@/views/admin/newAdmin'),
      },
      {
        path: 'postman',
        component: () => import('@/views/admin/postman'),
        name: 'PostmanInfo',
        meta: {
          title: '快递员信息',
          roles: ['admin']
        }
      },
      {
        path: 'get',
        component: () => import('@/views/postman/get'),
        name: 'GetInfo',
        meta: {
          title: '回收信息',
          roles: ['postman']
        }
      },
      {
        path: 'post',
        component: () => import('@/views/postman/post'),
        name: 'PostInfo',
        meta: {
          title: '派件信息',
          roles: ['postman']
        }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
