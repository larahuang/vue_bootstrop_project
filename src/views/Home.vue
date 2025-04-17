<template>
    <h1>{{ title }}</h1>
    <div class="container-fluid text-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">左手邊菜吧</div>
            <div class="col">右手邊區域</div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const title =ref<string>('Home')
</script>