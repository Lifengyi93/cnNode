import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$http=axios;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
