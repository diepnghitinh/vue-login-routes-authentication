import * as types from './mutation-types';

const mutations = {
  [types.SHOW_LOADING](state) {
    state.isLoading = true;
  }
};

export default mutations;
