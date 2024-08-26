<template>
    <select v-model="searchKey.oname">
        <option value="grp_cod">그룹코드</option>
        <option value="grp_cod_nm">그룹코드명</option>
    </select>
    <input type="text" v-model="searchKey.sname" />
    <button @click="searchComnCod">검색</button>
</template>

<script setup>
// 부모 컴포넌트에서 제공된 데이터를 주입받음
const injectedValue = inject("providedValue");
const searchKey = ref({
    sname: "",
    oname: "grp_cod"
});

const searchComnCod = () => {
    // searchKey.value가 injectedValue.value에 할당되면서 두 객체는 동일한 데이터를 참조하게 됩니다.
    // 새로운 객체로 복사하여 사용 (참조형 데이터기 때문 => 배열, 객체 처럼 ref도)
    injectedValue.value = { ...searchKey.value };
};
</script>

<style></style>
