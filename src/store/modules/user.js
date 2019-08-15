/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-08-15 00:20:08
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request';

const user = {
  state: {
    account: '',
    name: '',
    role: '',
    avatar: '',
    ip: '',
    last_login: ''
  },
  mutations: {
    setUser: (state, userInfo) => {
      state.name = userInfo.name;
      state.role = userInfo.role;
      state.account = userInfo.account;
      state.avatar = userInfo.avatar;
      state.last_login = userInfo.last_login;
      state.ip = userInfo.ip;
    },
    deleteUser: (state) => {
      state.account = '';
      state.name = '';
      state.roles = '';
      state.avatar = '';
      state.ip = '';
      state.last_login = '';
      localStorage.removeItem('token');
    }
  },
  actions: {
    login(context, userInfo) {
      const account = userInfo.account.trim();
      return request({
        url: '/login',
        method: 'post',
        data: {
          account,
          password: userInfo.password
        }
      });
    },
    getUserInfo(context) {
      return new Promise((resolve, reject) => {
        request({
          url: '/user-info',
          method: 'get'
        }).then((result) => {
          context.commit('setUser', result.user);
          resolve(result);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        request({
          url: '/logout',
          method: 'post'
        }).then((result) => {
          if (result.code === 200) {
            commit('deleteUser');
            resolve(result);
          }
          reject(result);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  }
};

export default user;
