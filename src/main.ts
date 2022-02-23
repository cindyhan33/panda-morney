import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window {

  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scroll(0, 200);
  }, 0);
};
