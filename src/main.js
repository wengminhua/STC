import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import routes from './routes'
import './assets/app.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
