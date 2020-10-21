const dynamicRouters =
{
    path: "/",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/Home/index.vue"),
    children: []
}




export default dynamicRouters;