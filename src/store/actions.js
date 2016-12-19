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

const actions= {

  /* --------------------------缓存组--------------------------- */
  //获取缓存组全部列表信息
  GET_CACHE_GROUP_DATA_AC ({commit}, payload){

    console.log('payload.amount::' + payload.amount)

    return new Promise((reslove, reject) => {
      Vue.http.get('/v1/group/list', {
        params: payload.amount
      })
        .then(
          (res) => {
            commit({
              type: 'GET_CACHE_GROUP_DATA',
              CacheGroupListData: res.data
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
  ADD_CACHE_GROUP_AC ({commit}, payload){
    console.log(payload.amount)
    //POST /v1/group/create
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/group/create', payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type: 'GET_CACHE_GROUP_DATA_AC',
              amount: {page: 1}
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
  DEL_CACHE_GROUP_AC ({commit}, payload){
    console.log(payload.amount)
    //POST /v1/group/create
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/group/delete', payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type: 'GET_CACHE_GROUP_DATA_AC',
              amount: {page: 1}
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
  ONLINE_CACHE_GROUP_AC ({commit}, payload){
    console.log(payload.amount)
    //POST /v1/group/offline
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/group/online', payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type: 'GET_CACHE_GROUP_DATA_AC',
              amount: {page: 1}
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
  OFFLINE_CACHE_GROUP_AC ({commit}, payload){
    console.log(payload.amount)
    //POST /v1/group/offline
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/group/offline', payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type: 'GET_CACHE_GROUP_DATA_AC',
              amount: {page: 1}
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
  QUERY_CACHE_GROUP_COVER_AC ({commit}, payload){
    //GET /v1/group/cover/info?group_name=xxxx
    console.log(payload.amount)
    return new Promise((resolve, reject) => {
      Vue.http.get('/v1/group/cover/info', {params: payload.amount})
        .then(
          (res) => {
            console.log('res.data::', res.data)
            commit({
              type: 'QUERY_CACHE_GROUP_COVER',
              CacheGroupCoverDataList: res.data.data
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
  ADD_IP_AC ({commit}, payload){
    console.log('payload.amount::', payload.amount)

    return new Promise((reslove, reject) => {
      Vue.http.post('/v1/group/add/ip', payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type: 'GET_CACHE_GROUP_DATA_AC',
              amount: {page: 1}
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
  DEL_IP_AC ({commit}, payload){

    //POST /v1/group/delete/ip
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/group/delete/ip', payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type: 'GET_CACHE_GROUP_DATA_AC',
              amount: {page: 1}
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


  //获取调度平台全部列表信息
  GET_DISPATCH_PLATFORM_DATA_AC ({commit}, payload){

    console.log('payload.amount::' + payload.amount)
    return new Promise((resolve, reject) => {
      Vue.http.get('/v1/schedule/isp/view', {
        params: payload.amount
      })
        .then(
          (res) => {
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },
  //获取调度平台调度层域名信息/v1/schedule/list
  GET_SCHEDULE_LIST_DATA_AC ({commit}, payload){

    return new Promise((resolve, reject) => {
      Vue.http.get('/v1/schedule/list?page=1')
        .then(
          (res) => {
            commit({
              type: 'GET_SCHEDULE_LIST_DATA',
              ScheduleListData: res.data.data
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },

  //添加调度平台列表信息
  ADD_DISPATCH_PLATFORM_AC ({commit}, payload) {
    console.log('payload.amount::' + payload.amount)
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/schedule/add/group', payload.amount)
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

  //添加调度平台调度层域名列表
  ADD_SCHEDULE_LIST_AC ({commit}, payload) {
    console.log('payload.amount::' + payload.amount)
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/schedule/create', payload.amount)
        .then(
          (res) => {
            store.dispatch('GET_SCHEDULE_LIST_DATA_AC')
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

  //获取域名列表
  GET_IP_NAME_DATA_AC ({commit}){

    return new Promise((resolve, reject) => {
      Vue.http.get('/v1/domain/list')
        .then(
          (res) => {
            commit({
              type: 'GET_IP_NAME_DATA',
              DomainNameData: res.data.data
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },
  //获取区域列表
  GET_REGION_NAME_DATA_AC ({commit}, payload){

    return new Promise((resolve, reject) => {
      Vue.http.get('/v1/view/list')
        .then(
          (res) => {
            commit({
              type: 'GET_REGION_NAME_DATA',
              RegionNameData: res.data.data
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },
  //获取缓存组列表
  GET_CACHE_GROUP_NAME_DATA_AC ({commit}, payload){

    return new Promise((resolve, reject) => {
      Vue.http.get('/v1/group/list?page=1')
        .then(
          (res) => {
            commit({
              type: 'GET_CACHE_GROUP_NAME_DATA',
              CacheGroupNameData: res.data.data
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },
  //获取区域详情
  GET_SCHEDULE_LIST_DETAILS_DATA_AC ({commit}, payload){
///v1/schedule/view/info?schedule=all.lv2&domain=lxb.club&view=默认&view_type=default
    console.log('payload.amount', payload.amount)
    return new Promise((resolve, reject) => {
      Vue.http.get('/v1/schedule/view/info?page=1', {params: payload.amount})
        .then(
          (res) => {
            commit({
              type: 'GET_SCHEDULE_LIST_DETAILS_DATA',
              ScheduleListDataDetails: res.data
            })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },

  //修改缓存组自有权重
  UPDATE_SCHEDULE_WEIGHT_AC ({commit}, payload){
    //POST /v1/schedule/view/fix/weight
    console.log('payload.amount', payload.amount)
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/schedule/view/fix/weight', payload.amount)
        .then(
          (res) => {
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },
  //删除域名区域覆盖缓存组
  DEL_SCHEDULE_WEIGHT_AC ({commit}, payload){
    //POST /v1/schedule/delete/group
    console.log('payload.amount', payload.amount)
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/schedule/delete/group', payload.amount)
        .then(
          (res) => {
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },
  //查询域名下view信息
  GET_SCHEDULE_DOMAIN_VIEW_AC ({commit}, payload){
    //GET /v1/schedule/view?schedule=all.lv2&domain=lxb.club&view=华北联通&view_typ=big_view
    console.log('payload.amount', payload.amount)
    return new Promise((resolve, reject) => {
      Vue.http.get('/v1/schedule/view', {params: payload.amount})
        .then(
          (res) => {
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })

  },

  /*-------- 具体区域缓存组上下线、权重修改、删除-------- */

//删除
  DEL_SCHEDULE_GROUP_AC ({commit}, payload){
    console.log(payload.amount)
    //POST /v1/schedule/delete/group
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/schedule/delete/group', payload.amount)
        .then(
          (res) => {
            // store.dispatch({
            //   type:'GET_CACHE_GROUP_DATA_AC',
            //   amount:{page: 1}
            // })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )

    })

  },

//上线
  ONLINE_SCHEDULE_GROUP_AC ({commit}, payload){
    console.log(payload.amount)
    //POST /v1/group/offline
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/schedule/group/online', payload.amount)
        .then(
          (res) => {
            // store.dispatch({
            //   type:'GET_CACHE_GROUP_DATA_AC',
            //   amount:{page: 1}
            // })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )

    })

  },
//下线
  OFFLINE_SCHEDULE_GROUP_AC ({commit}, payload){
    console.log(payload.amount)
    //POST /v1/group/offline
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/schedule/group/offline', payload.amount)
        .then(
          (res) => {
            // store.dispatch({
            //   type: 'GET_CACHE_GROUP_DATA_AC',
            //   amount: {page: 1}
            // })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )

    })

  },
  //修改借用缓存组权重
  UPDATE_SCHEDULE_GROUP_BORROW_WEIGHT_AC ({commit}, payload){
    console.log(payload.amount)
    //POST /v1/schedule/fix/borrowed/weight
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/schedule/fix/borrowed/weight', payload.amount)
        .then(
          (res) => {
            // store.dispatch({
            //   type: 'GET_CACHE_GROUP_DATA_AC',
            //   amount: {page: 1}
            // })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })
  },
  //修改自有缓存组权重
  UPDATE_SCHEDULE_GROUP_SELF_WEIGHT_AC ({commit}, payload){
    console.log(payload.amount)
    //POST /v1/schedule/view/fix/weight
    return new Promise((resolve, reject) => {
      Vue.http.post('/v1/schedule/view/fix/weight', payload.amount)
        .then(
          (res) => {
            // store.dispatch({
            //   type: 'GET_CACHE_GROUP_DATA_AC',
            //   amount: {page: 1}
            // })
            resolve(res)
          },
          (res) => {
            reject(res)
          }
        )
    })
  },
  /* -------------------------- 客户接入层 --------------------------- */
  //获取客户接入层列表信息
  GET_CUSTOM_GROUP_DATA_AC ({commit}, payload){
    console.log('payload.amount::' + payload.amount)
    return new Promise((reslove, reject) => {
      Vue.http.get('/v1/joint/list', {
        params: payload.amount
      })
        .then(
          (res) => {
            commit({
              type: 'GET_CUSTOM_GROUP_DATA',
              CustomerAccessListData: res.data.data
            })
            reslove(res)
          },
          (res) => {
            reject(res)
          }
        )
    })
  },
  //新建接入层
  ADD_CUSTOM_GROUP_DATA_AC ({commit}, payload){
    console.log('payload.amount::' + payload.amount)
    return new Promise((reslove, reject) => {
      Vue.http.post('/v1/joint/create', payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type: 'GET_CUSTOM_GROUP_DATA_AC',
              amount: {page: 1}
            })
            reslove(res)
          },
          (res) => {
            reject(res)
          }
        )
    })
  },
  //删除接入层域名记录
  DEL_CUSTOM_GROUP_DATA_AC ({commit}, payload){
    console.log('payload.amount::' + payload.amount)
    return new Promise((reslove, reject) => {
      Vue.http.post('/v1/joint/delete', payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type: 'GET_CUSTOM_GROUP_DATA_AC',
              amount: {page: 1}
            })
            reslove(res)
          },
          (res) => {
            reject(res)
          }
        )
    })
  },
  //上下线操作
  UPDATE_CUSTOM_GROUP_DATA_AC ({commit}, payload){
    console.log('payload.amount::' + payload.amount)
    return new Promise((reslove, reject) => {
      Vue.http.post('/v1/joint/modify/status', payload.amount)
        .then(
          (res) => {
            store.dispatch({
              type: 'GET_CUSTOM_GROUP_DATA_AC',
              amount: {page: 1}
            })
            reslove(res)
          },
          (res) => {
            reject(res)
          }
        )
    })
  },




}



export default actions
