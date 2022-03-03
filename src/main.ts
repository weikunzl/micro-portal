import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
import vueResource from 'vue-resource';

Vue.use(vueResource);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
