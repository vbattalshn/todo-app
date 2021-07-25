import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Completed from '../views/Completed.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Todo},
  { path: '/completed', component: Completed }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
