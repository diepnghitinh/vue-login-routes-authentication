import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import teachers from './modules/teachers';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  authView: 'login',
  notifications: [],
  isLoading: false,
  isFetchingMore: false,
  isAuthWidgetOpen: false,
  isNotificationPanelOpen: false,
  appAlerts: []
};

const store = new Vuex.Store({
  getters,
  state,
  actions,
  mutations,
  modules: {
    teachers
  },
  strict: debug
});

export default store;
