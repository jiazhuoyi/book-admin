/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-09-03 11:33:38
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedStated from 'vuex-persistedstate';
import user from './modules/user';
import notice from './modules/notice';
import sidebar from './modules/sidebar';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    notice,
    sidebar
  },
  plugins: [createPersistedStated({
    storage: window.localStorage,
    reducer(val) {
      return {
        user: val.user
      };
    }
  })]
});

export default store;
