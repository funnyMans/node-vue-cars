<template>
  <v-card contained-text rounded class="single-car">
    <v-card-title>
      {{ details.Model }}
    </v-card-title>

    <div v-if="showDetails" class="img-container">
      <img :src="'/car_icon.svg'" class="img-size" />
    </div>

    <div v-else class="content">
      <span>{{ details.Category }}</span>
      <span>{{ details.Year }}</span>
      <span>{{ new Date(details.createdAt).toDateString() }}</span>
    </div>

    <v-card-actions>
      <button @click="showDetails = !showDetails" class="show-details">
        <span>{{ !showDetails ? "Show details" : "Hide details" }}</span>
      </button>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  details: Object,
});

const showDetails = ref(false);
</script>

<style scoped>
.single-car {
  width: 250px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: 10px 8px 10px 0;
  justify-content: space-between;
  background: #334d50; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #cbcaa5, #334d50);
  background: linear-gradient(to right, #cbcaa5, #334d50);
}
.v-card-title {
  font-family: "Lucida Sans";
  font-size: 1.5rem;
  font-weight: 700;
  color: whitesmoke;
  transition: 0.5s ease-in-out;
}
.v-card-title:hover {
  color: rgb(163, 223, 163);
  transform: scale(1.15);
}
.content {
  max-width: 80%;
  max-height: 205px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: rgb(255, 255, 255);
  font-family: Georgia, "Times New Roman", Times, serif;
}
.content > span {
  font-size: 1.2rem;
  font-weight: 1000 !important;
}

.img-size {
  width: 80%;
  transition: 0.7s;
  filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(152deg) brightness(106%)
    contrast(100%);
}
.img-size:hover {
  transform: scale(1.1);
}
.show-details {
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(214, 205, 205);
}
.show-details:hover {
  background-color: rgb(58, 53, 53);
  color: white;
  cursor: pointer;
}
.show-details > span {
  font-size: 1rem;
  font-weight: 550;
}
.single-car > h2 {
  color: rgb(241, 227, 21);
}
.single-car > h3 {
  color: rgb(21, 234, 241);
}
.single-car > p {
  font-size: small;
}
</style>
