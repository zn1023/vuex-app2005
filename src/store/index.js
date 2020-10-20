import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


// 本人思考：直接拿localStorage中的userInfo就可以了，不需要接上一个空对象
// 但是若是localStorage中的userInfo被删除掉了，会显示undefined，会报错的
// 还不如在后面加上一个空对象，这样在前者没有的时候它就可以派上用场了
let userInfo = JSON.parse(localStorage.getItem("app_userInfo")) || {};

export default new Vuex.Store({
  state: {
    userInfo
  },
  mutations: {
    // 获取userInfo数据
    SET_USERINFO(state, payload) {
      console.log(payload);
      state.userInfo = payload;
    }
  },
  actions: {},
  modules: {}
});
