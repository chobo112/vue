<template>
    <teleport to="body">
        <div class="backdrop">
            <div class="container">
                <label>
                    제목 :<input
                        type="text"
                        v-model="noticeDetail.noti_title"
                    />
                </label>
                <label>
                    내용 :
                    <input
                        type="text"
                        v-model="noticeDetail.noti_content"
                    />
                </label>
                파일 :<input
                    type="file"
                    style="display: none"
                    id="fileInput"
                    @change="handlerFile"
                />
                <label class="img-label" htmlFor="fileInput">
                    파일 첨부하기
                </label>
                <div>
                    <div v-if="imageUrl">
                        <label>미리보기</label>
                        <img :src="imageUrl" />
                    </div>
                    <div v-else>
                        <label>파일명</label>
                        {{
                            fileData?.name ||
                            noticeDetail?.file_name
                        }}
                    </div>
                </div>
                <div class="button-box">
                    <button
                        @click="
                            props.notieSeq > 0
                                ? noticeUpdate()
                                : noticeSave()
                        "
                    >
                        {{
                            props.notieSeq > 0 ? "수정" : "저장"
                        }}
                    </button>
                    <button
                        v-if="props.notieSeq > 0"
                        @click="noticeDelete"
                    >
                        삭제
                    </button>
                    <button @click="modalState.setModalState">
                        나가기
                    </button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import { useModalStore } from "@/stores/modalState";
import { useUserInfo } from "@/stores/userInfo";
import {
    useMutation,
    useQuery,
    useQueryClient
} from "@tanstack/vue-query";
import axios from "axios";

const modalState = useModalStore();
const userInfo = useUserInfo();
const noticeDetail = ref(
    new Object({
        noti_title: "",
        noti_content: ""
    })
);
const emit = defineEmits(["searchList", "modalClose"]);
const props = defineProps(["notieSeq"]);
const queryClient = useQueryClient();
const imageUrl = ref();
const fileData = ref();

// 상세조회
const searchDetail = async () => {
    const result = await axios.post(
        "/api/board/noticeDetail.do",
        { noticeSeq: props.notieSeq }
    );
    return result.data;
};

// 데이터가 변경되었다고 인식하지 않기 떄문에, 캐시에 저장된 데이터를 불러와야한다.
const cachedData = queryClient.getQueryData([
    "detail",
    props.notieSeq
]);
const { data: detail } = useQuery({
    queryKey: ["detail", props.notieSeq],
    queryFn: searchDetail,
    enabled: props.notieSeq > 0,
    staleTime: 60 * 1000 // 데이터를 호출시키고 1분 동안은 오래된 데이터라고 인식하지 않아서 같은 작업을 반복할 때 api를 호출하지 않음
});

// 상세조회 - 상세 데이터가 바뀔 때마다, noticeDetail에 집어 넣는다.
watch(detail, (newDetail) => {
    if (newDetail) {
        // 여기서 newDetail은 readonly이기 떄문에 그냥 변경할 수 없다. toRaw 사용
        noticeDetail.value = toRaw(newDetail).detailValue;
    }
});
// 저장
const { mutate: noticeSave } = useMutation({
    mutationFn: () =>
        axios.post("/api/board/noticeSave.do", {
            title: noticeDetail.value.noti_title,
            content: noticeDetail.value.noti_content,
            loginId: userInfo.user.loginId
        }),
    onSuccess: () => {
        modalState.setModalState();
        emit("searchList");
    }
});

// 수정
const { mutate: noticeUpdate } = useMutation({
    mutationFn: () =>
        axios.post("/api/board/noticeUpdate.do", {
            title: noticeDetail.value.noti_title,
            content: noticeDetail.value.noti_content,
            noticeSeq: noticeDetail.value.noti_seq
        }),
    onSuccess: () => {
        modalState.setModalState();
        emit("searchList");
    }
});

// 삭제
const { mutate: noticeDelete } = useMutation({
    mutationFn: () =>
        axios.post("/api/board/noticeDelete.do", {
            noticeSeq: noticeDetail.value.noti_seq
        }),
    onSuccess: () => {
        modalState.setModalState();
        emit("searchList");
    }
});

// 파일
// 미리보기
const handlerFile = (e) => {
    const fileInfo = e.target.files;
    if (fileInfo?.length) {
        const fileInfoSplit = fileInfo[0].name.split(".");
        const fileExtension = fileInfoSplit[1].toLowerCase();
        console.log(fileInfo);
        if (
            fileExtension === "jpg" ||
            fileExtension === "gif" ||
            fileExtension === "png"
        ) {
            imageUrl.value = URL.createObjectURL(fileInfo[0]);
            console.log(imageUrl.value);
        }
        fileData.value = fileInfo[0];
    }
};

// mounted
onMounted(() => {
    console.log(imageUrl.value);
    if (cachedData) {
        noticeDetail.value = cachedData.detailValue;
    }
});

// unmounted
onUnmounted(() => {
    // 자식컴포넌트에서 부모컴포넌트에 대한 응답
    emit("modalClose");
});
</script>

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
    width: 400px;
}

img {
    width: 100px;
    height: 100px;
}

.img-label {
    margin-top: 10px;
    padding: 6px 25px;
    background-color: #ccc;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;

    &:hover {
        background-color: #45a049;
        color: white;
    }

    &:active {
        background-color: #3e8e41;
        box-shadow: 0 2px #666;
        transform: translateY(2px);
    }
}

.button-box {
    text-align: right;
    margin-top: 10px;
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
