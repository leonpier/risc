import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'dashboard/basic-dashboard',
            component: () => import('@/layouts/Layout'),
            children: [
                // Components
                {
                    name: 'Analítico',
                    path: 'analitico/inicio',
                    component: () => import('@/views/analitico/Inicio'),
                },

                {
                    name: 'Gráfico',
                    path: 'pages/profile',
                    component: () => import('@/views/pages/Profile'),
                },

                {
                    name: 'Monitoreo Administrativo',
                    path: 'pages/icons',
                    component: () => import('@/views/pages/Icons'),
                },

                {
                    name: 'TableSimple',
                    path: 'pages/tables-simple',
                    component: () => import('@/views/pages/TableSimple'),
                },

                {
                    name: 'Dashboard',
                    path: 'dashboard/basic-dashboard',
                    component: () => import('@/views/dashboard/BasicDashboard'),
                },
                {
                    name: 'Condiciones',
                    path: 'maestros/inicio',
                    component: () => import('@/views/maestros/Condiciones'),
                },
            ]
        },

    ],
})