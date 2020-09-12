import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
      },
      { //  動態路由
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/Checkout.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/dashboard/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'adminProducts',
        name: 'AdminProducts',
        component: () => import('../views/dashboard/AdminProducts.vue'),
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
      {
        path: 'images',
        name: 'Images',
        component: () => import('../views/dashboard/Images.vue'),
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/home',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
