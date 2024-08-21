import { defineStore } from "pinia";

export const useModalStore = defineStore("modalState", () => {
    const modalState = ref(false);
    function setModalState() {
        modalState.value = !modalState.value;
    }

    return { modalState, setModalState };
});
