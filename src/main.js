import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import mytoast from "@/components/myToast/toast.js";
// import myProgress from "@/components/myProgress/progress.js";
// import ToastWidget from "@/assets/widget/toast/ToastWidget.js";

import "@/assets/css/style.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
