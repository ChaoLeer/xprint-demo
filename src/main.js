import Vue from 'vue'
import App from './App.vue'
import XPrint from 'xprint'
import 'xprint/dist/vue-print.css'
Vue.config.productionTip = false
Vue.use(XPrint, {
  beforePrint() {
    document.body.style.backgroundColor = '#f00'
  },
  afterPrint() {
    document.body.style.backgroundColor = '#0ff'
  }
})
console.log(XPrint, Vue)
new Vue({
  render: h => h(App),
}).$mount('#app')
