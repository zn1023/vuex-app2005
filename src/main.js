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

// 引入subMenu组件
import qfSubMenu from "qf-sub-menu"

// 导入nprogress进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// 按需引入
// import { Carousel,CarouselItem } from 'element-ui';
// Vue.component("el-carousel", Carousel);
// Vue.component("el-carousel-item", CarouselItem);

Vue.use(qfSubMenu);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

// 路由前置钩子（路由导航守卫，如果不添加用户可以直接跳过登陆注册页面去访问主页面）
router.beforeEach((to, from, next) => {
  NProgress.start();
  // 路由跳转前触发，to当前页面，from想去页面， next()往下执行，没有的话程序不往下走
  // 用户登入不需要进行验证，直接放行（开发者的目的本就是让用户处在当前页面进行登陆）
  // 然后其他页面可以通过token来判断，若用户从未登陆，本地存储肯定没有token，登陆过的话
  // 用户已经携带token，就可以自由访问其他路径了，所以没有登入想访问其他页面，让他跳转到登入页面
  let token = localStorage.getItem("app_token") || null;
  if (token) {
    // 获取用户权限菜单时也可能出错，导致拿不到users，这时候还在store中执行，毫无意义
    // 所以要在每次路由跳转之前进行判断，判断是否已将数据存到仓库了
    // if()
    // console.log(store);
    // console.log(store.state.users.length);
    if (store.state.users.length == 0) {
      // 说明没有用户路由，触发action获取用户路由
      store.dispatch('SET_USERROUTES')
        .then(() => {
          // console.log(to);
          // 注意，next里面传参数即要进入的页面的路由信息
          // 因为next传参数后，当前要进入的路由会被废止
          // 转而进入参数对应的路由，虽然是同一个路由，这么做是为了确保addRoutes生效了
          next({ path: to.path })
        })
    } else {
      next();
    }
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

// 使用路由后置钩子处理面包屑
router.afterEach((to, from) => {
  console.log(to);
  let crumblist = to.matched.slice(1);
  console.log(crumblist);
  store.commit('SET_CRUMBS', crumblist);
  NProgress.done();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
