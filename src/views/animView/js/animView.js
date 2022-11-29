import { IntEvaluator } from "@/application/animation/IntEvaluator";
import { ValueAnimator } from "@/application/animation/ValueAnimator";
import { BounceInterpolator } from "@/application/view/animation/BounceInterpolator";
import { DecelerateInterpolator } from "@/application/view/animation/DecelerateInterpolator";

export default {
  name: "animView",
  data() {
    return {
      className: "",
      windowScrollH: 0,
      anim: null,
      anim2: null,
      square2Style: "",
    };
  },
  mounted() {
    let view = document.getElementsByClassName("list");
    this.view = view && view[0] ? view[0] : null;
  },
  created() {
    this.anim = ValueAnimator.ofInt([0, 800]);
    this.anim.setInterpolator(new DecelerateInterpolator());
    this.anim.setEvaluator(new IntEvaluator());
    this.anim.setDuration(1000);
    this.anim.addUpdateListener((value) => {
      console.log("anim", value);
      if (this.view) {
        this.view.scrollTo(0, value);
      }
    });

    this.anim2 = ValueAnimator.ofInt([0, 800]);
    this.anim2.setInterpolator(new BounceInterpolator());
    this.anim2.setEvaluator(new IntEvaluator());
    this.anim2.setDuration(1000);
    this.anim2.addUpdateListener((value) => {
      console.log("anim2", value);
      this.square2Style = `top:${value}px`;
    });
  },
  methods: {
    listClick() {
      // let view = document.getElementsByClassName("list");
      // if (view && view[0]) view[0].scrollTo(0, 0);
      this.setAnimValue();
      this.anim.start();
    },
    setAnimValue() {
      this.anim.setIntValues([this.windowScrollH, 0]);
    },
    windowScroll() {
      this.windowScrollH = this.$refs.list.scrollTop;
    },

    square2Click() {
      this.anim2.start();
    },
  },
};
