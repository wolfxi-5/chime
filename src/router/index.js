import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue');
const Autocomposed = () => import('../views/autocomposed/Autocomposed.vue');
const Forum = () => import('../views/forum/Forum.vue');
const Profile = () => import('../views/profile/Profile.vue');

const Log = () => import('../views/profile/details/Log.vue');

const DetailOne = () => import('../views/forum/childcomps/details/detailOne.vue');
const DetailTwo = () => import('../views/forum/childcomps/details/detailTwo.vue');
const DetailThree = () => import('../views/forum/childcomps/details/detailThree.vue');

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/profile'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      footshow: false
    }
  },
  {
    path: '/autocomposed',
    component: Autocomposed,
    meta: {
      footshow: true
    }
  },
  {
    path: '/forum',
    component: Forum,
    meta: {
      footshow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      footshow: true
    }
  },
  {
    path: '/log',
    component: Log,
    meta: {
      footshow: false
    }
  },
  {
    path: '/detailone',
    component: DetailOne,
    meta: {
      footshow: false
    }
  },
  {
    path: '/detailtwo',
    component: DetailTwo,
    meta: {
      footshow: false
    }
  },
  {
    path: '/detailthree',
    component: DetailThree,
    meta: {
      footshow: false
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
