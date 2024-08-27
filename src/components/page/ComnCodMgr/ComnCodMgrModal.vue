<template>
    <teleport to="body">
        <div class="backdrop">
            <div class="container">
                <div class="header">그룹 코드 상세</div>
                <!-- <div >기다려보세요</div> -->
                <tbody>
                    <tr>
                        <th>그룹 코드 id *</th>
                        <td>
                            <input type="text" name="grp_cod" />
                        </td>
                        <th>그룹 코드 명 *</th>
                        <td>
                            <input type="text" name="grp_cod_nm" />
                        </td>
                    </tr>
                    <tr>
                        <th>코드 설명</th>
                        <td colSpan="3">
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <th>사용 유무 *</th>
                        <td colspan="3">
                            <input type="radio" name="useYn" value="Y" />
                            사용
                            <input type="radio" name="useYn" value="N" />
                            미사용
                        </td>
                    </tr>
                </tbody>
                <div class="btn-group">
                    <button>등록</button>
                    <button>삭제</button>
                    <button>닫기</button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script></script>

<style lang="scss" scoped>
.backdrop {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    flex-flow: row wrep;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    font-weight: bold;
}
.header {
    background-color: #e0e0e0;
    padding: 10px 100% 10px 0px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 16px;
    font-size: 20px;
    margin-right: auto;
}
label {
    display: flex;
    flex-direction: column;
}

input[type="text"] {
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    position: relative;
    width: 600px;
    height: 300px;
    align-content: center;
}

.btn-group {
    text-align: right;
    margin-top: 10px;
    float: inline-end;
}

button {
    background-color: #3bb2ea;
    border: none;
    color: white;
    padding: 10px 22px;
    text-align: right;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 4px #999;
    transition: 0.3s;

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
