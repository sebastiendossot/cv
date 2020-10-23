import Vue from 'vue';
import { createGtm } from 'vue-gtm';
import Router from 'vue-router';
import Home from '../components/home';
import Cv from '../components/cv';

import 'es6-promise/auto';

Vue.use(Router);

const router = new Router({
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

Vue.use(createGtm({
  id: 'GTM-MTFSSFS' , // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
  debug: true, // Whether or not display console logs debugs (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
}));

export default router;