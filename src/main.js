import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Popup } from 'vant';
import { Search } from 'vant';
import { Field } from 'vant';

Vue.use(Field);
Vue.use(Search);
Vue.use(Popup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
  
