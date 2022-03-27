import {createWebHistory,createRouter} from "vue-router";

import AppStarting from "@/view/AppStarting";
import AppSurvey from "./view/AppSurvey";


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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})


export default router;