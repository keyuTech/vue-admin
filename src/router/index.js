import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import layout from '@/views/layout/navbar/index'

// const dashboard = resolve => require(['../view/dashboard/dashboard'], resolve)

Vue.use(Router)

export const constantRouterMap = [
  { path: '/', name: 'home', component: layout },
  { path: '/login', name: 'login', component: Login },
  // {
  //   path: '/',
  //   // component: Layout,
  //   redirect: '/dashboard',
  //   name: '首页',
  //   children: [{ path: 'dashboard', component: dashboard }]
  // }
]

export default new Router({
  routes: constantRouterMap
})
