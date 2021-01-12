import request from '@/utils/request'

export function getProductList(params) {
  return request({
    url: '/vue-admin-template/product/list',
    method: 'get',
    params
  })
}


export function addProduct(params) {
  return request({
    url: '/vue-admin-template/product/new',
    method: 'post',
    data: params
  })
}


export function deleteProduct(params) {
  return request({
    url: '/vue-admin-template/product/delete/',
    method: 'get',
    params
  })
}