<template>
    <ContextBox>공지사항</ContextBox>
    <NoticeSearch />
    <NoticeMain />
</template>

<script>
import NoticeMain from "@/components/page/Notice/NoticeMain.vue";
import NoticeSearch from "@/components/page/Notice/NoticeSearch.vue";
import NoticeModal from "@/components/page/Notice/NoticeModal.vue";
import ContextBox from "@/components/common/ContextBox.vue";
export default {
    name: "Notice",
    components: { NoticeMain, NoticeSearch, NoticeModal, ContextBox }
};
</script>
