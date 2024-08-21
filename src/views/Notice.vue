<template>
    <NoticeSearch />
    <NoticeMain />
</template>

<script>
import NoticeMain from "@/components/page/Notice/NoticeMain.vue";
import NoticeSearch from "@/components/page/Notice/NoticeSearch.vue";
import NoticeModal from "@/components/page/Notice/NoticeModal.vue";
export default {
    name: "Notice",
    components: { NoticeMain, NoticeSearch, NoticeModal }
};
</script>
