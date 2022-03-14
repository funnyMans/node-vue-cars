<template>
  <div class="text-center">
    <v-menu top :offset-x="data.offset">
      <template v-slot:activator="{ props }">
        <v-btn color="secondary" dark v-bind="props"> Category </v-btn>
      </template>

      <v-list class="bg-dark">
        <v-list-item
          class="hover-me"
          v-for="(item, index) in data.items"
          :key="index"
          @click="store.dispatch('selectCategory', item.title)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps, reactive } from "vue";
const store = useStore();
const props = defineProps({
  isOpen: Boolean,
});
const data = reactive({
  items: [
    { title: "Sedan" },
    { title: "Coupe" },
    { title: "SUV" },
    { title: "Hatchback" },
    { title: "Van/Minivan" },
    { title: "Convertible" },
  ],
  offset: true,
});

const hey = (context) => {
  console.log("hey", context);
};
</script>
<style scoped>
.text-center:hover {
  cursor: pointer !important;
}
.bg-dark {
  margin-top: 1rem;
  background-color: darkgray;
  border-radius: 7px;
  color: white;
}
.hover-me:hover {
  background-color: rgb(197, 206, 199) !important;
  cursor: pointer;
}
</style>
