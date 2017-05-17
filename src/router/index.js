import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Schedule from '@/components/schedule/Schedule'
import Member from '@/components/member/Member'
import Buhi from '@/components/buhi/Buhi'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/schedule',
      component: Schedule
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/buhi',
      component: Buhi
    }
  ]
})
