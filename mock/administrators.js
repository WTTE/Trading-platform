import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/vue-admin-template/administrators/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,

        data: {
         items:[
           {
            "id": 1,
            "username": "商品管理员",
            "role_id": 1,
            "title": "只能查看及操作商品",
            "count":0
           }, {
            "id": 2,
            "username": "订单管理员",
            "role_id": 2,
            "title": "只能查看及操作订单",
            "count":0
           }, {
            "id": 3,
            "username": "超级管理员",
            "role_id": 3,
            "title": "拥有所有查看和操作功能",
            "count":0
           },
         ]
        },
        meta: {
          "msg": "更新成功",
          "status": 200
        }
      }
    }
  }
]
