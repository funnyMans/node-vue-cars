import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({ components, directives });
const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

app.mount("#app");
