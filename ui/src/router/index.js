import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RegisterForm from "../views/RegisterForm.vue";
import Products from "../views/Products.vue";
import Customers from "../views/Customers.vue";
import notFound from "../views/notFound.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/RegisterForm",
    name: "Register",
    component: RegisterForm,
  },
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/:catchall(.*)",
    name: "notFound",
    component: notFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
