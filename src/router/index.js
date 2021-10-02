import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
/* import Brazil from "../views/Brazil.vue";
import Hawaii from "../views/Hawaii.vue";
import Jamaica from "../views/Jamaica.vue";
import Panama from "../views/Panama.vue"; */

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  /* not used begin */
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
    path: "/brazil",
    name: "brazil",
    /* component: Brazil, */
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    /* component: Hawaii, */
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    /* component: Jamaica, */
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    /* component: Panama, */
    component: () =>
      import(/*webpackChunkName:"panama"*/ "../views/Panama.vue"),
  },
  /* not used end */
  {
    /* path: "/vue-school-travel-app", */
    /* path: "/details/:id", */
    path: "/details/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /*webpackChunkName:"DestinationDetails"*/ "../views/DestinationDetails.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes,
});

export default router;
