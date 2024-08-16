<template>
    <input v-model="keyword" />
    <input type="date" v-model="searchStDate" />
    <input type="date" v-model="searchEdDate" />
    <button @click="handlerSearch">검색</button>
    <button>신규등록</button>
</template>
<script setup>
import router from "@/router";

const keyword = ref("");
const searchStDate = ref("");
const searchEdDate = ref("");

const handlerSearch = () => {
    const query = [];
    !keyword.value || query.push(`searchTitle=${keyword.value}`);
    !searchStDate.value ||
        query.push(`searchStDate=${searchStDate.value}`);
    !searchEdDate.value ||
        query.push(`searchEdDate=${searchEdDate.value}`);
    const queryString =
        query.length > 0 ? `?${query.join("&")}` : "";
    router.push(queryString);
};
</script>

<style></style>
