import axios from "axios"
import Router from "../router"
import ElementUI from 'element-ui';
import NProgress from 'nprogress'

// 定义服务器的基础地址
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "/api" : "http://www.chst.vip"

axios.create({
    timeout: 4000
})

// 携带认证，将浏览器的cookie携带给服务器，服务器也可对浏览器进行cookie设置
axios.defaults.withCredentials = true;

// 创建拦截器
axios.interceptors.request.use(function (config) {
    // config是当前请求接口的数据
    // console.log(config);
    // 只有当登入注册的时候不需要进行拦截，直接放行
    // 只有这两者操作才能让localStorage里存入token，
    // 才能让访问其他接口时拿到localStorage里的token
    if (config.url === '/users/login') {
        // 放行
        return config;
    } else {
        config.headers['authorization'] = localStorage.getItem("app_token");
        return config;
    }
})

// 响应拦截
// 个人觉得是一种localStorage里的值被修改，还有就是长时间不用token失效
axios.interceptors.response.use(function (config) {
    NProgress.done()
    // console.log(config);
    // 放行，若没有页面一直加载
    if (config.data.code == '1004' || config.data.code == '10022') {
        // 登陆信息失效，显示登陆失败，且跳转到登陆页面
        // 当前的后台api中1004代表token校验失败，10022表示session到期失效
        ElementUI.Message.error('登入信息失效，请重新登入');
        // console.log(Router);
        localStorage.removeItem("app_token")
        Router.push("/login")
        window.location.reload();

    }
    return config;
})

export default axios;
