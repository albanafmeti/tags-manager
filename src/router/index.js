import Vue from 'vue'
import VueRouter from 'vue-router'
import Tags from '../views/Tags.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'tags',
        component: Tags,
        children: [
            {
                path: '/add',
                name: 'add-tag',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "add-tag" */ '../views/AddTag.vue')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
