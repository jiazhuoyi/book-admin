/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 11:33:03
 * @LastEditTime: 2019-09-03 16:28:40
 * @LastEditors: Please set LastEditors
 */
const sidebar = {
  state: {
    open: true
  },
  mutations: {
    setSidebarOpen: (state) => {
      state.open = !state.open;
    }
  }
};

export default sidebar;
