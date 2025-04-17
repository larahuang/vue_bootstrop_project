<script setup lang="ts">
import { onMounted } from 'vue'


onMounted(() => {
  console.log('頁面使用:', import.meta.env.VITE_API_BASIC_URL)
})
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-view></router-view>

</template>
