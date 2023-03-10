import {createRouter, createWebHistory} from 'vue-router'
import WelcomePage from "@/views/WelcomePage.vue";
import test1 from "@/widgets/test1/index.vue";
import test2 from "@/widgets/test2/index.vue";
import test3 from "@/widgets/test3/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcomePage',
            component: WelcomePage
        },
        {
            path: '/Home',
            name: 'Home',
            component: () => import('../views/Home.vue'),
            // redirect: '/test', // 初始化进来就展示的页面
            children: [
                {
                    path: '/test1',
                    name: 'test1',
                    component: test1
                },
                {
                    path: '/test2',
                    name: 'test2',
                    component: test2
                },
                {
                    path: '/test3',
                    name: 'test3',
                    component: test3
                },
            ]
        }

    ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
    const startActivation = window.sessionStorage.getItem('startActivation');
    if (to.path !== '/') {
        if (!startActivation) {
            next('/')
        } else {
            next()
        }
    } else {
        next()
    }

})

export default router
