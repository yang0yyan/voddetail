import { BasePresenter } from "@/assets/js/net/BasePresenter";
import { Api } from "@/assets/js/net/Api";
import { BaseObserver } from "@/assets/js/net/BaseObserver";
import { FileObserver } from "../FileObserver";
export class TaskDetailPresenter extends BasePresenter {
  constructor(baseView) {
    super(baseView);
    this.api = new Api();
  }

  addCategory(referer, id, mid, content) {
    this.addDisposable(
      this.api.addCategory({ referer, id, mid, content }),
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
      this.api.addCategory({ referer, id, mid, content }),
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
