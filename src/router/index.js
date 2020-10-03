import Vue from "vue";
import VueRouter from "vue-router";
import $store from "@/store/index"
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.afterEach((to) => {
    if (to.path !== '/') {
        //Homeからrouter経由であればstoreにアクセスできないためwatch使わない
        //url変更と同時に開く処理をstoreに転送
        $store.commit('openSection');
    } else {
        //ホームに戻る場合に閉じさせる
        $store.commit('closeSection');
    }
});

export default router;
