import request from '@/utils/request'

export function getPostman(params) {
  return request({
    url: '/vue-admin-template/postman/list',
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

export function addPostman(params) {
  return request({
    url: '/vue-admin-template/postman/new',
    method: 'post',
    data: params
  })
}

export function deletePostman(params) {
  return request({
    url: '/vue-admin-template/postman/delete/',
    method: 'get',
    params
  })
}

export function upPostman(params) {
  return request({
    url: '/vue-admin-template/postman/uplist',
    method: 'post',
    data: params
  })
}
