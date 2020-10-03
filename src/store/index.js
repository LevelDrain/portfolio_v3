import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        inHome: false,
        inWork: true,
        showSection: false
    },
    mutations: {
        openSection(state) {
            state.showSection = true
        },
        closeSection(state) {
            state.showSection = false
        }
    },
    actions: {},
});
