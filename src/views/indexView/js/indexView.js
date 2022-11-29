import { IntEvaluator } from "@/application/animation/IntEvaluator";
import { ValueAnimator } from "@/application/animation/ValueAnimator";
import { BounceInterpolator } from "@/application/view/animation/BounceInterpolator";
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
      color: "#aa0000",
      txt: "Z",
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
    this.anim = ValueAnimator.ofInt([0, 800]);
    this.anim.setInterpolator(new BounceInterpolator());
    this.anim.setEvaluator(new IntEvaluator());
    this.anim.setDuration(2000);
    this.anim.addUpdateListener((value) => {
      console.log(value);
      // this.txt = value;
      this.len = value;
      // this.color = value;
    });
  },
  methods: {
    calcel() {
      if (this.mPresenter != null) {
        this.mPresenter.detachView();
      }
    },
    start() {
      // Toast.makeText("你好", Toast.LENGTH_SHORT).show();
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
