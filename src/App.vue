<template>
    <div class="bg-gray-100 h-full">
        <header class="bg-white shadow-md h-16 flex justify-between">
            <router-link :to="{ name: 'home' }" class="my-3">
                Home
            </router-link>
           <div class="my-3">
            <router-link to="/" class="px-2 py-2 hover:bg-orange-300 rounded-sm">
                Search Meals
            </router-link>
            <router-link to="/" class="px-2 py-2 hover:bg-orange-300 rounded-sm">
                Meals By Letter
            </router-link>
            <router-link to="/" class="px-2 py-2 hover:bg-orange-300 rounded-sm">
                Meals By Ingredients
            </router-link>
           </div>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
