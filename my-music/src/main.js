import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Museui from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import ico from 'material-icons';
Vue.use(Museui);
Vue.use(ico);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
