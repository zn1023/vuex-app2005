import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import "@/assets/style/base.css";
import "@/assets/style/el-reset.css";

// 按需引入
// import { Carousel,CarouselItem } from 'element-ui';
// Vue.component("el-carousel", Carousel);
// Vue.component("el-carousel-item", CarouselItem);

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
