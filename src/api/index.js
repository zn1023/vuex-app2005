import axios from "./config"

export const Login = (username, password) => axios({
    url: "/users/login",
    method: "post",
    data: { username, password }
})

export const getLoginlog = () => axios({
    url: "/getloginlog"
})