import Vue from "vue";
import Vuex from "vuex";
import { getMenuList } from "../api/index";
import recursionRoutes from "../utils/recursionRoutes";
import allRouters from '../router/allRouter';
import dynamicRouters from "../router/dynamicRoutes"
import router from "../router"
Vue.use(Vuex);


// 本人思考：直接拿localStorage中的userInfo就可以了，不需要接上一个空对象
// 但是若是localStorage中的userInfo被删除掉了，会显示undefined，会报错的
// 还不如在后面加上一个空对象，这样在前者没有的时候它就可以派上用场了
let userInfo = JSON.parse(localStorage.getItem("app_userInfo")) || {};
// let users = JSON.parse(localStorage.getItem("users")) || [];
export default new Vuex.Store({
  state: {
    userInfo,
    users: [],
    crumbs: []
  },
  mutations: {
    // 获取userInfo数据
    SET_USERINFO(state, payload) {
      // console.log(payload);
      state.userInfo = payload;
    },
    GET_USERROUTES(state, payload) {
      state.users = payload;
      let target = dynamicRouters.find(item => item.path === "/")
      // for (let i in state.users) {
      //   target.children.push(state.users[i]);
      // }
      target.children = state.users;

      // console.log(target.children);
      // console.log(dynamicRouters);
      // console.log(state.users);
      router.addRoutes(dynamicRouters);
      // router.push({ path: '/' })
    },
    // 设置面包屑
    SET_CRUMBS(state, payload) {
      state.crumbs = payload;
    }
  },
  actions: {
    async SET_USERROUTES({ commit }) {
      let userMenu = await getMenuList()
      let result = recursionRoutes(allRouters, userMenu.data.menuList);
      // console.log(result);
      commit("GET_USERROUTES", result);

    },

  },
  modules: {}
})
