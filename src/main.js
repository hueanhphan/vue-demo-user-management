import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import storeConfigs from "./store/index.store";
import { createStore } from "vuex";
import "../node_modules/primevue/resources/themes/saga-blue/theme.css"; //theme
import "../node_modules/primevue/resources/primevue.min.css"; //core css
import "../node_modules/primeicons/primeicons.css"; //icons

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";

const app = createApp(App);
const store = createStore(storeConfigs);
app.use(PrimeVue);
app.use(store);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Password", Password);

app.mount("#app");
