import request from '@/utils/request'

export function getProductList(params) {
  return request({
    url: '/vue-admin-trading/order/list',
    method: 'get',
    params
  })
}
export function deleteProduct(params) {
  return request({
    url: '/vue-admin-trading/order/delete',
    method: 'get',
    params
  })
}