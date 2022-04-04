import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './plugins/base'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)
//URL BACKEND
  //  Vue.prototype.$api_url = 'http://sir.diresacajamarca.gob.pe:8050/api'
    Vue.prototype.$api_url = 'http://172.18.20.38:8050/api'
// FIN URL BACKEND

// URL CUBE
    Vue.prototype.$cube_url = 'http://127.0.0.1:8000/cube'
    Vue.prototype.$class_table = 'blue'
// FIN URL CUBE
Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
