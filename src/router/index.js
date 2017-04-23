import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import App from '@/components/App';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import Teachers from '@/components/Teachers/Teachers';

/* Teachers */
import TeachersClassrooms from '@/components/Teachers/Classrooms';
import TeachersManage from '@/components/Teachers/Manage';
import TeachersSubjects from '@/components/Teachers/Subjects';


/* Others */
import NotFound from '@/components/NotFound';


Vue.use(Router);

const routes = [
  {
    path: '/app/login',
    name: 'login',
    component: Login
  },
  {
    path: '/app',
    name: 'app',
    component: App,
    children: [
      {
        name: 'about',
        path: 'about',
        component: About
      },
      {
        name: 'dashboard',
        path: '',
        component: Dashboard
      },
      {
        name: 'profile',
        path: 'profile',
        component: Profile
      },
      {
        name: 'teachers',
        path: 'teachers',
        component: Teachers,
        children: [
          {
            name: 'classrooms',
            path: 'classrooms',
            component: TeachersClassrooms
          },
          {
            name: 'manage',
            path: 'manage',
            component: TeachersManage
          },
          {
            name: 'subjects',
            path: 'subjects',
            component: TeachersSubjects
          }
        ]
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
