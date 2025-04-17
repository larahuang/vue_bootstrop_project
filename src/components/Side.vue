import { ref } from "vue";

<template>
    <ul class="list-group" v-for="(item) in sideLists" :key="item.id">
        <li @click="menuClickActive(item)" class="btn li" 
        :class="menuActive == item.id ? 'isClick' : ''"
        >
            {{ item.title }}
        </li>
        <ul class="list-group" :class="menuActive == item.id ? 'isShow' : ''">
            <li v-for="(i) in item.children" :key="i.id" class="list-group-item">
                {{ i.title }}</li>
        </ul>
    </ul>
</template>

<script setup lang="ts">
import { ref } from "vue"
    const menuActive = ref<string>('');
    const menuClickActive = (item: any) => {
        menuActive.value = item.id;
    }
    const sideLists = ref<any[]>([
        {
            id: '001',
            title: "首頁",
            icon: "fa-solid fa-address-book",
            children: [
                {
                    id: '001-1',
                    title: "首頁-1",
                    icon: "fa-solid fa-address-book",
                },
                {
                    id: '001-2',
                    title: "首頁-2",
                    icon: "fa-solid fa-address-book",
                }
            ]
        },
        {
            id: '002',
            title: "CMS醫療申訴子系統",
            icon: "fa-solid fa-address-book",
            children: [
                {
                    id: '002-1',
                    title: "建檔設定-1",
                    icon: "fa-solid fa-address-book",
                },
                {
                    id: '002-2',
                    title: "建檔設定-2",
                    icon: "fa-solid fa-address-book",
                }
            ]
        },
        {
            id: '003',
            title: "0200醫事機構管理作業",
            icon: "fa-solid fa-address-book",
            children: [
                {
                    id: '003-1',
                    title: "建檔設定-1",
                    icon: "fa-solid fa-address-book",
                },
                {
                    id: '003-2',
                    title: "建檔設定-2",
                    icon: "fa-solid fa-address-book",
                }
            ]
        },
        {
            id: '004',
            title: "0300特醫機構委約作業",
            icon: "fa-solid fa-address-book",
            children: [
                {
                    id: '004-1',
                    title: "建檔設定-1",
                    icon: "fa-solid fa-address-book",
                },
                {
                    id: '004-2',
                    title: "建檔設定-2",
                    icon: "fa-solid fa-address-book",
                }
            ]
        },

    ])
</script>

<style lang="scss" scoped>
.li{
    border-radius: 0;
    position: relative;
    border:1px solid #ffff;
    background-color: #e0f2f1;
    &.isClick{
      &::before {
       transform: rotate(225deg);
      }
    }
    &::before{
        content: '';
        position: absolute;
        top:10px;
        right:10px;
        border: 3px solid #00bcd4;
         width: 15px;
        height: 15px;
        border-width: 3px 0 0 3px;
        display: inline-block;
        transform-origin: center center;
        transform: rotate(135deg);
         transition: all .3s ease-in .1s;
        z-index: 99;      
    }
    &:hover {
        &::before {
            transform: rotate(225deg);
        }
    }
}
.isShow{
    display: flex;
}
.list-group{
    .list-group{
        display: none;
        &.isShow{
            display: flex;
        }
    }
}
</style>