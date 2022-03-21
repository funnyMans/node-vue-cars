import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    activeCars: [],
    categories: [],
    cars: [],
    plugins: [createPersistedState()],
  },

  getters: {
    getAllCars: (state) => {
      return state.cars;
    },

    getCategories: ({ categories }) => {
      return categories;
    },

    getAllMakes: ({ cars }) => {
      let makes = ["all"];
      cars.forEach((car) => makes.push(car.Make));
      return [...new Set(makes)];
    },

    getActiveCars: (state) => {
      return state.cars.length ? state.activeCars : undefined;
    },
  },

  mutations: {
    SET_CARS_DATA(state, carsData) {
      return (state.cars = carsData);
    },

    SET_ACTIVE_CARS(state, brand) {
      if (brand === "all") {
        state.activeCars = state.cars;
      } else {
        state.activeCars = [
          ...state.cars.filter((car) => car.Make.toLowerCase() === brand),
        ];
      }
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
    setCarsData({ commit }, { data }) {
      commit("SET_CARS_DATA", data);
    },

    setActiveCars({ commit }, brand) {
      commit("SET_ACTIVE_CARS", brand);
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
