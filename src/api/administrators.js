import request from '@/utils/request'

export function getAdministrators(params) {
  return request({
    url: '/vue-admin-template/administrators/list',
    method: 'get',
    params
  })
}


export function addAdministrators(params) {
  return request({
    url: '/vue-admin-template/administrators/new',
    method: 'post',
    data: params
  })
}


export function deleteAdministrators(params) {
  return request({
    url: '/vue-admin-template/administrators/delete/',
    method: 'get',
    params
  })
}