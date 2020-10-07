import Vue from "vue";
import VueRouter from "vue-router";
import $store from "@/store/index"
import Home from "../views/Home.vue";
import Article1 from "@/components/articles/Article1";
import Article2 from "@/components/articles/Article2";
import Article3 from "@/components/articles/Article3";
import Article4 from "@/components/articles/Article4";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,

        children: [
            {
                path: 'article1',
                component: Article1,
            },
            {
                path: 'article2',
                component: Article2,
            },
            {
                path: 'article3',
                component: Article3,
            },
            {
                path: 'article4',
                component: Article4,
            },
        ]
    },
]

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
