import mixin from "@/class/net/mixin/BaseNetActivity";

import { TaskDetailPresenter } from "@/class/net/presenter/TaskDetailPresenter";
import { TaskDetailView } from "@/class/net/view/TaskDetailView";

export default {
  name: "netView",
  mixins: [mixin],
  data() {
    return {};
  },
  created() {
    this.view.ordinaryView(this.submitTaskSuccess, this.submitTaskError);
    this.setDialogOption(true, true);
  },
  mounted() {},
  methods: {
    createPresenter() {
      this.view = new TaskDetailView();
      return new TaskDetailPresenter(this.view);
    },
    cancel() {
      if (this.mPresenter != null) {
        this.mPresenter.detachView();
      }
    },
    send() {
      this.mPresenter.addCategory(1, 2, 3, 4);
    },
    submitTaskSuccess(data) {
      console.log("submitTaskSuccess", data);
    },
    submitTaskError(msg) {
      console.log("submitTaskError", msg);
    },
  },
};
