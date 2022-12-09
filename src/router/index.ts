import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/B.vue'),
        name: 'B',
    },
    {
        path: '/a',
        name: 'Home',
        component: () => import('@/views/Index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
