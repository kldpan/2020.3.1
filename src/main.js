import Vue from 'vue'
import AMap from 'vue-amap'

import App from './App.vue'
import router from './router'

import store from '@/core/store'

import 'lib-flexible/flexible.js'
import 'font-awesome/css/font-awesome.css'
import "mint-ui/lib/style.css"
import vueWechatTitle from "vue-wechat-title"
import coreConfig from "@/core/core.config.js"


Vue.use(vueWechatTitle);
//use支持传入一个函数,自动在函数内部写入Vue构建函数
Vue.use(coreConfig);//fn(){}

Vue.use(AMap);
AMap.initAMapApiLoader({
  key:'b04b292ba4b2140151e9c2bcd02bad0c',
  plugin:['AMap.Geolocation']
});

// Vue.use((Vue)=>{
//   // console.log("run11111")
//   console.dir(Vue);
// })
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
