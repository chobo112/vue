<template>
    <div class="search-box">
        <select>
            <option value="grp_cod">그룹코드</option>
            <option value="grp_cod_nm">그룹코드명</option>
        </select>
        <input type="text" />
        <button>검색</button>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.search-box {
    float: inline-end;
}

select {
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
}
input {
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
}
button {
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border: none;
    color: white;
    width: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 4px #999;
    background-color: #3bb2ea;

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
