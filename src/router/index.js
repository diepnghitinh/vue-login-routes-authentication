import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import App from '@/components/App';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Profile from '@/components/Profile';


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
      }
    ]
  }
];

export default new Router({
  routes
});
