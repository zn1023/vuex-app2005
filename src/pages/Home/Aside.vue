<template>
  <div class="aside">
    <el-menu
      v-model="isCollapse"
      style="margin-bottom: 20px;"
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
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
          <el-menu-item index="1-2">学员资料</el-menu-item>
          <el-menu-item index="1-3">学员宿舍</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">考勤管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">我的中心</span>
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
      console.log(this.isCollapse);
      if(this.isCollapse){
          this.$bus.$emit("changeWidth");
      }else{
          this.$bus.$emit("changeWidth2");
      }
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>