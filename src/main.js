import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import {get, post} from './http'
import mixin from './mixin'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.get = get
Vue.prototype.post = post
window.LOG = window.log = window.console.log

Vue.use(ElementUI)

new Vue({
    router,
    mixin,
    render: h => h(App),
}).$mount('#app')
