
export default function disposeRouters(app) {
    return  [
        {
            title: "首页",
            path: "/Home",
            defaultRedirect: true,
            component: {
                app,
                component: () => import('./../routes/home/index')
            },
            children: [
                {
                    key: "1",
                    defaultRedirect: true,
                    title: "首页",
                    path: "/Home/userHome",
                    component: {
                        app,
                        component: () => import('./../routes/home/userHome/index')
                    },
                },
                {
                    key: "sub1",
                    title: "订单管理",
                    path: "/Home/order",
                    component: {
                        app,
                        component: () => import('./../routes/home/order/index')
                    },
                    children: [
                        {
                            defaultRedirect: true,
                            key: "2",
                            title: "贷款订单",
                            path: "/Home/order/loans",
                            component: {
                                app,
                                component: () => import('./../routes/home/order/loans/index')
                            },
                        },
                        {
                            key: "3",
                            title: "转单订单",
                            path: "/Home/order/transfer",
                            component: {
                                app,
                                component: () => import('./../routes/home/order/transfer/index')
                            },
                        },
                        {
                            key: "4",
                            title: "保险订单",
                            path: "/Home/order/insurance",
                            component: {
                                app,
                                component: () => import('./../routes/home/order/insurance/index')
                            },
                        },
                        {
                            path: "/Home/order",
                            redirect: "/Home/order/loans"
                        }
                    ]
                },
                {
                    key: "sub2",
                    title: "上课管理",
                    path: "/Home/classroom",
                    component: {
                        app,
                        component: () => import('./../routes/home/classroom/index')
                    },
                    children: [{
                        key: "5",
                        title: "课程管理",
                        path: "/Home/classroom/couser",
                        component: {
                            app,
                            component: () => import('./../routes/home/classroom/course')
                        },
                    },
                    {
                        key: "6",
                        title: "课件管理",
                        path: "/Home/classroom/courseware",
                        component: {
                            app,
                            component: () => import('./../routes/home/classroom/courseware/index')
                        },
                    },
                    {
                        key: "7",
                        title: "课堂管理",
                        path: "/Home/classroom/teaching",
                        component: {
                            app,
                            component: () => import('./../routes/home/classroom/teaching/index')
                        },
                    },
                    {
                        path: "/Home/classroom",
                        redirect: "/Home/classroom/teaching",
                    }
                    ]
                },
    
                {
                    key: "8",
                    title: "数据统计",
                    path: "/Home/statistics",
                    component: {
                        app,
                        component: () => import('./../routes/home/statistics/index')
                    },
                },
                {
                    key: "9",
                    title: "需求管理",
                    path: "/Home/scheduling",
                    component: {
                        app,
                        component: () => import('./../routes/home/scheduling/index')
                    },
                },
                {
                    key: "10",
                    title: "学生管理",
                    path: "/Home/student",
                    component: {
                        app,
                        component: () => import('./../routes/home/student/index')
                    },
                },
                {
                    key: "11",
                    title: "老师管理",
                    path: "/Home/teacher",
                    component: {
                        app,
                        component: () => import('./../routes/home/teacher/index')
                    },
    
                },
                {
                    key: "12",
                    title: "作业管理",
                    path: "/Home/work",
                    component: {
                        app,
                        component: () => import('./../routes/home/work/index')
                    },
    
                },
                {
                    path: "/Home",
                    redirect: "/Home/userHome"
                }
            ]
        },
        {
            title: "登陆",
            path: "/Login",
            component: {
                app,
                component: () => import('./../routes/login/index'),
                models:()=>[import("./../models/login")]
            },
        }, {
            path: "/",
            redirect: "/Login"
        }
    ]
}
