import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name:"mainPage",
        path:"/",
        component : () => import('@/view/MainPage.vue')
    },
    {
        name:"stock",
        path:"/stock",
        component : () => import('@/view/Stock.vue')
    },
    {
        name:"newStock",
        path:"/newStock",
        component : () => import('@/view/NewStock.vue')
    }
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router