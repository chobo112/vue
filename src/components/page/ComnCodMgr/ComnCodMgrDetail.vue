<template>
    <button @click="$router.go(-1)">뒤로가기</button>
    <button @click="handlerModal()">신규등록</button>
    <table>
        <thead>
            <tr>
                <th>그룹코드</th>
                <th>상세코드</th>
                <th>상세코드명</th>
                <th>상세코드 설명</th>
                <th>사용여부</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="detailList?.listComnDtlCodModel.length > 0">
                <tr
                    v-for="detail in detailList.listComnDtlCodModel"
                    :key="detail.dtl_cod"
                    @click="handlerModal(detail.dtl_cod)"
                >
                    <td>{{ detail.grp_cod }}</td>
                    <td>{{ detail.dtl_cod }}</td>
                    <td>{{ detail.dtl_cod_nm }}</td>
                    <td>{{ detail.dtl_cod_eplti }}</td>
                    <td>{{ detail.use_poa }}</td>
                </tr>
            </template>
            <template v-else>
                <tr>
                    <td colspan="5">데이터가 없습니다.</td>
                </tr>
            </template>
        </tbody>
    </table>
    <ComnCodMgrDetailModal v-if="modalState.modalState" :grpCod="params.id" :grpCodNm="nm" :detailCod="detailCod" />
</template>

<script setup>
import { useModalStore } from "@/stores/modalState";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import ComnCodMgrDetailModal from "./ComnCodMgrDetailModal.vue";

const cPage = ref(1);
const { params } = useRoute();
const { nm } = history.state;
const modalState = useModalStore();
const searchDetail = async () => {
    const result = await axios.post("/api/system/listComnDtlCodJson.do", {
        grp_cod: params.id,
        currentPage: cPage.value,
        pageSize: 5
    });
    return result.data;
};
const detailCod = ref();

const { data: detailList } = useQuery({
    queryKey: ["detailList", cPage.value],
    queryFn: searchDetail,
    staleTime: 60 * 1000,
    gcTime: 0
});

const handlerModal = (param) => {
    modalState.setModalState();
    param ? (detailCod.value = param) : (detailCod.value = "create");
};
</script>

<style lang="scss" scoped>
table {
    width: 80%;
    border-collapse: collapse;
    margin: 20px 0px 0px 0px;
    font-size: 18px;
    text-align: left;

    th,
    td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }

    th {
        background-color: #2676bf;
        color: #ddd;
    }

    /* 테이블 올렸을 때 */
    tbody tr:hover {
        background-color: #d3d3d3;
        opacity: 0.9;
        cursor: pointer;
    }
}
</style>
