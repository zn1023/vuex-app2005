<template>
  <div class="home">
    <video
      src="../../assets/a7549fa881248c1d27116f46d83a826d.mp4"
      autoplay="autoplay"
      loop
      preload="auto"
      muted
      width="100%;"
      height="100%;"
    ></video>

    <div class="home2">
      <h1>千锋管理系统</h1>
      <el-form
        :model="loginFrom"
        status-icon
        :rules="rules"
        ref="loginFrom"
        label-width="100px"
        class="demo-loginFrom"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="loginFrom.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginFrom.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="submitForm('loginFrom')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // jsDoc
    /**
     * @param {object} rule 就是一个表单验证对象
     * @param {String} value 输入值
     * @param {Function} callback 校验通过不传参 不通过传参
     */
    var validataUsername = (rule, value, callback) => {
      // 传进来的参数value为表单上输入的值
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        //用户名正则，4到16位（字母，数字）
        let uPattern = /^[a-zA-Z0-9]{4,16}$/;
        if (uPattern.test(value)) {
          callback();
        } else {
          callback(new Error("用户名为4至16为的字母或数字组成"));
        }
      }
    };
    var validataPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        let uPattern = /^[a-zA-Z0-9]{4,16}$/;
        if (uPattern.test(value)) {
          callback();
        } else {
          callback(new Error("密码错误"));
        }
      }
    };
    return {
      // 收集表单数据框中的内容
      loginFrom: {
        username: "",
        password: ""
      },
      // 表单验证规则（对象） => 触发验证函数
      rules: {
        username: [{ validator: validataUsername, trigger: "blur" }],
        password: [{ validator: validataPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      // ref注册在组件上，然后使用this.$ref[formName]获取这个组件实例，从而调用这个组件里面定义的方法
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!"); // 本地的校验通过
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.home {
  position: relative;
}
.home video {
  /* width: 120%;
  height: 100%; */

  object-fit: fill;
}
.home2 {
  color: white;
  position: absolute;
  right: 240px;
  top: 150px;
  width: 400px;
  height: 500px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home h1 {
  text-align: center;
  color: gray;
  margin-bottom: 30px;
}
/* .home .el-input__inner{
  width: 250px;
} */
.home .el-button {
  width: 250px;
}
</style>