import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
                    path: 'graficos',
                    component: () => import('@/views/graficos/inicio'),
                },
                {
                    name: 'Tablero',
                    path: 'tablero',
                    component: () => import('@/views/tablero/inicio'),
                },
                {
                    name: 'Monitoreo Administrativo',
                    path: 'monitoreo-administrativo',
                    component: () => import('@/views/monitoreoAdministrativo/inicio'),
                },

                {
                    name: 'Seguimiento Administrativo',
                    path: 'seguimiento-administrativo',
                    component: () => import('@/views/seguimientoAdministrativo/inicio'),
                },
                {
                    name: 'Disponibilidad Según Estrategia Sanitaria',
                    path: 'disponibilidad-segun-estrategia-sanitaria',
                    component: () => import('@/views/estrategiaSanitaria/inicio'),
                },
                {
                    name: 'Disponibilidad Según Estrategia Sanitaria por Ipress',
                    path: 'disponibilidad-segun-estrategia-sanitaria-ipress',
                    component: () => import('@/views/estrategiaSanitariaIpress/inicio'),
                },
                {
                    name: 'Dashboard',
                    path: 'dashboard/basic-dashboard',
                    component: () => import('@/views/dashboard/BasicDashboard'),
                },
                {
                    name: 'Condiciones',
                    path: 'condiciones/inicio',
                    component: () => import('@/views/maestros/Condiciones/inicio'),
                },
                {
                    name: 'Errores',
                    path: 'errores/inicio',
                    component: () => import('@/views/maestros/Errores/inicio'),
                },
            ]
        },

    ],
})
export default router;
router.beforeEach((to, from, next) => {
    document.title = 'RISC - ' + to.name;
    next();
  });