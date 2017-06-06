import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Schedule from '@/components/schedule/Schedule'
import ScheduleDetail from '@/components/schedule/Detail'
import Entry from '@/components/schedule/Entry'
import NewSchedule from '@/components/schedule/New'
import Member from '@/components/member/Member'
import MemberDetail from '@/components/member/Detail'
import NewMember from '@/components/member/New'
import Buhi from '@/components/buhi/Buhi'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Index,
      meta: {title: 'ゆいま〜る'}
    },
    {
      path: '/schedule',
      component: Schedule,
      meta: {title: 'スケジュール - ゆいま〜る'}
    },
    {
      path: '/schedule/new',
      component: NewSchedule,
      meta: { title: 'スケジュール登録 - ゆいま〜る' }
    },
    {
      path: '/schedule/:id',
      component: ScheduleDetail,
      meta: { title: 'スケジュール詳細 - ゆいま〜る' }
    },
    {
      path: '/schedule/entry/:id',
      component: Entry,
      meta: { title: 'スケジュール回答 - ゆいま〜る' }
    },
    {
      path: '/member',
      component: Member,
      meta: { title: 'メンバー - ゆいま〜る' }
    },
    {
      path: '/member/new',
      component: NewMember,
      meta: { title: 'メンバー登録 - ゆいま〜る' }
    },
    {
      path: '/member/:id',
      component: MemberDetail,
      meta: { title: 'メンバー詳細 - ゆいま〜る' }
    },
    {
      path: '/buhi',
      component: Buhi,
      meta: { title: '部費 - ゆいま〜る' }
    }
  ]
})
