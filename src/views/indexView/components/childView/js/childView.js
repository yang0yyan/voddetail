// import { Toast } from "@/application/widget/Toast";
import mixin from "@/class/net/mixin/BaseNetActivity";

import { TaskDetailPresenter } from "@/class/net/presenter/TaskDetailPresenter";
import { TaskDetailView } from "@/class/net/view/TaskDetailView";

export default {
  name: "childView",
  data() {
    return {
      filter: null,
      frames: 0,
      rad: Math.PI / 180,
    };
  },
  mixins: [mixin],
  created() {
    this.view.ordinaryView(this.submitTaskSuccess, this.submitTaskError);
    this.setSelfDialog(true);
  },
  mounted() {
    // this.mPresenter.addCategory2(
    //   function submitTaskSuccess(data) {
    //     console.log("submitTaskSuccess2", data);
    //   },
    //   function submitTaskError(msg) {
    //     console.log("submitTaskError2", msg);
    //   },
    //   1,
    //   2,
    //   3,
    //   4
    // );
    // setTimeout(() => {
    //   Toast.makeText("你好", Toast.LENGTH_SHORT).show();
    // }, 1000);
    this.filter = document.querySelector("#turbulence");
    // window.requestAnimationFrame(this.freqAnimation);
  },
  methods: {
    createPresenter() {
      this.view = new TaskDetailView();
      return new TaskDetailPresenter(this.view);
    },
    submitTaskSuccess(data) {
      console.log("submitTaskSuccess", data);
    },
    submitTaskError(msg) {
      console.log("submitTaskError", msg);
    },
    freqAnimation() {
      let bfx = 0.005;
      let bfy = 0.005;
      this.frames += 0.00005;
      bfx += 0.0025 * Math.cos(this.frames * 0x00ff0000);
      bfy += 0.0025 * Math.sin(this.frames * 0x00ff0000);
      let bf = bfx.toString() + " " + bfy.toString();
      console.log(bf);
      this.filter.setAttributeNS(null, "baseFrequency", bf);
      setTimeout(() => {
        window.requestAnimationFrame(this.freqAnimation);
      }, 1000 / 10);
    },
  },
};
