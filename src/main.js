import Vue from 'vue'
import App from './App.vue'
import "../public/css/main.css"
import router from './router/index'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
