// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
import './gtm.js';
import Vue from 'vue';
import App from './App';
import { createGtm } from 'vue-gtm';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(createGtm({
  id: 'GTM-MTFSSFS' , // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
  debug: true, // Whether or not display console logs debugs (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
}));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
