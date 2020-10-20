<template>
  <div class="header">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="grid-content bg-purple" @click="cli">
          <i class="el-icon-s-fold"></i>
        </div>
      </el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          千锋管理系统
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
          <span class="span"
            >欢迎您：<b>{{ userInfo.nickname }}</b>
          </span>
          <span @click="del" class="del">退出</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    cli() {
      this.$bus.$emit("change");
    },
    del() {
      localStorage.removeItem("app_token");
      localStorage.removeItem("app_userInfo");
      this.$router.push("/login");
    }
  }
};
</script>
<style>
.el-icon-s-fold{}
.el-avatar {
  vertical-align: middle;
}
span {
  margin: 0 16px 0 6px;
  vertical-align: middle;
}
.del {
  cursor: pointer;
  /* padding-left: 10px; */
  color: hotpink;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>