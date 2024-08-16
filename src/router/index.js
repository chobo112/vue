import Login from "@/views/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Notice from "@/views/Notice.vue";
import DashBoard from "@/views/DashBoard.vue";

const routes = [
    {
        path: "/",
        name: "login",
        component: Login
    },
    {
        path: "/vue",
        name: "vue",
        component: DashBoard,
        children: [
            {
                path: "board",
                name: "board",
                children: [
                    {
                        path: "notice.do",
                        name: "notice",
                        component: Notice
                    }
                ]
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory("/"),
    routes
});

export default router;
