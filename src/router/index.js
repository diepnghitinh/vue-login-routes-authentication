import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import Account from '@/components/Account';
import App from '@/components/App';
import Login from '@/components/Login';
import NotFound from '@/components/NotFound';
import Profile from '@/components/Profile';


/* Teachers */
import Teachers from '@/components/Teachers/app-teachers';
import TeachersClassrooms from '@/components/Teachers/teachers-classrooms';
import TeachersManage from '@/components/Teachers/teachers-manage';
import TeachersSubjects from '@/components/Teachers/teachers-subjects';

import { requireAuth, verifyIsLoggedIn } from '../utils/auth';

Vue.use(Router);

const routes = [
  {
    path: '/app',
    name: 'app',
    component: App,
    children: [
      {
        name: 'about',
        path: 'about',
        component: About /* ,
        beforeEnter: requireAuth */
      },
      {
        name: 'profile',
        path: '',
        component: Profile
      },
      {
        name: 'login',
        path: 'login',
        component: Login,
        beforeEnter: verifyIsLoggedIn
      },
      {
        name: 'account',
        path: 'account',
        component: Account /* ,
        beforeEnter: requireAuth */
      },
      {
        name: 'teachers',
        path: 'teachers',
        component: Teachers,
        beforeEnter: requireAuth,
        children: [
          {
            name: 'classrooms',
            path: 'classrooms',
            component: TeachersClassrooms,
            beforeEnter: requireAuth
          },
          {
            name: 'manage',
            path: 'manage',
            component: TeachersManage,
            beforeEnter: requireAuth
          },
          {
            name: 'subjects',
            path: 'subjects',
            component: TeachersSubjects,
            beforeEnter: requireAuth
          }
        ]
      },
      {
        name: 'users',
        path: 'users',
        component: Account,
        beforeEnter: requireAuth
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
];

export default new Router({
  routes
});
