import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
export function deleteProduct(params) {
  return request({
      url: '/vue-admin-template/product/delete',
      method: 'get',
      params
  })
}
export function getSearchList(params) {
  return request({
    url: '/vue-admin-template/postman/searchlist',
    method: 'get',
    params
  })
}

