import { BaseObserver } from "../BaseObserver";
import { BasePresenter } from "../BasePresenter";
import { FileObserver } from "../FileObserver";

export class TaskDetailPresenter extends BasePresenter {
  constructor(baseView) {
    super(baseView);
  }

  addCategory(referer, id, mid, content) {
    this.addDisposable(
      this.apiServer.addCategory({ referer, id, mid, content }),
      new BaseObserver(
        this.baseView,
        function success(data) {
          this.baseView.submitTaskSuccess(data);
        },
        function error(msg) {
          this.baseView.submitTaskError(msg);
        }
      )
    );
  }

  addCategory2(submitTaskSuccess, submitTaskError, referer, id, mid, content) {
    this.addDisposable(
      this.apiServer.addCategory({ referer, id, mid, content }),
      new FileObserver(
        this.baseView,
        function success(data) {
          submitTaskSuccess(data);
        },
        function error(msg) {
          submitTaskError(msg);
        }
      )
    );
  }
}
