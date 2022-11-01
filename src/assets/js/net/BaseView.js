export class BaseView {
  constructor() {}
  baseView(
    showLoading,
    hideLoading,
    showError,
    onErrorCode,
    showProgress,
    hideProgress,
    onProgress
  ) {
    this.showLoading = showLoading;
    this.hideLoading = hideLoading;
    this.showError = showError;
    this.onErrorCode = onErrorCode;
    this.showProgress = showProgress;
    this.hideProgress = hideProgress;
    this.onProgress = onProgress;
  }
}

// public interface BaseView {
//   //显示dialog
//   void showLoading();

//   //隐藏 dialog
//   void hideLoading();

//   //显示错误信息
//   void showError(String msg);

//   //错误码
//   void onErrorCode(WeiBoBaseModel model);

//   //进度条显示
//   void showProgress();

//   //进度条隐藏
//   void hideProgress();

//   //文件下载进度监听
//   void onProgress(int progress,int id);
// }
