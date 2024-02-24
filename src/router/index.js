import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealsDetails from "../views/MealsDetails.vue";
import Ingredients from "../views/Ingredients.vue"

const routes = [
   {
      path: "/",
      component: DefaultLayout,
      children: [
         {
            path: "/",
            name: "home",
            component: Home,
         },
         {
            path: "/by-name/:name?",
            name: "byName",
            component: MealsByName,
         },
         {
            path: "/by-ingredient/:ingredient?",
            name: "byIngredients",
            component: MealsByIngredients,
         },
         {
            path: "/ingredients",
            name: "ingredients",
            component: Ingredients ,
         },
         {
            path: "/by-letter/:letter?",
            name: "byLetter",
            component: MealsByLetter,
         },
         {
            path: "/meal/:id?",
            name: "mealDetails",
            component: MealsDetails,
         }
      ],
   },

   {
      path: '/guest',
      component: GuestLayout,
   }
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
