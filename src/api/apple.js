
import request from '@/utils/request'

export function getAppleList(params) {
    return request({
      url: '/vue-admin-template/apple/list',
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
  
  export function addApple(params) {
    return request({
      url: '/vue-admin-template/apple/new',
      method: 'post',
      data: params
    })
  }
  
  
  // export function deleteApple(params) {
  //   return request({
  //     url: '/vue-admin-template/apple/delete/',
  //     method: 'get',
  //     params
  //   })
  // }

  export function getSearchList(params) {
    return request({
      url: '/vue-admin-template/apple/searchlist',
      method: 'get',
      params
    })
  }