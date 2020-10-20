<template>
  <div class="home">
    <el-container>
      <!-- 侧边样式 -->
      <el-aside :width="width">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <!-- 头部样式 -->
        <el-header>
          <Header></Header>
        </el-header>
        <!-- 主体样式 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aside from "./Aside";
import Header from "./Header";
export default {
  data() {
    return {
      width: "200px"
    };
  },
  mounted() {
    this.$bus.$on("changeWidth", e => {
      this.width = "65px";
    });
    this.$bus.$on("changeWidth2", e => {
      this.width = "200px";
    });
  },
  components: {
    Aside,
    Header
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
