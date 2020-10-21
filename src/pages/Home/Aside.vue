<template>
  <div class="aside">
    <h1>
      <img src="../../assets/img/qflogo.png" alt="" />
    </h1>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">管理首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">学员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">学员项目管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">考勤管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isCollapse: false,
    };
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
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
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
.el-menu-item {
  color: black !important;
}
</style>