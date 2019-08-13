import Vue from 'vue'
import Router from 'vue-router'

import homepage from'./components/homePage'
import getstart from'./view/main'

Vue.use(Router);


export default new Router({
  routes: [
    {path: '/', name: 'home', component: homepage},
    {path: '/getstart', name: 'getstart', component:getstart},
  ]
})


