<template>
   <div class="p-8 flex flex-col items-center justify-center">
     
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
