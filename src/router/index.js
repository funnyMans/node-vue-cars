import { createRouter, createWebHistory } from "vue-router";
import CarsList from "../components/CarsList.vue";
import PageNotFound from "../views/PageNotFound.vue";
import HomePage from "../views/HomePage.vue";

const brands = [
  "all",
  "audi",
  "bmw",
  "mercedes-benz",
  "lexus",
  "nissan",
  "porsche",
  "toyota",
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/cars",
      name: "cars",
      component: CarsList,
      children: [
        {
          path: ":brand",
          name: "brand",
          component: CarsList,
          beforeEnter: (to, from, next) => {
            const pathIsValid = brands.includes(to.params.brand);
            if (!pathIsValid) {
              router.push({
                name: "not-found",
                params: { pathMatch: "not-found" },
              });
            }
            next();
          },
        },
      ],
    },

    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: PageNotFound,
    },
  ],
});

export default router;
