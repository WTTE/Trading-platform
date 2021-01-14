import Mock from 'mockjs'


const data = Mock.mock({
  'items|30': [{
    id: '@increment()',
    name: '@cname()',
    'attendance|1': ['已派单', '未派单'],
    email: '@email()',
    workName: '@zip',
    'gender|1': ['男', '女'],
    phoneNum: /^1[385][1-9]\d{8}/,
    email: '@email',
    date: '@datetime()',
    value: 1
  }]
})

export default [{
    url: '/vue-admin-template/postman/list',
    type: 'get',
    response: config => {
      const {
        page = 1, limit = 10, search = ""
      } = config.query
      // console.log(config.query);
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items.slice((page - 1) * limit, limit * page)
        }
      }
    }
  },
  {
    url: '/vue-admin-template/postman/searchlist',
    type: 'get',
    response: config => {

      const {
        page = 1, limit = 10, search = ""
      } = config.query
      console.log(page, limit, search, "00000000000000000");
      const items = data.items
      const filters = items.filter((item) => {
        if (item.workName.indexOf(search) != -1 || item.name.indexOf(search) != -1) {
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
    url: '/vue-admin-template/postman/delete/',
    type: 'get',
    response: config => {
      var id = config.query.id;
      const items = data.items
      var index = items.findIndex(item => {
        if (item.id == id) {
          return true;
        }
      })
      items.splice(index, 1);
      return {
        code: 20000,
        data: {
          message: "删除商品成功"
        }
      }
    }
  },
  {
    url: '/vue-admin-template/postman/new',
    type: 'post',
    response: config => {
      console.log(config.body);
      var postman = config.body;
      data.items.unshift(postman);
      return {
        code: 20000,
        data: {
          message: "添加商品成功"
        }
      }
    }
  },
  {
    url: '/vue-admin-template/postman/uplist',
    type: 'post',
    response: config => {
      const admin = config.body[1].value
      const listQuery = config.body[2].listQuery
      const {
        page = 1, limit = 10, search = ""
      } =listQuery
      let items = data.items
      let maps = items.map(element => {
        if (element.id == admin.id) {
          element = admin
        }
        return element
      });
      data.items = maps
      return {
        code: 20000,
        data: {
          // total: maps.length,
          // items: maps.slice((page - 1) * limit, limit * page)
          message: "添加商品成功"
        }
      }
    }
  },
]
