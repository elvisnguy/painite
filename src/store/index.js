import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headersMap: [
      {
        text: "Status",
        align: "start",
        sortable: false,
        value: "status",
      },
      { text: "Name", value: "name" },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone" },
      { text: "Number", value: "number" },
      { text: "Options", value: "actions", sortable: false },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
