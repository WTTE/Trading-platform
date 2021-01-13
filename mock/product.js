import Mock from 'mockjs'

const data = {
  items: [{
    "id": 87,
    "title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
    "add_time": "2015-04-19T16:51:03.000Z",
    "zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
    "click": 0,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/thumb_201504200046589514.jpg",
    "sell_price": 2195,
    "market_price": 2499,
    "stock_quantity": 60
  },
  {
    "id": 88,
    "title": "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
    "add_time": "2015-04-19T17:00:58.000Z",
    "zhaiyao": "iPhone 6 Plus设计上和iPhone 6",
    "click": 0,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/thumb_201504200059017695.jpg",
    "sell_price": 5780,
    "market_price": 6388,
    "stock_quantity": 200
  },
  {
    "id": 89,
    "title": "小米（Mi）小米Note 16G双网通版",
    "add_time": "2015-04-19T17:19:30.000Z",
    "zhaiyao": "小米Note此次采用的5.7英寸夏普/JDI分辨率",
    "click": 4,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/thumb_201504200119256512.jpg",
    "sell_price": 2199,
    "market_price": 2699,
    "stock_quantity": 60
  },
  {
    "id": 90,
    "title": "佳能（Canon） EOS 700D 单反套机",
    "add_time": "2015-04-19T17:54:36.000Z",
    "zhaiyao": "◆ 佳能普及型单反新旗舰记忆的片段，偶然的相遇，铭",
    "click": 1,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/thumb_201504200154277661.jpg",
    "sell_price": 4799,
    "market_price": 5099,
    "stock_quantity": 100
  },
  {
    "id": 91,
    "title": "尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）",
    "add_time": "2015-04-19T18:14:52.000Z",
    "zhaiyao": "作为D3200的升级版，尼康D3300最大特点即是",
    "click": 0,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/thumb_201504200214471783.jpg",
    "sell_price": 3180,
    "market_price": 3150,
    "stock_quantity": 10
  },
  {
    "id": 92,
    "title": "联想（Lenovo） G510AM 15.6英寸笔记本电脑",
    "add_time": "2015-04-19T18:25:14.000Z",
    "zhaiyao": "G系列全面支持Windows 8 简体中文版，在秉",
    "click": 0,
    "img_url": "http://39.106.163.124:8899/upload/201504/20/thumb_201504200225107390.jpg",
    "sell_price": 2999,
    "market_price": 4599,
    "stock_quantity": 100
  },
  {
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
    url: '/vue-admin-template/product/list',
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
    url: '/vue-admin-template/product/delete',
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
    url: '/vue-admin-template/product/new',
    type: 'post',
    response: config => {
      var product = config.body;
      data.items.push(product);
      return {
        code: 20000,
        data: {
          message: "添加商品成功"
        }
      }
    }
  }
]
