import Mock from 'mockjs'

const data = Mock.mock({
  'items|50': [{
    id: '@increment()',
    name: '@cname()',
    workNum: '@zip',
    'authority|1': ['安卓回收订单', '安卓订购订单', '苹果回收订单', '苹果订购订单'],
    'gender|1': ['男', '女'],
    phoneNum: /^1[385][1-9]\d{8}/,
    email: '@email',
    date: '@date("yyyy-MM-dd  HH:mm:ss")',
    value: 1
  }]
})

export default [{
    url: '/vue-admin-template/editor/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/editor/searchlist',
    type: 'get',
    response: config => {
      const {
        search = ""
      } = config.query
      // console.log(page, limit, search, "00000000000000000");
      console.log(config.query)
      const items = data.items
      const filters = items.filter((item) => {
        if (item.name.indexOf(search) != -1 || item.workNum.indexOf(search) != -1) {
          return item;
        }
      })
      return {
        code: 20000,
        data: {
          total: filters.length,
          items: filters
        }
      }
    }
  },
  {
    url: '/vue-admin-template/editor/delete',
    type: 'get',
    response: config => {
      var id = config.query.id;
      const items = data.items;
      var index = items.findIndex(item => {
        if (item.id == id) {
          return true;
        }
      })
      items.splice(index, 1);
      return {
        code: 20000,
        data: {
          message: "删除员工成功"
        }
      }
    }
  },
  {
    url: '/vue-admin-template/editor/new',
    type: 'post',
    response: config => {
      var editor = config.body;
      data.items.push(editor);
      return {
        code: 20000,
        data: {
          message: "添加员工成功"
        }
      }
    }
  },
  {
    url: '/vue-admin-template/editor/update',
    type: 'post',
    response: config => {
      const list = config.body[1].value
      const listQuery = config.body[2].listQuery
      const {
         search = ""
      } =listQuery
      let items = data.items
      let maps = items.map(element => {
        if (element.id == list.id) {
          element = list
        }
        return element
      });
      data.items = maps
      return {
        code: 20000,
        data: {
          message: "添加商品成功"
        }
      }
    }
  }
]
