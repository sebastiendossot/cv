import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home';
import Cv from '../components/cv';

import 'es6-promise/auto';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cv',
      name: 'CV',
      component: Cv
    }
  ]
});
