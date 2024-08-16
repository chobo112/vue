<template>
    <ul class="dashboard-ul">
        <li class="menu-bar">
            <LeftManuBar></LeftManuBar>
        </li>
        <li class="content"><router-view></router-view></li>
    </ul>
</template>

<script setup>
import LeftManuBar from "@/components/layout/LeftManuBar.vue";
</script>

<style scoped>
.dashboard-ul {
    list-style-type: none;
    display: flex;
}

.menu-bar {
    float: left;
}
.content {
    float: left;
    padding-left: 50px;
    width: 77%;
    flex: 1;
}
</style>
