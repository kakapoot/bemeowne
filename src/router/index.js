import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Search from "../views/Search.vue"
import CatDetails from "../views/CatDetails.vue"
import PageNotFound from "../views/PageNotFound.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/search",
        name: "Search",
        component: Search
    },
    {
        path: "/cat/:id",
        name: "CatDetails",
        component: CatDetails
    },
    {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: PageNotFound
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router