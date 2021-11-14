import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Menu from "@/components/Menu";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: Header,
                menu: Menu,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: 'Липецк online',
                description: ''
            },
            children: [],
        },
        {
            path: '/pool',
            name: 'pool',
            components: {
                header: Header,
                menu: Menu,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Pool.vue')
            },
            meta: {
                title: 'Липецк online | Бассейн',
                description: '',
            },
            children: [],
        },
        {
            path: '/registration',
            name: 'registration',
            components: {
                header: Header,
                menu: Menu,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Registration.vue')
            },
            meta: {
                title: 'Липецк online | Регистрация',
                description: '',
            },
            children: [],
        },
    ]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});
export default router;