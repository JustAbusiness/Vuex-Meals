<template>
   <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
      <input
         type="text"
         v-model="keyword"
         class="rounded mb-3 border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
         placeholder="Search for Meals"
         @change="searchMeals"
      />
      <router-link
         :to="{
            name: 'byIngredients',
            params: { ingredient: ingredient.strIngredient },
         }"
         v-for="ingredient of computedIngredient"
         :key="ingredient.idIngredient"
         class="block bg-white rounded p-3 mb-3 shadow"
      >
         <h3 class="text-2xl font-semibold">{{ ingredient.strIngredient }}</h3>
         <p>{{ ingredient.strDescription }}</p>
      </router-link>
   </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);
const keyword = ref("");
const computedIngredient = computed(() => {
   if (!computedIngredient) return ingredients.value;
   return ingredients.value.filter((i) =>
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
   );
});

onMounted(() => {
   axiosClient.get("/list.php?i=list").then(({ data }) => {
      ingredients.value = data.meals;
   });
});
</script>

<style lang="scss" scoped></style>
