import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headers: [
      {
        text: "STATUS",
        align: "start",
        sortable: false,
        value: "status",
        status: true,
      },
      { text: "NAME", value: "name", status: true },
      { text: "EMAIL", value: "email", status: true },
      { text: "PHONE", value: "phone", status: true },
      { text: "NUMBER", value: "number", status: true },
      { text: "OPTIONS", value: "actions", sortable: false, status: true },
    ],

    optionalDisplay: {
      status: true,
      name: true,
      email: true,
      phone: true,
      number: true,
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
