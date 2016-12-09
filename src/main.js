// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'


import App from './App'
import router from './router'
import Resource from 'vue-resource'
import store from './store'
// import zPagenav from 'vue-pagenav'

import 'element-ui/lib/theme-default/index.css'


Vue.use(Vuex)
Vue.use(Resource)
Vue.use(ElementUI)
// Vue.use(zPagenav)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
}).$mount('#app')
