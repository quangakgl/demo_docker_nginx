/*
Route đến các Vue component
 */

import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Axios from '@/components/Axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';  // Make sure to import this
import DemoElement from '@/components/DemoElement';

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios,
    },
    {
      path: '/element',
      name: 'DemoElement',
      component: DemoElement,
    },
  ],
});
