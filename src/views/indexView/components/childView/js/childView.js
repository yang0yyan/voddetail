// import { Toast } from "@/application/widget/Toast";
import mixin from "@/assets/js/net/mixin/BaseNetActivity";

import { TaskDetailPresenter } from "@/assets/js/net/presenter/TaskDetailPresenter";
import { TaskDetailView } from "@/assets/js/net/view/TaskDetailView";

export default {
  name: "childView",
  data() {
    return {};
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
  },
};
