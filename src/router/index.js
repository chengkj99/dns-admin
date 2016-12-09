/**
 * Created by chengkj on 16/11/26.
 */

import Vue from 'vue'
import Router from 'vue-router'

import Hello from '../components/Hello'
import Test from '../components/test'
import CacheGroup from '../components/CacheGroup'
import CustomerAccess from '../components/CustomerAccess'
import DispatchPlatform from '../components/DispatchPlatform'


Vue.use(Router)

const routes = [

  {
    path: '/',
    component: Hello
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/CacheGroup',
    name: 'CacheGroup',
    component: CacheGroup
  },
  {
    path: '/CustomerAccess',
    name: 'CustomerAccess',
    component: CustomerAccess
  },
  {
    path: '/DispatchPlatform',
    name: 'DispatchPlatform',
    component: DispatchPlatform
  },
]

const router = new Router({
  routes
})
export default router
