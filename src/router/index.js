import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'directoryList',
          name: 'directoryList',
          component: () => import('../views/directoryList/directoryList')
        },
        {
          path: 'directoryList1',
          name: 'directoryList1',
          component: () => import('../components/directoryList1')
        },
        {
          path: 'directoryList2',
          name: 'directoryList2',
          component: () => import('../components/directoryList2')
        },
        {
          path: 'directoryList3',
          name: 'directoryList3',
          component: () => import('../components/directoryList3')
        },
        {
          path: 'directoryList4',
          name: 'directoryList4',
          component: () => import('../components/directoryList4')
        },
        {
          path: 'directoryList5',
          name: 'directoryList5',
          component: () => import('../components/directoryList5')
        }
      ]
    }
  ]
})
