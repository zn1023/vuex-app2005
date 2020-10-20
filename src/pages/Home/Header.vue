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
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          欢迎您！！！
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    cli() {
      this.$bus.$emit("change");
    }
  }
};
</script>
<style>
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