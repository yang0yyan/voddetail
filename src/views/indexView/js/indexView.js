import { ArgbEvaluator } from "@/application/animation/ArgbEvaluator";
// import { IntEvaluator } from "@/application/animation/IntEvaluator";
import { ValueAnimator } from "@/application/animation/ValueAnimator";
// import { AccelerateDecelerateInterpolator } from "@/application/view/animation/AccelerateDecelerateInterpolator";
// import { AnticipateInterpolator } from "@/application/view/animation/AnticipateInterpolator";
// import { AnticipateOvershootInterpolator } from "@/application/view/animation/AnticipateOvershootInterpolator";
// import { BounceInterpolator } from "@/application/view/animation/BounceInterpolator";
import { CycleInterpolator } from "@/application/view/animation/CycleInterpolator";
import mixin from "@/class/net/mixin/BaseNetActivity";

import { TaskDetailPresenter } from "@/class/net/presenter/TaskDetailPresenter";
import { TaskDetailView } from "@/class/net/view/TaskDetailView";

import ChildView from "../components/childView/childView.vue";

export default {
  name: "indexView",
  components: { ChildView },
  data() {
    return {
      tag: "indexView",
      len: 0,
      color: "#000000",
    };
  },
  mixins: [mixin],
  created() {
    this.view.ordinaryView(this.submitTaskSuccess, this.submitTaskError);
    this.setSelfDialog(true);
  },
  mounted() {
    // this.mPresenter.addCategory(1, 2, 3, 4);
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
    // this.anim = ValueAnimator.ofInt([0xffff00ff, 0x0000ffff]);
    this.anim = ValueAnimator.ofInt([0, 800]);
    this.anim.setInterpolator(new CycleInterpolator(3));
    this.anim.setEvaluator(new ArgbEvaluator());
    this.anim.setDuration(3000);
    this.anim.addUpdateListener((value) => {
      console.log(value);
      this.len = value;
    });
  },
  methods: {
    calcel() {
      if (this.mPresenter != null) {
        this.mPresenter.detachView();
      }
    },
    start() {
      this.anim.start();
    },
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
  },
};
