import Mock from 'mockjs'

const data = {
  items: [{
  
    "id": 93,
    "title": "Apple iMac MF883CH/A 21.5英寸一体机电脑",
    "add_time": "2015-04-19T18:33:05.000Z",
    "zhaiyao": "—— iMac —— 锋锐设计，锋芒表现。iMac",
    "click": 0,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/201504200341260763.jpg",
    "sell_price": 7200,
    "market_price": 7988,
    "stock_quantity": 10
  },
  {
    "id": 94,
    "title": "金士顿（Kingston） DataTraveler SE9 32GB 金属U盘",
    "add_time": "2015-04-19T18:39:32.000Z",
    "zhaiyao": "品名：金士顿颜色：银色容量：32GB USB2.0",
    "click": 0,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/thumb_201504200239192345.jpg",
    "sell_price": 79,
    "market_price": 99,
    "stock_quantity": 100
  },
  {
    "id": 95,
    "title": "惠普（HP）LaserJet 2035商用黑白激光打印机（黑色）",
    "add_time": "2015-04-19T18:43:39.000Z",
    "zhaiyao": "全新hp laserjet p2035系列激光打印",
    "click": 0,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/thumb_201504200242250674.jpg",
    "sell_price": 1899,
    "market_price": 2099,
    "stock_quantity": 100
  },
  {
    "id": 96,
    "title": "惠普(HP) Officejet Pro 8610商用彩色喷墨一体机",
    "add_time": "2015-04-19T18:53:06.000Z",
    "zhaiyao": "专业彩色打印件的单页成本比激光打印机低 50%，从",
    "click": 0,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/thumb_201504200253026047.jpg",
    "sell_price": 1999,
    "market_price": 2099,
    "stock_quantity": 100
  }
  ]
}


export default [
  {
    url: '/vue-admin-template/apple/list',
    type: 'get',
    response: config => {
      //获取分页信息
      const {page = 1, limit = 20} = config.query
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          //根据分页信息返回数据
          items: items.slice((page-1)*limit,limit*page)
        }
      }
    }
  },
  {
    url: '/vue-admin-template/apple/delete',
    type: 'get',
    response: config => {
      var id = config.query.id;
      const items = data.items
      var index = items.findIndex(item=>{
        if(item.id == id){
          return true;
        }
      })
      items.splice(index,1);
      return {
        code: 20000,
        data: {
          message: "删除商品成功"
        }
      }
    }
  },
  {
    url: '/vue-admin-template/apple/new',
    type: 'post',
    response: config => {
      var apple = config.body;
      data.items.push(apple);
      return {
        code: 20000,
        data: {
          message: "添加商品成功"
        }
      }
    }
  }
]
