<template>
    <h1>{{ title }}</h1>
    <div class="container-fluid text-center">
        <div class="row">
            <div class="col-sm-3">
                <Side></Side>
            </div>
            <div class="col-sm-9">
                <FormC></FormC></div>
        </div>

    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import Side from '../components/Side.vue'
import FormC from '../components/form.vue'
const title = ref<string>('Home');

</script>