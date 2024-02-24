<template>
   <div class="bg-white shadow rounded-2xl">
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
         <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-2xl w-full h-48 object-cover"
         />
      </router-link>
      <div class="p-3">
         <h3 class="font-semibold">{{ meal.strMeal }}</h3>
         <p class="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            magni!
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
</template>

<script setup>
const { meal } = defineProps({
   meal: {
      required: true,
      type: Object,
   },
});
</script>

<style scoped></style>
