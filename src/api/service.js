import request from '@/utils/request'

export function serviceList(query) {
    return request({
        url:'/service/service_list',
        method:'get',
        params:query
    })
}

export function serviceDelete(query) {
    return request({
        url:'/service/service_delete',
        method:'get',
        params:query
    })
}