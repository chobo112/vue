<template>
    <ContextBox>그룹코드 관리</ContextBox>
    <ComnCodMgrMain></ComnCodMgrMain>
    <ComnCodMgrSearch></ComnCodMgrSearch>
</template>

<script setup>
import ContextBox from "@/components/common/ContextBox.vue";
import ComnCodMgrMain from "@/components/page/ComnCodMgr/ComnCodMgrMain.vue";
import ComnCodMgrSearch from "@/components/page/ComnCodMgr/ComnCodMgrSearch.vue";

// 제공할 데이터
const providedValue = ref();

// 데이터 제공
provide("providedValue", providedValue);
</script>

<style></style>
