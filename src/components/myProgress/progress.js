import Vue from "vue";
// import myToast from './myToast/myToast.vue'
import myProgress from "./myProgress";
const MsgConstructor = Vue.extend(myProgress);
const options = {
  data() {
    return {};
  },
  mounted() {
    progress();
  },
  methods: {},
};

// options 内部同组件内部生命周期一样，但组件内部优先执行
const instance = new MsgConstructor(options);

instance.$mount();

document.body.appendChild(instance.$el);

export default function progress() {
  Vue.prototype.$myProgress = instance;
}
