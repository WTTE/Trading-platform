import Mock from 'mockjs'

const data = {
  items: [{
    id: "1297122",
    phoneName: "iPhone X",
    storage: "64G",
    prize: "￥2500",
    editor: "小明",
    desc: "9成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/picture/FnukpceW5NmG8d_4WWs498kAzgFo?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297123",
    phoneName: "iPhone 12Pro",
    storage: "128G",
    prize: "￥6500",
    editor: "小华",
    desc: "7成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/upload/20201014/20201014093450_1221.jpeg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已签收",
    value: "2",
  },
  {
    id: "1297125",
    phoneName: "iPhone 11",
    storage: "128G",
    prize: "￥3500",
    editor: "张三",
    desc: "5成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/image/20190911/20190911101106_31662.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297126",
    phoneName: "iPhone 12Mini",
    storage: "32G",
    prize: "￥4500",
    editor: "李四",
    desc: "7成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/upload/20201014/20201014092233_6118.jpeg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "运输中",
    value: "2",
  },
  {
    id: "1297127",
    phoneName: "iPhone X",
    storage: "64G",
    prize: "￥2500",
    editor: "小松",
    desc: "9成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/image/20181120/20181120171959_48005.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297128",
    phoneName: "iPhone 7",
    storage: "128G",
    prize: "￥6500",
    editor: "小李",
    desc: "7成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/picture/FrZxymCWYLgkpmpytb1bex_6scgp?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已签收",
    value: "2",
  },
  {
    id: "1297129",
    phoneName: "iPhone 6s plus",
    storage: "32G",
    prize: "￥3500",
    editor: "张麻子",
    desc: "5成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/picture/FtxBNIK02tvVKuOwCvo_bB773u9K?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297130",
    phoneName: "iPhone 8",
    storage: "256G",
    prize: "￥4500",
    editor: "李五",
    desc: "7成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/image/20181117/20181117144439_57792.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "运输中",
    value: "2",
  },
  {
    id: "1297131",
    phoneName: "iPhone 5",
    storage: "64G",
    prize: "￥2500",
    editor: "小酱",
    desc: "9成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/picture/FtIrP4EUhsK2d0ckg7eqUYcBF5fO?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297132",
    phoneName: "iPhone Xs",
    storage: "128G",
    prize: "￥6500",
    editor: "小花",
    desc: "7成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/image/20181120/20181120171959_48005.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已签收",
    value: "2",
  },
  {
    id: "1297133",
    phoneName: "iPhone 7 Plus",
    storage: "256G",
    prize: "￥3500",
    editor: "阿里里",
    desc: "5成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/picture/FoLrOeDTcy-_rqrrL4LwdqGpjoE4?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297134",
    phoneName: "iPhone 6S",
    storage: "128G",
    prize: "￥4500",
    editor: "阿萨德",
    desc: "7成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/picture/Fjj86G5dqXb3p1WjoxpjQoEb1Giw?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "运输中",
    value: "2",
  },
 
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
    url: '/vue-admin-template/apple/return',
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
  // {
  //   url: '/vue-admin-template/apple/delete',
  //   type: 'get',
  //   response: config => {
  //     var id = config.query.id;
  //     const items = data.items
  //     var index = items.findIndex(item=>{
  //       if(item.id == id){
  //         return true;
  //       }
  //     })
  //     items.splice(index,1);
  //     return {
  //       code: 20000,
  //       data: {
  //         message: "删除商品成功"
  //       }
  //     }
  //   }
  // },
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
  },


  //搜索
  {
    url: '/vue-admin-template/apple/searchlist',
    type: 'get',
    response: config => {

      const {
        page = 1, limit = 3, search = ""
      } = config.query
      const items = data.items
      const filters = items.filter((item) => {
        if (item.phoneName.indexOf(search) != -1 || item.id.indexOf(search) != -1 || item.desc.indexOf(search) != -1 ) {
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
  }
]
