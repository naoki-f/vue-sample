import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Add from '@/components/Add'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    }
  ]
})
