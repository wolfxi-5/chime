import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios封装
import Network from '@/network/profile'
Vue.prototype.$axios = Network;

//vant
import {
  Popup,
  Search,
  Field,
  SwipeCell,
  Button,
  Cell,
  CellGroup
} from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button)
Vue.use(SwipeCell);
Vue.use(Field);
Vue.use(Search);
Vue.use(Popup);

//圆形菜单
import CircleMenu from 'vue-circle-menu'
Vue.component('CircleMenu', CircleMenu)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
