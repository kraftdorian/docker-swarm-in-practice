import Vue from "vue";
import App from "./App.vue";
import "./stylesheets/tailwind.scss";
import "./stylesheets/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
