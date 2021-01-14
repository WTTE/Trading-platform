import request from '@/utils/request'

export function getAdmin(params) {
  return request({
    url: '/vue-admin-template/admin/list',
    method: 'get',
    params
  })
}

export function getSearchlist(params) {
  return request({
    url: '/vue-admin-template/admin/searchlist',
    method: 'get',
    params
  })
}

export function addAdmin(params) {
  return request({
    url: '/vue-admin-template/admin/new',
    method: 'post',
    data: params
  })
}


export function deleteAdmin(params) {
  return request({
    url: '/vue-admin-template/admin/delete',
    method: 'get',
    params
  })
}

export function updateAdmin(params) {
  return request({
    url: '/vue-admin-template/admin/update',
    method: 'post',
    data: params
  })
}