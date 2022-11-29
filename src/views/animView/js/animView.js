import { IntEvaluator } from "@/application/animation/IntEvaluator";
import { ValueAnimator } from "@/application/animation/ValueAnimator";
import { BounceInterpolator } from "@/application/view/animation/BounceInterpolator";
import { DecelerateInterpolator } from "@/application/view/animation/DecelerateInterpolator";
import { LinearInterpolator } from "@/application/view/animation/LinearInterpolator";

export default {
  name: "animView",
  data() {
    return {
      className: "",
      anim: null,
      anim2: null,
      anim3: null,
      square2Style1: "",
      square2Style2: "",
    };
  },
  computed: {
    square2Style() {
      return this.square2Style1 + this.square2Style2;
    },
  },
  mounted() {
    let view = document.getElementsByClassName("list");
    this.view = view && view[0] ? view[0] : null;
  },
  created() {
    this.anim = ValueAnimator.ofInt([0, 600]);
    this.anim.setInterpolator(new DecelerateInterpolator());
    this.anim.setEvaluator(new IntEvaluator());
    this.anim.setDuration(1000);
    this.anim.addUpdateListener((value) => {
      console.log("anim", value);
      if (this.view) {
        this.view.scrollTo(0, value);
      }
    });

    this.anim2 = ValueAnimator.ofInt([0, 360]);
    this.anim2.setInterpolator(new BounceInterpolator());
    this.anim2.setEvaluator(new IntEvaluator());
    this.anim2.setDuration(1000);
    this.anim2.addUpdateListener((value) => {
      console.log("anim2", value);
      this.square2Style1 = `top:${value}px;`;
      // var hd = (Math.PI / 180) * value + 90;
      // var x = 100 * Math.cos(hd);
      // var y = 100 * Math.sin(hd);
      // this.square2Style1 = `top:${100 - y}px;`;
      // this.square2Style2 = `left:${100 + x}px;`;
    });

    this.anim3 = ValueAnimator.ofInt([0, 600]);
    this.anim3.setInterpolator(new LinearInterpolator());
    this.anim3.setEvaluator(new IntEvaluator());
    this.anim3.setDuration(1000);
    this.anim3.addUpdateListener((value) => {
      console.log("anim3", value);
      this.square2Style2 = `left:${value}px;`;
    });
  },
  methods: {
    listClick() {
      this.setAnimValue();
      this.anim.start();
    },
    setAnimValue() {
      let windowScrollH = this.$refs.list.scrollTop;
      this.anim.setIntValues([windowScrollH, 0]);
    },
    square2Click() {
      this.anim2.start();
      this.anim3.start();
    },
  },
};
