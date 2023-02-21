import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        component : () => import('@/view/MainPage.vue')
    },
    {
        path:"/stock",
        component : () => import('@/view/Stock.vue')
    }
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router