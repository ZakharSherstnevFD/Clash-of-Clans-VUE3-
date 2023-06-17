import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import HomePage from '@/components/pages/HomePage.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
import TheNot404 from '@/components/pages/TheNotFound.vue'
import Item from '@/components/pages/ItemAlias.vue'

const routes = createRouter({
    history:routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/:itemAlias',
            name: 'itemAlias',
            component: Item,
        },
        {
            path:'/:CatchAll(.*)',
            name: '404',
            component: TheNot404,
        }
    ]
})

export default routes;