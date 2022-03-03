import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HomeRef from '@/views/HomeRef.vue';

Vue.use(Router);

export default new Router({
  routes: [
     {
      path: '/',
      name: 'home1',
      component: Home,
    },     {
      path: '/home2',
      name: 'home2',
      component: HomeRef,
    },
    {
      path: '/about1',
      name: 'about1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
