const dynamicRouters = [
    {
        path: '*',
        component: () =>
            import(/* webpackChunkName: "about" */ "../pages/Page404/index.vue"),
    },
    {
        path: "/",
        component: () =>
            import(/* webpackChunkName: "about" */ "../pages/Home/index.vue"),
        children: []
    }

]





export default dynamicRouters;