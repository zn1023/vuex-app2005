<template>
  <div class="home">
    <video
      src="../../assets/video/a7549fa881248c1d27116f46d83a826d.mp4"
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
        <el-form-item label="密码" prop="password" >
          <el-input
            type="password"
            v-model="loginFrom.password"
            autocomplete="off"
            @keydown.enter.native="submitForm('loginFrom')"
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
// 登入逻辑的实现
// 1.首先获取用户名和密码，将其传给后台数据比对
// 2，后台校验成功，返回一个token数据，将其存入本地
// 3. 跳转到主页面，访问其他接口的时候，要携带这个token去访问api ,携带token到请求头authorization
// 4. 展示token校验成功的数据
// 5. 若校验不成功，则跳转到登入页面
import { Login } from "../../api/index";
import { mapMutations, SET_USERINFO } from "vuex";
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
        let uPattern = /^[a-zA-Z0-9]{1,16}$/;
        if (uPattern.test(value)) {
          callback();
        } else {
          callback(new Error("用户名为1至16为的字母或数字组成"));
        }
      }
    };
    var validataPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        let uPattern = /^[a-zA-Z0-9]{1,16}$/;
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
    ...mapMutations(["SET_USERINFO"]),
    submitForm(formName) {
      // ref注册在组件上，然后使用this.$ref[formName]获取这个组件实例，从而调用这个组件里面定义的方法
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!"); // 本地的校验通过(设置的正则)
          // 设置缓存样式，采用组件
          const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          // 本地校验通过后获取用户名密码，开始与后台数据对比
          let { username, password } = this.loginFrom;
          // console.log(username,password);
          Login(username, password)
            .then(res => {
              // console.log(res);
              // 缓存样式停止
              loading.close();
              if (res.data.status) {
                //输入信息准确，将从后台传递过来的token存入本地，跳转到主页面
                localStorage.setItem("app_token", res.data.token);
                localStorage.setItem(
                  "app_userInfo",
                  JSON.stringify(res.data.userInfo)
                );
                this.$message({
                  message: "恭喜你，登入成功",
                  type: "success"
                });
                this.$router.push("/");
                this.SET_USERINFO(res.data.userInfo);
              } else {
                // 输入信息错误
                this.$message.error("用户名或密码错误");
              }
            })
            .catch(err => {
              console.log(err);
            });
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