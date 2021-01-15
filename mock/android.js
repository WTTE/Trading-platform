import Mock from 'mockjs'

const data = {
  items: [{
    id: "1297140",
    phoneName: "HUAWEI MATE 20",
    storage: "128G",
    prize: "￥3500",
    editor: "张三",
    desc: "9成新",
    phoneNumber: "1233234234",
    phonePic: "https://res.vmallres.com/pimages//product/6941487207121/428_428_CFF5464CA70F14D0158F19834D9F7CEDF5FF98DD97F3B804mp.png",
    date: "2020-01-13",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297141",
    phoneName: "HUAWEI HONOR 2",
    storage: "64G",
    prize: "￥2500",
    editor: "小宋",
    desc: "7成新",
    phoneNumber: "123456343901",
    phonePic: "https://res.vmallres.com/pimages//product/6901443353149/428_428_1D8C064B860EB5FB2671030543964FB219AEF79AABC06D2Dmp.png",
    date: "2020-01-22",
    sign: "已签收",
    value: "2",
  },
  {
    id: "1297142",
    phoneName: "VIVO oppo 7X",
    storage: "32G",
    prize: "￥1500",
    editor: "张六",
    desc: "5成新",
    phoneNumber: "12354578901",
    phonePic: "https://image.suhuishou.com/attached/picture/FuQqqFg5sE3Qt2nQEJh2AEA1E96e?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297143",
    phoneName: "VIVO FIND 10",
    storage: "256G",
    prize: "￥4500",
    editor: "李十",
    desc: "7成新",
    phoneNumber: "13345678901",
    phonePic: "https://image.suhuishou.com/attached/image/20190114/20190114150320_71289.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-23",
    sign: "运输中",
    value: "2",
  },
  {
    id: "1297144",
    phoneName: "小米 8",
    storage: "64G",
    prize: "￥1150",
    editor: "小拉",
    desc: "9成新",
    phoneNumber: "18345678901",
    phonePic: "https://image.suhuishou.com/attached/picture/FsFYt9zg-dxDVJj-KsYH78oei4DO?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-10",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297145",
    phoneName: "小米 MAX3",
    storage: "128G",
    prize: "￥3500",
    editor: "小华",
    desc: "7成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/picture/Fq4kVri6lOog7FbtkonercQ-dMxs?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-02",
    sign: "已签收",
    value: "2",
  },
  {
    id: "1297146",
    phoneName: "OPPO R15梦境版",
    storage: "64G",
    prize: "￥1500",
    editor: "刘四",
    desc: "5成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/image/20190924/20190924105521_99185.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297147",
    phoneName: "OPPO R11 plus",
    storage: "128G",
    prize: "￥4000",
    editor: "李五",
    desc: "7成新",
    phoneNumber: "12345678901",
    phonePic: "http://images.suhuishou.com/Fh_7-kyLUrqR9fkHFF5tuJvXsFum?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-09",
    sign: "运输中",
    value: "2",
  },
  {
    id: "1297148",
    phoneName: "努比亚Z17miniS",
    storage: "32G",
    prize: "￥1500",
    editor: "赵四",
    desc: "9成新",
    phoneNumber: "12345678901",
    phonePic: "https://image.suhuishou.com/attached/image/20190302/20190302175338_45179.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-22",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297149",
    phoneName: "魅族mx4pro",
    storage: "256G",
    prize: "￥5500",
    editor: "小华",
    desc: "7成新",
    phoneNumber: "18365678901",
    phonePic: "https://image.suhuishou.com/attached/image/20191115/20191115192535_60001.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-22",
    sign: "已签收",
    value: "2",
  },
  {
    id: "1297150",
    phoneName: "魅族 V8",
    storage: "32G",
    prize: "￥500",
    editor: "杜八",
    desc: "5成新",
    phoneNumber: "19345678901",
    phonePic: "https://image.suhuishou.com/attached/image/20190508/20190508171607_91309.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-12",
    sign: "已发货",
    value: "2",
  },
  {
    id: "1297151",
    phoneName: "魅族 16th Plus",
    storage: "64G",
    prize: "￥1500",
    editor: "伍德",
    desc: "7成新",
    phoneNumber: "133457778901",
    phonePic: "https://image.suhuishou.com/attached/image/20200401/20200401145236_27327.jpg?imageMogr2/thumbnail/160x160!/interlace/1",
    date: "2020-01-18",
    sign: "运输中",
    value: "2",
  },

  ]
}




export default [
  {
    url: '/vue-admin-template/android/list',
    type: 'get',
    response: config => {
      //获取分页信息
      const { page = 1, limit = 20 } = config.query
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          //根据分页信息返回数据
          items: items.slice((page - 1) * limit, limit * page)
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
  //   url: '/vue-admin-template/android/delete',
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
    url: '/vue-admin-template/android/new',
    type: 'post',
    response: config => {
      var android = config.body;
      data.items.push(android);
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
    url: '/vue-admin-template/android/searchlist',
    type: 'get',
    response: config => {

      const {
        page = 1, limit = 3, search = ""
      } = config.query
      console.log(page, limit, search, "00000000000000000");
      const items = data.items
      const filters = items.filter((item) => {
        if (item.phoneName.indexOf(search) != -1 || item.id.indexOf(search) != -1 || item.desc.indexOf(search) != -1  ) {
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
