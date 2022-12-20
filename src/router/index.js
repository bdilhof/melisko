import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import Audio from "@/views/Audio";

const routes = [
    {
        path: '/',
        name: 'index',
        component: Audio
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router
