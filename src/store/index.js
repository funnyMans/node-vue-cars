import { createStore } from "vuex";

export default createStore({
  state: {
    activeCars: [],
    categories: [],
    cars: [
      {
        Year: 2020,
        Make: "Audi",
        Model: "Q3",
        Category: "SUV",
        url: "../../public/Audi_Q3.jpg",
        createdAt: "2020-01-27T20:44:17.665Z",
      },
      {
        Year: 2020,
        Make: "BMW",
        Model: "3 Series",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:17.665Z",
      },

      {
        Year: 2020,
        Make: "BMW",
        Model: "X3",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:17.665Z",
      },
      {
        Year: 2020,
        Make: "BMW",
        Model: "7 Series",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:17.665Z",
      },
      {
        Year: 2020,
        Make: "Audi",
        Model: "SQ5",
        Category: "SUV",
        url: "../../public/Audi_SQ5.png",
        createdAt: "2020-01-27T20:44:17.665Z",
      },
      {
        Year: 2020,
        Make: "Audi",
        Model: "R8",
        Category: "Convertible",
        url: "../../public/Audi_R8.jpg",
        createdAt: "2020-01-27T20:44:17.665Z",
      },
      {
        Year: 2020,
        Make: "Audi",
        Model: "Q5",
        Category: "SUV",
        url: "../../public/Audi_Q5.jpg",
        createdAt: "2020-01-27T20:44:17.665Z",
      },
      {
        Year: 2020,
        Make: "BMW",
        Model: "X7",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:17.665Z",
      },
      {
        Year: 2020,
        Make: "Audi",
        Model: "A7",
        Category: "Sedan",
        url: "../../public/Audi_A7.png",
        createdAt: "2020-01-27T20:44:17.665Z",
      },
      {
        Year: 2020,
        Make: "BMW",
        Model: "X5",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:17.665Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "ES",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "LC",
        Category: "Coupe",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "LX",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "RC",
        Category: "Coupe",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "GX",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "IS",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "GS",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "LS",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "UX",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Mercedes-Benz",
        Model: "GLS",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Mercedes-Benz",
        Model: "CLA",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "NX",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "Armada",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Mercedes-Benz",
        Model: "G-Class",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Lexus",
        Model: "RX",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "Kicks",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "Murano",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Mercedes-Benz",
        Model: "C-Class",
        Category: "Convertible",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "NV3500 HD Passenger",
        Category: "Van/Minivan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Mercedes-Benz",
        Model: "GLA",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "NV1500 Cargo",
        Category: "Van/Minivan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Mercedes-Benz",
        Model: "GLE",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "Maxima",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "370Z",
        Category: "Coupe",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Mercedes-Benz",
        Model: "GLC",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "Altima",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "GT-R",
        Category: "Coupe",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "NV3500 HD Cargo",
        Category: "Van/Minivan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Porsche",
        Model: "Panamera",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Porsche",
        Model: "Taycan",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "Pathfinder",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "Rogue",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "NV200",
        Category: "Van/Minivan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Porsche",
        Model: "911",
        Category: "Convertible",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "Rogue Sport",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Porsche",
        Model: "Macan",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Porsche",
        Model: "Cayenne Coupe",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Porsche",
        Model: "Cayenne",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "NV2500 HD Cargo",
        Category: "Van/Minivan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Nissan",
        Model: "Versa",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.006Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "Avalon",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "Camry",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "Corolla Hatchback",
        Category: "Hatchback",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "Corolla",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "86",
        Category: "Coupe",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "Avalon Hybrid",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "4Runner",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "C-HR",
        Category: "SUV",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "Camry Hybrid",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
      {
        Year: 2020,
        Make: "Toyota",
        Model: "Corolla Hybrid",
        Category: "Sedan",
        createdAt: "2020-01-27T20:44:18.007Z",
      },
    ],
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
      return state.activeCars;
    },
  },

  mutations: {
    SET_ACTIVE_CARS(state, brand) {
      if (brand === "all") {
        state.activeCars = state.cars;
      } else {
        state.activeCars = [
          ...state.cars.filter(
            (car) => car.Make.toLowerCase() === brand.toLowerCase()
          ),
        ];
      }
    },

    SELECT_CATEGORY({ categories }, category) {
      !categories.includes(category) && categories.push(category);
    },

    DELETE_CATEGORY({ categories }, idx) {
      categories.splice(idx, 1);
    },

    DELETE_ALL({ categories }) {
      categories.splice(0);
    },
  },

  actions: {
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
