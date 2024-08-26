<template>
    <button @click="handlerInsertModal">신규등록</button>
    <table>
        <colgroup>
            <col width="20%" />
            <col width="10%" />
            <col width="20%" />
            <col width="7%" />
            <col width="10%" />
            <col width="5%" />
        </colgroup>
        <thead>
            <tr>
                <th>그룹코드</th>
                <th>그룹코드명</th>
                <th>그룹코드 설명</th>
                <th>사용여부</th>
                <th>등록일</th>
                <th>비고</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="listComnGrp?.listComnGrpCod.length > 0">
                <tr
                    v-for="comnGrp in listComnGrp.listComnGrpCod"
                    :key="comnGrp.grp_cod"
                    @click="routerNavi(comnGrp.grp_cod, comnGrp.grp_cod_nm)"
                >
                    <td>{{ comnGrp.grp_cod }}</td>
                    <td>{{ comnGrp.grp_cod_nm }}</td>
                    <td>{{ comnGrp.grp_cod_eplti }}</td>
                    <td>{{ comnGrp.use_poa }}</td>
                    <td>{{ comnGrp.fst_enlm_dtt }}</td>
                    <td>
                        <a @click="(e) => handlerUpdateModal(e, comnGrp.grp_cod)">수정</a>
                    </td>
                </tr>
            </template>
            <template v-else>
                <tr>
                    <td>데이터가 없습니다.</td>
                </tr>
            </template>
        </tbody>
    </table>
    <ComnCodMgrModal v-if="modalState.modalState" :grpCodProp="grpCodProp" />
</template>

<script setup>
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import ComnCodMgrModal from "./ComnCodMgrModal.vue";
import { useModalStore } from "@/stores/modalState";

const cPage = ref(1);
const pageSize = ref(5);
const injectedValue = inject("providedValue");
const grpCodProp = ref(0);
const modalState = useModalStore();
const router = useRouter();

const searchList = async () => {
    const result = await axios.post("/api/system/listComnGrpCodJson.do", {
        currentPage: cPage.value,
        pageSize: pageSize.value,
        ...injectedValue.value
    });
    return result.data;
};

const { data: listComnGrp, refetch } = useQuery({
    queryKey: ["listComnGrp", cPage.value, injectedValue],
    queryFn: searchList,
    staleTime: 60 * 1000,
    gcTime: 0
});

const handlerUpdateModal = (e, grpCod) => {
    e.stopPropagation();
    grpCodProp.value = grpCod;
    modalState.setModalState();
};

const handlerInsertModal = () => {
    grpCodProp.value = "create";
    modalState.setModalState();
};

const routerNavi = (grpCod, grpCodNm) => {
    router.push({
        name: "comnCodMgrDetail",
        params: { id: grpCod },
        state: { nm: grpCodNm }
    });
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
