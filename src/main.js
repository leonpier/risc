import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './plugins/base'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)
Vue.prototype.$api_url = 'http://127.0.0.1:8000/api'
Vue.prototype.$cube_url = 'http://127.0.0.1:8000/cube'
Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')