// 访问服务器接口获取一个数组，以及我们自己定义好的一个allRouters数组进行匹配

const { default: allRouters } = require("../router/allRouter");

// 获取一个全新的数组，里面的数据基于服务器返回的，但是也携带了allrouters里面的数据对应的其他属性
const recursionRoutes = (allRouters, menuList) => {
    let userRoutes = [];
    allRouters.forEach(item => {
        menuList.forEach(v => {
            if (item.meta.name === v.name) {
                if (v.children && Array.isArray(v.children)) {
                    item.children = recursionRoutes(item.children, v.children)
                }
                userRoutes.push(item);
            }
        })
    })
    return userRoutes;
}

export default recursionRoutes;