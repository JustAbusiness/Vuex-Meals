<template>
   <div class="p-8 flex flex-col items-center justify-center">
      <div>
         <div class="flex justify-center gap-1 mt-2">
            <router-link
               :to="{ name: 'byLetter', params: { letter }}"
               v-for="letter in letters" :key="letter"
            >
               {{ letter }}
            </router-link>
         </div>
         <p></p>
      </div>
   </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient.js'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted( async() => {
   const response = await axiosClient.get('/list.php?i=list');
   ingredients.value = response.data
});

</script>

<style scoped></style>
