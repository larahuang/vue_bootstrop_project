<template>
    <div>
        <h1>{{title}}</h1>
        <button type="button" class="btn btn-success" @click="$router.push('/')">回首頁</button>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const title = ref<string>('404')
</script>