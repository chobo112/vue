<template>
    <button>신규등록</button>
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
            <tr>
                <td colspan="6">데이터가 없습니다.</td>
            </tr>
        </tbody>
    </table>

    현재 페이지: {{ 0 }} 총 개수: {{ 0 }}
</template>

<script></script>

<style lang="scss" scoped>
table {
    width: 100%;
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

a {
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        color: white;
    }
}

button {
    text-align: center;
    text-decoration: none;
    display: block;
    border: none;
    color: white;
    width: 80px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    margin: 10px 2px;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 4px #999;
    background-color: #3bb2ea;
    float: inline-end;

    &:hover {
        background-color: #45a049;
    }

    &:active {
        background-color: #3e8e41;
        box-shadow: 0 2px #666;
        transform: translateY(2px);
    }
}
</style>
