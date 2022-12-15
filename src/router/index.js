import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import Register from '../views/Register.vue'
import NavHeader from '../components/NavHeader.vue'
import NotFound from '../components/NotFound.vue'
import FoodsView from '../views/FoodsView.vue'
import PlansFood from '../views/PlansFood.vue'
import HistoryPlan from '../views/HistoryPlan.vue'
import ProfileUser from '../views/ProfileUser.vue'
import store from '../store/index.js';

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: HomeView, nav: NavHeader}
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/foods',
    name: 'foods',
    components: {default: FoodsView, nav: NavHeader},
    meta: { requireAuth: true }
  },
  {
    path: '/plans',
    name: 'plans',
    components: {default: PlansFood, nav: NavHeader},
    meta: { requireAuth: true }
  },
  {
    path: '/histories',
    name: 'history',
    components: {default: HistoryPlan, nav: NavHeader},
    meta: { requireAuth: true }
  },
  {
    path: '/user',
    name: 'user',
    components: {default: ProfileUser, nav: NavHeader},
    meta: { requireAuth: true }
  },
  {
    path: '/:notFound(.*)', 
    components: {default: NotFound, nav: NavHeader}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, _, next) => {
  // to : merupakan tujuan URL kemana
  // from : merupakan asal URL sebelumnya darimana
  // Next mengizinkan atau tidak nya akses ke URL selanjutnya
  
  // Apabila route yang dituju itu true dan status belum login (belum mendapatkan token) maka route nya harus ke /auth
  if(to.meta.requireAuth && !store.getters.isAuthenticated) {
      next('/login');
  } else if(to.meta.requireIfDoneLoginBlockPageLogin && store.getters.isAuthenticated) {
      next('/foods');
  } else {
      next();
  }
})

export default router