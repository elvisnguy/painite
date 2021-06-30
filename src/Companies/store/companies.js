import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export const HTTP = axios.create({
  baseURL: `http://intern-2021.southeastasia.cloudapp.azure.com:4000/api/v1/companies`,
});

export const namespaced = true;

export const state = {
  companies: [],
};

export const getters = {
  getAll: (state) => state.companies,
};

export const mutations = {
  GET_COMPANIES(state, companies) {
    state.companies = companies;
  },
};

export const actions = {
  /*async getCompanies({ commit }) {
    const response = await axios.get(baseURL);
    commit('GET_COMPANIES', response.data);
  }*/
  getCompanies({ commit }) {
    axios
      .get("/companies ")
      .then((response) => {
        commit("GET_COMPANIES", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getDisplayCompanies(companies) {
    return {
      id: companies.id,
      name: companies.name,
      phoneNumber: companies.phoneNumber,
      website: companies.website,
      address: companies.address,
      currency: companies.currency,
    };
  },
};
