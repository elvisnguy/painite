import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "./http-common";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errorMessage: "",
  },
  mutations: {
    SET_USER_DATA() {},
  },
  actions: {
    register({ commit }, credentials) {
      return HTTP.post("/auth/register", credentials)
        .then(({ data }) => {
          console.log("user data is", data);
          commit("SET_USER_DATA");
        })
        .catch((error) => {
          this.setState({ errorMesage: error.response.data.errors[0].message });
          console.log(this.state.errorMessage);
        });
    },
  },
});
