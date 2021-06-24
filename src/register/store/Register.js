import { HTTP } from "../../http-common";
import router from "../../router";

export const registerModule = {
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
      commit("SET_ERROR_MESSAGE", "");
      return HTTP.post("/auth/register", credentials)
        .then(() => {
          commit("SET_ERROR_MESSAGE", "null");
          alert(
            "Congratulations! You Are Successfully Signed Up!! Press OK to login !"
          );
          router.push({ path: "auth/signin" });
        })
        .catch((error) => {
          commit("SET_ERROR_MESSAGE", error.response.data.errors[0].message);
        });
    },
  },
};
