import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    activeCars: [],
    categories: [],
    brands: [],
  },
  plugins: [
    createPersistedState({
      data: [],
    }),
  ],

  getters: {
    getCategories: (state) => {
      return state.categories;
    },

    getAllMakes: (state) => {
      return state.brands;
    },

    getActiveCars: (state) => {
      return state.activeCars;
    },
  },

  mutations: {
    SET_BRANDS(state, carsData) {
      return (state.brands = carsData);
    },

    SET_ACTIVE_CARS(state, data) {
      state.activeCars = data;
    },

    SELECT_CATEGORY({ categories }, category) {
      !categories.includes(category) && categories.push(category);
    },

    DELETE_CATEGORY(state, idx) {
      state.categories.splice(idx, 1);
    },

    DELETE_ALL(state) {
      state.categories = [];
    },
  },

  actions: {
    setBrands({ commit }, brandList) {
      commit("SET_BRANDS", brandList);
    },

    setActiveCars({ commit }, payload) {
      commit("SET_ACTIVE_CARS", payload);
    },

    selectCategory({ commit }, category) {
      commit("SELECT_CATEGORY", category);
    },

    deleteCategories({ commit }, category) {
      commit("DELETE_CATEGORY", category);
    },

    deleteAllCategories({ commit }) {
      commit("DELETE_ALL");
    },
  },
});
