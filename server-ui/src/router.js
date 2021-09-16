import homePage from './views/homePage.vue';
//import page2 from './views/page2.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory, // history
    routes: [
        { path: '/', component: homePage },
//        { path: "/page2", component: page2 },
    ]
});

export default router;
