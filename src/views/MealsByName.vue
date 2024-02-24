<template>
   <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">
         Search Meals by Name
      </h1>
   </div>
   <div class="px-8 pb-3">
      <input
         type="text"
         v-model="keyword"
         class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
         placeholder="Search for Meals"
         @change="searchMeals"
      />
   </div>

   <!-- SEARCH RESULT MEALS -->
   <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div
         v-for="meal of meals"
         :key="meal.idMeal"
         class="bg-white shadow rounded-2xl"
      >
         <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
            <img
               :src="meal.strMealThumb"
               :alt="meal.strMeal"
               class="rounded-t-2xl w-full h-48 object-cover"
            />
         </router-link>
         <div class="p-3">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <p class="mb-4">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Explicabo, magni!
            </p>
            <div class="flex items-center justify-between">
               <a
                  :href="meal.strYoutube"
                  target="_blank"
                  class="px-3 py-2 rounded bg-red-500 hover:text-white transition-colors border border-red-700"
                  >Youtube</a
               >
               <router-link
                  to="/"
                  class="px-3 py-2 rounded border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
               >
                  View
               </router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
   store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
   keyword.value = route.params.name;
   if (keyword.value) {
      searchMeals();
   }
});
</script>

<style scoped></style>
