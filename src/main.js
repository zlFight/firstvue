// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import '@/assets/css/global.css'
import Vuex from 'vuex'
import store from './store';
import calculationUtil from './util/calculationUtil';

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(calculationUtil);

Vue.config.productionTip = false

let lang = sessionStorage.getItem('lang')||'zh';



/* eslint-disable no-new */
new Vue({
  // i18n,
  router,
  store,
  render: h => h(App),
  template: '<App/>'
}).$mount("#app")

