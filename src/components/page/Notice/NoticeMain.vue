<template>
    <div class="divComGrpCodList">
        <NoticeModal v-if="modalState.modalState" @modalClose="modalClose" :notieSeq="notieSeq" />
        현재 페이지: {{ cPage }} 총 개수: {{ noticeList?.listCount }}
        <table>
            <colgroup>
                <col width="10%" />
                <col width="50%" />
                <col width="30%" />
                <col width="10%" />
            </colgroup>

            <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성일</th>
                    <th scope="col">작성자</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="noticeList">
                    <template v-if="noticeList.listCount == 0">
                        <tr>
                            <td colspan="7">일치하는 검색 결과가 없습니다</td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr
                            v-for="item in noticeList.noticeList"
                            :key="item.noti_seq"
                            @click="handlerDetail(item.noti_seq)"
                        >
                            <td>{{ item.noti_seq }}</td>
                            <td>
                                {{ item.noti_title }}
                            </td>
                            <td>{{ item.noti_date }}</td>
                            <td>{{ item.loginID }}</td>
                        </tr>
                    </template>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import NoticeModal from "./NoticeModal.vue";
import { useModalStore } from "@/stores/modalState";

const modalState = useModalStore();
const cPage = ref(1);
const pageSize = ref(5);
const notieSeq = ref(0);
const route = useRoute();
const noticeList = ref();

// 조회
const searchList = () => {
    let param = new URLSearchParams({
        cpage: cPage.value,
        pageSize: pageSize.value,
        searchTitle: route.query.searchTitle || "",
        searchStDate: route.query.searchStDate || "",
        searchEdDate: route.query.searchStDate || ""
    });

    axios.post("/api/board/noticeListJson.do", param).then((res) => {
        noticeList.value = res.data;
    });
};

// 상세조회
const handlerDetail = (seq) => {
    if (seq) notieSeq.value = seq;
    modalState.setModalState();
};
const modalClose = () => {
    notieSeq.value = 0;
    searchList();
};

onMounted(() => {
    searchList();
});
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
