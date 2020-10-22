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
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item
              :to="{ path: crumbs.path }"
              v-for="item in crumbs"
              :key="item.meta.fullPath"
              >{{ item.meta.name }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <hr />
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aside from "./Aside";
import Header from "./Header";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      width: "200px"
    };
  },
  computed: {
    ...mapState(["crumbs"])
  },
  mounted() {
    this.$bus.$on("changeWidth", e => {
      this.width = "65px";
    });
    this.$bus.$on("changeWidth2", e => {
      this.width = "200px";
    });
    // this.CLEAR_SIDEMENU();
    // getLoginlog()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  methods: {
    ...mapMutations(["CLEAR_SIDEMENU"]),
    ...mapActions(["SET_USERROUTES"])
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
.el-breadcrumb {
  margin: 20px 0;
  font-size: 16px;
}
.el-aside {
  background-color: rgb(46, 46, 231);
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
