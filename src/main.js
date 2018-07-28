import Vue from 'vue'
import App from './App.vue'
import demo from './components/demo.vue';
Vue.component('app-demo',demo);
new Vue({
  el: '#app',
  render: h => h(App)
})
