/*
* 入口js
* */
import App from './App'
import Vue from 'vue'
import router from '../src/router'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
