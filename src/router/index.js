import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
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
      import ( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import ("../views/Dashboard.vue"),
  },
  {
    path: "companies/{{companyId}}/sales/",
    name: "Sales",
    component: () =>
      import ("../views/Sales.vue"),
  },
  {
    path: "companies/{{companyId}}/contacts/",
    name: "Contacts",
    component: () =>
      import ("../views/Contacts.vue"),
  },
  {
    path: "companies/{{companyId}}/products/",
    name: "Products",
    component: () =>
      import ("../views/Products.vue"),
  },
  {
    path: "companies/{{companyId}}/fees/",
    name: "Fees",
    component: () =>
      import ("../views/Fees.vue"),
  },
  {
    path: "companies/{{companyId}}/employees/",
    name: "Employees",
    component: () =>
      import ("../views/Employees.vue"),
  },
  {
    path: "companies/{{companyId}}/setting/",
    name: "Setting",
    component: () =>
      import ("../views/CompanySetting.vue"),
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;