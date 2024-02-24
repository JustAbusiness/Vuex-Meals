<template>
   <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">
         Meals for {{ ingredient }}
      </h1>

      <Meals :meals="meals" />
   </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import Meals from "../components/Meals.vue"
import { useRoute } from "vue-router";
import store from "../store";


const meals = computed(() => store.state.mealsByIngredient);
const ingredient = computed(() => store.state.ingredient)
const route = useRoute();


onMounted(() => {
   store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<style scoped></style>
