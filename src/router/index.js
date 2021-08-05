import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue');
const Autocomposed = () => import('../views/autocomposed/Autocomposed.vue');
const Forum = () => import('../views/forum/Forum.vue');
const Profile = () => import('../views/profile/Profile.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/autocomposed',
    component: Autocomposed
  },
  {
    path: '/forum',
    component: Forum
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
