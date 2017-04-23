// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import Vuex from 'vuex';

import vuexI18n from 'vuex-i18n';
import { sync } from 'vuex-router-sync';
import App from './App';
import router from './router';
import store from './store';
import translationsEn from './i18n/translationsEn';
import './components/nohComponents/index';

Vue.use(BootstrapVue);
Vue.use(Vuex);
sync(store, router);

/* i18n config */
Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', translationsEn);
Vue.i18n.set('en');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
