<template>
  <div class="header">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="grid-content bg-purple" @click="cli">
          <span :class="[class1, class2]"></span>
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
  data() {
    return {
      circleUrl:
        "https://img.zcool.cn/community/019e0f5c19f9eea8012029ac06ac52.jpg@1280w_1l_2o_100sh.jpg",
      size: "large",
      flag: true,
      class1: "iconfont",
      class2: "icon-shouqi",
      class3: ""
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    cli() {
      this.flag = !this.flag;
      if (!this.flag) {
        this.class2 = "icon-zhankai";
      } else {
        this.class2 = "icon-shouqi";
      }

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
<style >
.header .el-row--flex.is-justify-space-between {
  background-color: rgb(76, 76, 243);
  height: 80px;
}
.el-header {
  padding: 0px;
  text-align: left !important;
}

.el-avatar {
  vertical-align: middle;
}
.span {
  margin: 0 16px 0 6px;
  vertical-align: middle;
  color: white;
}

.iconfont {
  font-size: 30px;
  cursor: pointer;
  color: white;
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
  background: rgb(76, 76, 243);
  margin-left: 40px;
}
.bg-purple-light {
  background-color: rgb(76, 76, 243);
  margin-left: 40px;
  font-size: 24px;
  color: white;
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