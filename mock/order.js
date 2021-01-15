import Mock from 'mockjs'

const data = {
  items: [{
    "id": 2,
    "title": "华为Mate40 Pro（8GB/256GB/全网通/5G版/玻璃版）",
    "name":"苹果iPhone 11",
    "add_time": "2015-04-19T16:51:03.000Z",
    "time":"2021-01-14T21.30",
    "click": 0,   
    "sell_price": 5000,
    "destination":"湖北——>广州" ,
  },
  {
    "id": 3,
    "title": "苹果iPhone 11",
    "name": "OPPO Reno5 Pro",
    "add_time": "2015-04-19T17:00:58.000Z",
    "time":"2021-01-13T21.33",
    "click": 0,
    "sell_price": 4000,
    "destination":"北京——>上海" ,
    
   
  },
  {
    "id": 4,
    "title": "vivo X60",
    "name": "魅族17",
    "add_time": "2015-04-19T17:19:30.000Z",
    "time":"2021-01-12T21.30",
    "click": 4,
    "sell_price": 2500,
    "destination":"湖北——>郑州" ,
    
  },
  {
    "id": 5,
    "title": "OPPO Reno5 Pro",
    "name": "realme Q2",
    "add_time": "2015-04-19T17:54:36.000Z",
    "time":"2021-01-14T20.33",
    "click": 1,
    "sell_price": 3000,
    "destination":"无锡——>广州" ,
  
  },
  {
    "id": 6,
    "title": "三星Galaxy Note 20 Ultra",
    "name": "OPPO Reno5 Pro",
    "add_time": "2015-04-19T18:14:52.000Z",
    "time":"2021-01-13T20.33",
    "click": 0,
    "sell_price": 7000,
    "destination":"南京——>淮北" ,
   
  },
  {
    "id": 7,
    "title": "小米11",
    "name": "小米11",
    "add_time": "2015-04-19T18:25:14.000Z",
    "time":"2021-01-15T10.33",
    "click": 0,
    "sell_price": 2999,
    "destination":"上海——>新疆" ,
   
  },
  {
    "id": 8,
    "title": "魅族17",
    "name": "三星Galaxy Note 20 Ultra",
    "add_time": "2015-04-19T18:33:05.000Z",
    "time":"2021-01-13T23.33",
    "click": 0,
    "sell_price": 2600,
    "destination":"南通——>广州" ,
   
  },
  {
    "id": 9,
    "title": "realme Q2",
    "name": "华为Mate40 Pro（8GB/256GB/全网通/5G版/玻璃版）",
    "add_time": "2015-04-19T18:39:32.000Z",
    "time":"2021-01-14T01.13",
    "click": 0,
    "sell_price": 500,
    "destination":"武汉——>天津" ,
    
    
  },
  {
    "id": 10,
    "title": "Redmi K30 Pro变焦版",
    "title": "OPPO Reno5 Pro",
    "add_time": "2015-04-19T18:43:39.000Z",
    "time":"2021-01-12T20.33",
    "click": 0,
    "sell_price": 4000,
    "destination":"南京——>广州" ,
    
  },
  {
    "id": 11,
    "title": "锤子科技坚果R2",
    "name": "魅族17",
    "add_time": "2020-04-19T18:53:06.000Z",
    "time":"2021-01-15T13.26",
    "click": 0,
    "sell_price": 5000,
    "destination":"长沙——>武汉" ,
    
  },
  {
    "id": 12,
    "title": "锤子科技坚果R2",
    "name": "OPPO Reno5 Pro",
    "add_time": "2019-04-19T18:53:06.000Z",
    "time":"2021-01-14T07.26",
    "click": 0,
    "sell_price": 5000,
    "destination":"汉江——>广西" ,
    
  },
  {
    "id": 13,
    "title": "锤子科技坚果R2",
    "name": "OPPO Reno5 Pro",
    "add_time": "2018-04-19T18:53:06.000Z",
    "time":"2021-01-14T06.26",
    "click": 0,
    "sell_price": 5000,
    "destination":"成都——>南京" ,
    
  },
  {
    "id": 14,
    "title": "锤子科技坚果R2",
    "name": "realme Q2",
    "add_time": "2018-04-19T18:53:06.000Z",
    "time":"2021-01-14T07.26",
    "click": 0,
    "sell_price": 5000,
    "destination":"深圳——>湖北" ,
    
  },
  {
    "id": 15,
    "title": "锤子科技坚果R2",
    "name": "OPPO Reno5 Pro",
    "add_time": "2017-04-19T18:53:06.000Z",
    "time":"2021-01-14T08.26",
    "click": 0,
    "sell_price": 5000,
    "destination":"西南——>黑龙江" ,
    
  },
  {
    "id": 16,
    "title": "锤子科技坚果R2",
    "name": "小米11",
    "add_time": "2015-04-01T18:53:06.000Z",
    "time":"2021-01-13T09.26",
    "click": 0,
    "sell_price": 5000,
    "destination":"萧县——>淮北" ,
    
  },
  {
    "id": 17,
    "title": "锤子科技坚果R2",
    "name": "魅族17",
    "add_time": "2017-04-19T18:53:06.000Z",
    "time":"2021-01-12T10.26",
    "click": 0,
    "sell_price": 5000,
    "destination":"泗县——>砀山" ,
    
  },
  {
    "id": 18,
    "title": "锤子科技坚果R2",
    "name": "realme Q2",
    "add_time": "2016-04-19T18:53:06.000Z",
    "time":"2021-01-12T11.26",
    "click": 0,
    "sell_price": 5000,
    "destination":"徐州——>广州" ,
    
  },
  {
    "id": 19,
    "title": "锤子科技坚果R2",
    "name": "魅族17",
    "add_time": "2015-03-11T18:53:06.000Z",
    "time":"2021-01-12T12.26",
    "click": 0,
    "sell_price": 5000,
    "destination":"上海——>广州" ,
    
  },
  ]
}


export default [
  {
    url: '/vue-admin-trading/order/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 3 } = config.query
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
    url: '/vue-admin-template/order/delete',
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
  }
]
