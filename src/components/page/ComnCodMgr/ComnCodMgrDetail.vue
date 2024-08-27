<template>
    <ContextBox>상세코드 조회</ContextBox>
    <button>뒤로가기</button>
    <button>신규등록</button>
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
            <tr>
                <td colspan="5">데이터가 없습니다.</td>
            </tr>
        </tbody>
    </table>
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
