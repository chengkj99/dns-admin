/**
 * Created by chengkj on 16/12/8.
 */

import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)
import state  from './state'
import store  from './index'

const actions={

  GET_CACHE_GROUP_DATA_AC ({ commit },payload){

    console.log('payload.amount::',payload.amount)

    return new Promise( (reslove,reject) => {
      Vue.http.get('/api/v1/group/list',{
        params: {page:payload.amount}
      })
        .then( (res) => {

        commit({
          type:'GET_CACHE_GROUP_DATA',
          CacheGroupListData:res.data
        })

        console.log('action res::' +res)
        reslove(res)
      })
    })

  }

}

export default actions
