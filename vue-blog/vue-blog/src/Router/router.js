import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Context from '../Context.vue'
import App from '../index.vue';
const routes = [{
    path: '/',
    component: App,
    strict: true
}, {
    path: '/context/:id',
    name: 'Context',
    component: Context,
    strict: true
}];
const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route;
