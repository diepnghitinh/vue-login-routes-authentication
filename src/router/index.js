import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import App from '@/components/App';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import Teachers from '@/components/Teachers/app-teachers';

/* Teachers */
import TeachersClassrooms from '@/components/Teachers/teachers-classrooms';
import TeachersManage from '@/components/Teachers/teachers-manage';
import TeachersSubjects from '@/components/Teachers/teachers-subjects';

// import { requireAuth, verifyIsLoggedIn } from '../utils/auth';
/* Others */
// import NotFound from '@/components/NotFound';

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
        name: 'dashboard',
        path: '',
        component: Dashboard
      },
      {
        name: 'login',
        path: 'login',
        component: Login/* ,
        beforeEnter: verifyIsLoggedIn */
      },
      {
        name: 'profile',
        path: 'profile',
        component: Profile /* ,
        beforeEnter: requireAuth */
      },
      {
        name: 'teachers',
        path: 'teachers',
        component: Teachers,
        /* beforeEnter: requireAuth, */
        children: [
          {
            name: 'classrooms',
            path: 'classrooms',
            component: TeachersClassrooms/* ,
            beforeEnter: requireAuth*/
          },
          {
            name: 'manage',
            path: 'manage',
            component: TeachersManage /* ,
            beforeEnter: requireAuth*/
          },
          {
            name: 'subjects',
            path: 'subjects',
            component: TeachersSubjects/* ,
            beforeEnter: requireAuth */
          }
        ]
      }
    ]
  },
  {
    path: '*',
    name: 'app',
    component: App
  }
];

export default new Router({
  routes
});
