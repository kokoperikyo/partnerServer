import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./plugins/firebase";
import vuetify from "./plugins/vuetify";
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記

Vue.config.productionTip = false;

Vue.use(VueAxios, axios) //追記


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");