import Vue from "vue";
import Vuex from "vuex";
import registerModule from "./register/store/Register";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    registerModule,
  },
});
