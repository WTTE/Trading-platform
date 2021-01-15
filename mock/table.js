import Mock from 'mockjs'

const data = Mock.mock({
  'items|100': [{
     id: '@id',
    'phoneName|1': ['iphone6','iphone6s','iphone7','iphone7s','iphone8'],
    'storage|1': ["64G","128G","256G","512G"],
    'desc|1' : ["荣耀6 Plus，该机型分为两款型号，分别为PE-","iPhone 6 Plus设计上和iPhone 6","小米（Mi）小米Note 16G双网通版"],
    "editor|1": ["小明","小红","小白","小黄"],
    "descb|1": ["9成新","7成新","5成新"],
    //  date:Random.date(),
    "prize|1": ["￥2333",'￥2699','￥2899','￥3699','￥4399','￥6899','￥6399'],
    "date|1": "2020-01-12",
    "sign|1": ["未发货","已发货"],
    "ordertype|1":["正常订单","退货订单"],
    "settype|1" :["顺丰","圆通","申通"] ,
    "username|1" : "test",
    "province|1" : ["无锡","上海","北京","南通","深圳"]   
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 10 } = config.query
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
        page = 1, limit = 10, search = "",receiverKeyword="",status=""
      } = config.query
      console.log(page, limit, search, "00000000000000000");
      const items = data.items
      const filters = items.filter((item) => {
        if (item.id.indexOf(search) != -1 ) {
          return item;
        }
      })
      console.log(filters);
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
    url: '/vue-admin-template/product/delete',
    type: 'get',
    response: config => {
      const id = config.query.id
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
 
]
