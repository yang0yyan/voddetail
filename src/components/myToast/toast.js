import Vue from "vue";
// import myToast from './myToast/myToast.vue'
import myToast from "./myToast";
const MsgConstructor = Vue.extend(myToast);
const options = {
  data() {
    return {
      a: 1111111,
    };
  },
  mounted() {
    this.fn1(1);
    toast();
  },
  methods: {
    fn1(val) {
      this.a = 3333;
      console.log("fn1", val);
    },
  },
  watch: {
    a(val) {
      console.log("watch", val);
    },
  },
};

// options 内部同组件内部生命周期一样，但组件内部优先执行
const instance = new MsgConstructor(options);

instance.$mount();

document.body.appendChild(instance.$el);

export default function toast() {
  Vue.prototype.$mytoast = instance;
}
