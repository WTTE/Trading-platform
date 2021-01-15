import request from '@/utils/request'

export function getAndroidList(params) {
    return request({
      url: '/vue-admin-template/android/list',
      method: 'get',
      params
    })
  }
  export function returnList(params) {
    return request({
      url: '/vue-admin-template/apple/return',
      method: 'get',
      params
    })
  }
  
  export function addAndroid(params) {
    return request({
      url: '/vue-admin-template/android/new',
      method: 'post',
      data: params
    })
  }
  
  
  // export function deleteAndroid(params) {
  //   return request({
  //     url: '/vue-admin-template/android/delete/',
  //     method: 'get',
  //     params
  //   })
  // }

  export function getSearchList(params) {
    return request({
      url: '/vue-admin-template/android/searchlist',
      method: 'get',
      params
    })
  }
  