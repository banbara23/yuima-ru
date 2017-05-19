import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Schedule from '@/components/schedule/Schedule'
import ScheduleDetail from '@/components/schedule/Detail'
import Entry from '@/components/schedule/Entry'
import NewSchedule from '@/components/schedule/New'
import Member from '@/components/member/Member'
import NewMember from '@/components/member/New'
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
      path: '/schedule/new',
      component: NewSchedule
    },
    {
      path: '/schedule/:id',
      component: ScheduleDetail
    },
    {
      path: '/schedule/entry/:id',
      component: Entry
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/member/new',
      component: NewMember
    },
    {
      path: '/buhi',
      component: Buhi
    }
  ]
})
