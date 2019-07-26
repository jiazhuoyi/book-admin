import request from '@/utils/request';

const user = {
  state: {
    account: '',
    name: '',
    role: '',
    avatar: ''
  },
  mutations: {
    setUser: (state, userInfo) => {
      state.name = userInfo.name;
      state.role = userInfo.role;
      state.account = userInfo.account;
      state.avatar = userInfo.avatar;
    },
    deleteUser: (state) => {
      state.account = '';
      state.name = '';
      state.roles = '';
      state.avatar = '';
      localStorage.removeItem('token');
    }
  },
  actions: {
    login(context, userInfo) {
      const account = userInfo.account.trim();
      return request({
        url: '/manage/login',
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
          url: '/manage/user-info',
          method: 'get'
        }).then((result) => {
          context.commit('setUser', result.user);
          resolve(result);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    logout({ commit }, account) {
      return new Promise((resolve, reject) => {
        request({
          url: '/logout',
          method: 'post',
          data: {
            account
          }
        }).then((result) => {
          if (result.status === 200) {
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
