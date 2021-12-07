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
            props: true,
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
            props: true,
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
            path: '/zoo',
            name: 'zoo',
            props: true,
            components: {
                header: Header,
                menu: Menu,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Zoo.vue')
            },
            meta: {
                title: 'Липецк online | Зоопарк',
                description: '',
            },
            children: [],
        },
        {
            path: '/zoo-tickets',
            name: 'zoo-tickets',
            props: true,
            components: {
                header: Header,
                menu: Menu,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/ZooTickets.vue')
            },
            meta: {
                title: 'Липецк online | Билеты в зоопарк',
                description: '',
            },
            children: [],
        },
        {
            path: '/payment',
            name: 'payment',
            props: true,
            components: {
                header: Header,
                menu: Menu,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Payment.vue')
            },
            meta: {
                title: 'Липецк online | Подтвердите заказ',
                description: '',
            },
            children: [],
        },
        {
            path: '/orders',
            name: 'orders',
            props: true,
            components: {
                header: Header,
                menu: Menu,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Orders.vue')
            },
            meta: {
                title: 'Липецк online | Мои заказы',
                description: '',
            },
            children: [],
        },
        {
            path: '/registration',
            name: 'registration',
            props: true,
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