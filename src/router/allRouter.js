import Attendance from "../pages/Home/Attendance/index.vue"
import Mine from "../pages/Home/Mine/index.vue"
import Statistics from "../pages/Home/Statistics/index.vue"
import StudentManager from "../pages/Home/StudentManager/index.vue"
import studentDormitory from "../pages/Home/StudentManager/studentDormitory.vue"
import studentProduct from "../pages/Home/StudentManager/studentProduct.vue"
import studentProfile from "../pages/Home/StudentManager/studentProfile.vue"
import Users from "../pages/Home/Users/index.vue"
import Welcome from "../pages/Home/Welcome/index.vue"

const allRouters = [
    {
        path: 'Welcome',
        name: 'Welcome',
        component: Welcome,
        meta: {  // 数据缓冲区
            name: '管理首页',   // 菜单名
            icon: 'iconfont icon-shouye',  // 菜单图标类名
            fullPath: "/Welcome"   // 完整的路径
        }
    },
    {
        path: 'StudentManager',
        name: 'StudentManager',
        redirect: "/StudentManager/studentProduct",
        component: StudentManager,
        meta: {
            name: '学员管理',
            icon: 'iconfont icon-xueyuan'
        },
        children: [
            {
                path: 'studentProduct',
                name: 'studentProduct',
                component: studentProduct,
                meta: {
                    name: '学员项目管理',
                    icon: 'iconfont icon-wode1',
                },
            },
            {
                path: 'studentProfile',
                name: 'studentProfile',
                component: studentProfile,
                meta: {
                    name: '学员资料',
                    icon: 'iconfont icon-kaoqin2'
                }
            },
            {
                path: 'studentDormitory',
                name: 'studentDormitory',
                component: studentDormitory,
                meta: {
                    name: '学员宿舍',
                    icon: 'iconfont icon-shuju2'
                }
            }
        ]
    },
    {
        path: 'Attendance',
        name: 'Attendance',
        component: Attendance,
        meta: {
            name: '考勤管理',
            icon: 'iconfont icon-kaoqin'
        }
    },
    {
        path: 'Users',
        name: 'Users',
        component: Users,
        meta: {
            name: '用户管理',
            icon: 'iconfont icon-yonghu'
        }
    },
    {
        path: 'Statistics',
        name: 'Statistics',
        component: Statistics,
        meta: {
            name: '数据统计',
            icon: 'iconfont icon-shuju1'
        }
    },
    {
        path: 'Mine',
        name: 'Mine',
        component: Mine,
        meta: {
            name: '我的中心',
            icon: 'iconfont icon-wode'
        }
    }
]

export default allRouters
