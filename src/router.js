import {createWebHistory,createRouter} from "vue-router";

import AppStarting from "@/view/AppStarting";
import AppSurvey from "./view/AppSurvey";
import AppClosing from "@/view/AppClosing";

const routes = [
    {
        path: '/',
        name: "AppStarting",
        component: AppStarting
    },
    {
        path: '/survey',
        name: "AppSurvey",
        component: AppSurvey
    },
    {
        path: '/close',
        name: "AppClosing",
        component: AppClosing
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})


export default router;