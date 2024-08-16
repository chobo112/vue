<template>
    <div class="divComGrpCodList">
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
                <template v-if="data">
                    <template v-if="data.listCount == 0">
                        <tr>
                            <td colspan="7">
                                일치하는 검색 결과가 없습니다
                            </td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr
                            v-for="item in data.noticeList"
                            :key="item.noti_seq"
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
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { useRoute } from "vue-router";

const cPage = ref(1);
const pageSize = ref(5);
const route = useRoute();
const searchKeyWord = ref(route.query);

const searchList = async () => {
    let param = new URLSearchParams({
        cpage: cPage.value,
        pageSize: pageSize.value,
        searchTitle: route.query.searchTitle || "",
        searchStDate: route.query.searchStDate || "",
        searchEdDate: route.query.searchStDate || ""
    });

    const result = await axios.post(
        "/api/board/noticeListJson.do",
        param
    );
    return result.data;
};

const { data, refetch } = useQuery({
    queryKey: ["user", pageSize, cPage, searchKeyWord.value],
    queryFn: searchList
});

watch(
    () => route.query,
    () => {
        refetch();
    }
);
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
