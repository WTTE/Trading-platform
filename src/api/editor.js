import request from '@/utils/request'

export function getEditor(params) {
  return request({
    url: '/vue-admin-template/editor/list',
    method: 'get',
    params
  })
}

export function getSearchlist(params) {
  return request({
    url: '/vue-admin-template/editor/searchlist',
    method: 'get',
    params
  })
}

export function addEditor(params) {
  return request({
    url: '/vue-admin-template/editor/new',
    method: 'post',
    data: params
  })
}


export function deleteEditor(params) {
  return request({
    url: '/vue-admin-template/editor/delete',
    method: 'get',
    params
  })
}

export function updateEditor(params) {
  return request({
    url: '/vue-admin-template/editor/update',
    method: 'post',
    data: params
  })
}