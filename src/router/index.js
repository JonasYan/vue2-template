import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const Routes = [
  {
    path: '/index',
    component: () => import('@/views/index/index'),
    name: 'index',
    meta: { title: '首页' }
  },
  { path: '*', redirect: '/index', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: Routes
})
export default createRouter()
