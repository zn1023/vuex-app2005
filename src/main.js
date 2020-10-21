import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
// 引入全局css和element-rest
import "@/assets/style/base.css";
import "@/assets/style/el-reset.css";
// 引入iconfont
import "./assets/iconfont/iconfont.css"

// 按需引入
// import { Carousel,CarouselItem } from 'element-ui';
// Vue.component("el-carousel", Carousel);
// Vue.component("el-carousel-item", CarouselItem);

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

// 路由前置钩子（路由守卫，如果不添加用户可以直接跳过登陆注册页面去访问主页面）
router.beforeEach((to, from, next) => {
  // 路由跳转前触发，to当前页面，from想去页面， next()往下执行，没有的话程序不往下走
  // 用户登入不需要进行验证，直接放行（开发者的目的本就是让用户处在当前页面进行登陆）
  // 然后其他页面可以通过token来判断，若用户从未登陆，本地存储肯定没有token，登陆过的话
  // 用户已经携带token，就可以自由访问其他路径了，所以没有登入想访问其他页面，让他跳转到登入页面
  let token = localStorage.getItem("app_token");
  if (token) {
    next();
    // console.log(to);
  } else {
    if (to.path == "/login") {
      next();
    } else {
      // 此处不需要使用this.$router.push(),因为next()函数可以直接写参数，参数为对象形式，显示未登录前想要访问
      // 其他页面全部都会跳转到参数对应的那个路径上面去
      next({ path: "/login" });
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
