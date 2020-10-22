<template>
  <div class="aside">
    <h1>
      <img src="../../assets/img/qflogo.png" alt="" />
    </h1>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="true"
    >
      <qf-sub-menu :sideMenu="users"></qf-sub-menu>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    ...mapState(["users"])
  },
  mounted() {
    this.$bus.$on("change", e => {
      this.isCollapse = !this.isCollapse;
      // console.log(this.isCollapse);
      if (this.isCollapse) {
        this.$bus.$emit("changeWidth");
      } else {
        this.$bus.$emit("changeWidth2");
      }
    });
  },
  methods: {}
};
</script>
<style>
.aside h1 {
  position: relative;
  width: 200px;
  height: 80px;
}
.aside img {
  position: absolute;
  left: -45px;
  top: 0px;
  height: 80px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>