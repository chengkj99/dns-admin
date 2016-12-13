/**
 * Created by chengkj on 16/12/8.
 */

import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)
import state  from './state'
import store  from './index'
// Vue.http.options.beforeSend = function(request) {
//   request.headers['Content-Type'] = 'application/json; charset=UTF-8';
// };

const actions={

  /* --------------------------缓存组--------------------------- */
  //获取缓存组信息
  GET_CACHE_GROUP_DATA_AC ({ commit },payload){

    console.log('payload.amount::' +payload.amount)

    return new Promise( (reslove,reject) => {
      Vue.http.get('/api/v1/group/list',{
        params: payload.amount
      })
        .then(
          (res) => {
            commit({
              type:'GET_CACHE_GROUP_DATA',
              CacheGroupListData:res.data
            })
            reslove(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },

  //添加缓存组
  ADD_CACHE_GROUP_AC ({ commit },payload){
    console.log(payload.amount)
    //POST /v1/group/create
    return new Promise( (resolve,reject) => {
      Vue.http.post('/api/v1/group/create',payload.amount)
        .then(
          (res) => {
          store.dispatch({
            type:'GET_CACHE_GROUP_DATA_AC',
            amount:{page: 1}
          })
          resolve(res)
        },
          (res) => {
            reject(res)
          }
        )

    })

  },

  //删除缓存组
  DEL_CACHE_GROUP_AC ({ commit },payload){
    console.log(payload.amount)
    //POST /v1/group/create
    return new Promise( (resolve,reject) => {
      Vue.http.post('/api/v1/group/delete',payload.amount)
        .then(
          (res) => {
          store.dispatch({
            type:'GET_CACHE_GROUP_DATA_AC',
            amount:{page: 1}
          })
          resolve(res)
        },
          (res) => {
            reject(res)
          }
        )

    })

  },

  //上线缓存组
  ONLINE_CACHE_GROUP_AC ({ commit },payload){
    console.log(payload.amount)
    //POST /v1/group/offline
    return new Promise( (resolve,reject) => {
      Vue.http.post('/api/v1/group/online',payload.amount)
        .then(
          (res) => {
          store.dispatch({
            type:'GET_CACHE_GROUP_DATA_AC',
            amount:{page: 1}
          })
          resolve(res)
        },
          (res) => {
            reject(res)
          }
        )

    })

  },
  //下线缓存组
  OFFLINE_CACHE_GROUP_AC ({ commit },payload){
    console.log(payload.amount)
    //POST /v1/group/offline
    return new Promise( (resolve,reject) => {
      Vue.http.post('/api/v1/group/offline',payload.amount)
        .then(
          (res) => {
          store.dispatch({
            type:'GET_CACHE_GROUP_DATA_AC',
            amount:{page: 1}
          })
          resolve(res)
        },
          (res) => {
            reject(res)
          }
        )

    })

  },

  //查询缓存组区域覆盖
  QUERY_CACHE_GROUP_COVER_AC ({ commit },payload){
    //GET /v1/group/cover/info?group_name=xxxx
    console.log(payload.amount)
    return new Promise( (resolve,reject) => {
      Vue.http.get('/api/v1/group/cover/info',{params:payload.amount})
        .then(
          (res) => {
            console.log('res.data::',res.data)
            commit({
              type:'QUERY_CACHE_GROUP_COVER',
              CacheGroupCoverDataList:res.data.data
            })
          resolve(res)
        },
          (res) => {
            reject(res)
          }
        )

    })

  },

  //添加IP
  ADD_IP_AC ({ commit },payload){
    console.log('payload.amount::',payload.amount)

    return new Promise( (reslove,reject) => {
      Vue.http.post('/api/v1/group/add/ip',payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type:'GET_CACHE_GROUP_DATA_AC',
              amount:{page: 1}
            })
            reslove(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },
  //删除IP
  DEL_IP_AC ({ commit },payload){

    //POST /v1/group/delete/ip
    return new Promise((resolve,reject) => {
      Vue.http.post('/api/v1/group/delete/ip',payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type:'GET_CACHE_GROUP_DATA_AC',
              amount:{page: 1}
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })
  },


  /* --------------------------调度平台--------------------------- */

///v1/schedule/view/info?schedule=all.lv2&domain=lxb.club&view=默认&view_type=default

  //添加调度平台信息

  ADD_DISPATCH_PLATFORM_AC ({ commit },payload ) {
    console.log('payload.amount::' +payload.amount)
    return new Promise( (resolve,reject) => {
      Vue.http.post('/api/v1/schedule/add/group',payload.amount)
        .then(
          (res) => {
            console.log(res)
            resolve(res)
          },
          (res) => {
            console.log(res)
            reject(res)
          }
        )
    })

  },
  //获取调度平台管理信息
  GET_DISPATCH_PLATFORM_DATA_AC ({ commit },payload){

    console.log('payload.amount::' +payload.amount)

    return new Promise( (resolve,reject) => {
      Vue.http.get('/api/v1/schedule/isp/view',{
        params: payload.amount
      })
        .then(
          (res) => {
            commit({
              type:'GET_DISPATCH_PLATFORM_DATA',
              DispatchPlatformListData:res.data
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },

  //获取域名
  GET_IP_NAME_DATA_AC ({ commit }){

    return new Promise( (resolve,reject) => {
      Vue.http.get('/api/v1/domain/list')
        .then(
          (res) => {
            commit({
              type:'GET_IP_NAME_DATA',
              DomainNameData:res.data.data
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },
  //获取区域
  GET_REGION_NAME_DATA_AC ({ commit },payload){

    return new Promise( (resolve,reject) => {
      Vue.http.get('/api/v1/view/list')
        .then(
          (res) => {
            commit({
              type:'GET_REGION_NAME_DATA',
              RegionNameData:res.data.data
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },
  //获取缓存组
  GET_CACHE_GROUP_NAME_DATA_AC ({ commit },payload){

    return new Promise( (resolve,reject) => {
      Vue.http.get('/api/v1/group/list?page=1')
        .then(
          (res) => {
            commit({
              type:'GET_CACHE_GROUP_NAME_DATA',
              CacheGroupNameData:res.data.data
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },



}










export default actions
