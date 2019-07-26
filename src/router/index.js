import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/dashboard/dashboard';
import Login from '@/views/login';
import Main from '@/views/main';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/dashboard',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/dashboard',
      meta: {
        requireAuth: true,
        title: '首页',
        icon: 'icon-icon_shop'
      },
      component: Main,
      children: [{
        path: '',
        name: 'Dashboard',
        meta: {
          requireAuth: true
        },
        component: Dashboard
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('@/views/signup/index')
    },
    {
      path: '/order',
      meta: {
        requireAuth: true,
        icon: 'icon-dingdan',
        title: '订单管理',
        bread: '订单管理'
      },
      component: Main,
      children: [
        {
          path: '',
          name: 'Order',
          meta: {
            requireAuth: true
          },
          component: () => import('@/views/order/index')
        }
      ]
    },
    {
      path: '/book',
      meta: {
        requireAuth: true,
        icon: 'icon-tushu',
        title: '图书管理',
        bread: '图书管理'
      },
      component: Main,
      children: [
        {
          path: '',
          name: 'Book',
          meta: {
            requireAuth: true
          },
          component: () => import('@/views/book/index')
        },
        {
          path: 'add',
          name: 'AddBook',
          meta: {
            bread: '图书入库',
            requireAuth: true
          },
          component: () => import('@/views/book/add-book')
        }
      ]
    },
    {
      path: '/user',
      meta: {
        requireAuth: true,
        icon: 'icon-yonghuzu',
        title: '用户管理',
        bread: '用户管理'
      },
      component: Main,
      children: [
        {
          path: '',
          name: 'User',
          meta: {
            requireAuth: true
          },
          component: () => import('@/views/user/index')
        }
      ]
    },
    {
      path: '/system',
      meta: {
        requireAuth: true,
        icon: 'icon-shezhi',
        title: '系统设置',
        bread: '系统设置'
      },
      component: Main,
      children: [
        {
          path: '',
          name: 'System',
          meta: {
            requireAuth: true
          },
          component: () => import('@/views/system/index')
        }
      ]
    },
    // {
    //   path: '/notice',
    //   meta: {
    //     requireAuth: true,
    //     icon: 'icon-xiaoxi',
    //     title: '消息'
    //   },
    //   component: Main,
    //   children: [
    //     {
    //       path: '',
    //       name: 'Notice',
    //       meta: {
    //         requireAuth: true
    //       },
    //       component: Notice
    //     }
    //   ]
    // },
    {
      path: '/other',
      meta: {
        requireAuth: true,
        icon: 'icon-qita',
        title: '其他',
        bread: '其他'
      },
      component: Main,
      children: [
        {
          path: 'purchase',
          name: 'Purchase',
          meta: {
            title: '购书申请',
            bread: '购书申请',
            requireAuth: true
          },
          component: () => import('@/views/other/purchase')
        },
        {
          path: 'suggestion',
          name: 'Suggestion',
          meta: {
            title: '投诉建议',
            bread: '投诉建议',
            requireAuth: true
          },
          component: () => import('@/views/other/suggestion')
        }
      ]
    },
    {
      path: '/my',
      name: 'My',
      meta: {
        requireAuth: true
      },
      component: Main,
      children: [
        {
          path: 'info',
          name: 'Info',
          meta: {
            requireAuth: true,
            bread: '我的'
          },
          component: () => import('@/views/my/info')
        }, {
          path: 'update-password',
          name: 'UpdatePassword',
          meta: {
            requireAuth: true,
            bread: '修改密码'
          },
          component: () => import('@/views/my/update-password')
        }, {
          path: 'update-info',
          name: 'UpdateInfo',
          meta: {
            requireAuth: true,
            bread: '修改信息'
          },
          component: () => import('@/views/my/update-info')
        }
      ]
    },
    {
      path: '*',
      name: '404',
      meta: {},
      component: () => import('@/views/404')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    const token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } });
    }
  } else {
    next();
  }
});

export default router;
