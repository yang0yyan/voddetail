import { Loading } from "element-ui";

export default {
  name: "test",
  data() {
    return {
      mPresenter: null,
      view: null,
      loading: null,

      loadingCount: 0,
      messageShowTime: 0,

      showSelfDialog: false,
    };
  },
  mounted() {},
  created() {
    this.mPresenter = this.createPresenter(); // 调用上级初始化
    this.view.baseView(
      this.showLoading,
      this.hideLoading,
      this.showError,
      this.onErrorCode,
      this.showProgress,
      this.hideProgress,
      this.onProgress
    ); // 设置响应回调
  },
  beforeDestroy() {
    if (this.mPresenter != null) {
      this.mPresenter.detachView();
    }
  },
  methods: {
    startLoading() {
      let option = {
        text: "加载中……",
        background: "rgba(0, 0, 0, 0.7)",
      };
      if (this.showSelfDialog) {
        option.target = "#" + this.$options.name;
      }
      this.loading = Loading.service(option);
    },
    endLoading() {
      this.loading.close();
    },

    showLoading() {
      if (this.loadingCount === 0) {
        this.startLoading();
      }
      this.loadingCount += 1;
    },
    hideLoading() {
      if (this.loadingCount <= 0) {
        return;
      }
      this.loadingCount -= 1;
      if (this.loadingCount === 0) {
        this.endLoading();
      }
    },
    showError(msg) {
      let currentTime = new Date().getTime();
      // 两秒内最多显示一条错误信息
      if (currentTime - this.messageShowTime > 2000) {
        this.messageShowTime = currentTime;
        this.$message.warning(msg);
        // this.$mytoast.showEditSuccess(msg);
      }
    },
    onErrorCode() {},
    showProgress() {
      this.$mytoast.showEditSuccess();
    },
    hideProgress() {
      this.$mytoast.hide();
    },
    onProgress() {},

    setSelfDialog(show) {
      this.showSelfDialog = show;
    },
  },
};
