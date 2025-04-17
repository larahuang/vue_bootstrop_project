import { createRouter,createWebHistory } from 'vue-router'
import type { RouteRecordRaw, RouterOptions, Router } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
     {
        path: '/about_us',
        name: 'About Us',
         component: () => import("../views/AboutUs.vue"),
    },
     //**404頁面 =>當沒有這個頁面時就會導到此頁
    {
        path: '/:catchAll(.*)',
        name: '404',
        //views資料夾內必須要有errorPage/404.vue
        component: () => import('../views/errorPage/404.vue'),
        meta: {
            title: '404'
        },
    }
]


const options: RouterOptions = {
   // history: createWebHashHistory(),
   history:  createWebHistory(),//井字號會不顯示
 routes,
}


const router: Router = createRouter(options)


export default router