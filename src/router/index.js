import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../pages/Home.vue";
import dynamicRouters from "../router/dynamicRoutes"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Home/index.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Login/index.vue")
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Page404/index.vue"),
  }
];
// VueRouter.addRoutes(dynamicRouters)

const router = new VueRouter({
  routes
});

export default router;
