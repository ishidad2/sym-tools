import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo1 from '../views/Demo1.vue'
import Demo2 from '../views/Demo2.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/demo1',
    name: 'Demo1',
    component: Demo1
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: Demo2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
