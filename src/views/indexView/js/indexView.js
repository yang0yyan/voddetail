import { IntEvaluator } from "@/application/animation/IntEvaluator";
import { ValueAnimator } from "@/application/animation/ValueAnimator";
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
    let anim = ValueAnimator.ofInt([0, 400]);
    anim.setInterpolator(new CycleInterpolator(2));
    anim.setEvaluator(new IntEvaluator());
    anim.setDuration(2000);
    anim.start();
    anim.addUpdateListener((value) => {
      console.log(value);
      this.len = value + 800;
    });
  },
  methods: {
    calcel() {
      if (this.mPresenter != null) {
        this.mPresenter.detachView();
      }
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
