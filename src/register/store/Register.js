import { HTTP } from "../../http-common";

export default {
  namespaced: true,
  state: {
    errorMessage: "null",
  },
  mutations: {
    SET_ERROR_MESSAGE(state, message) {
      state.errorMessage = message;
    },
  },
  actions: {
    register({ commit }, credentials) {
      commit("SET_ERROR_MESSAGE", "null");
      return HTTP.post("/auth/register", credentials)
        .then(() => {
          commit("SET_ERROR_MESSAGE", "");
        })

        .catch((error) => {
          commit("SET_ERROR_MESSAGE", error.response.data.errors[0].message);
        });
    },
  },
  getters: {
    errorMessageGetter: (state) => state.errorMessage,
  },
};
