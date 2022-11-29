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
          if (data || data === 0) {
            this.baseView.submitTaskSuccess(data);
          } else {
            this.baseView.submitTaskError();
          }
          // if (data.size() == 1 && password.equals(data.get(0).getPassword())) {
          //   this.baseView.submitTaskSuccess("123");
          // } else {
          //   this.baseView.submitTaskError("用户名或密码错误");
          // }
          // this.baseView.submitTaskSuccess(data);
        },
        function error(msg) {
          if (msg.message) {
            this.baseView.submitTaskError(msg.message);
          }
          // if (
          //   msg.contains("user_info.userName") &&
          //   msg.contains("SQLITE_CONSTRAINT_PRIMARYKEY")
          // ) {
          //   this.baseView.submitTaskError("用户名已存在");
          // } else {
          //   this.baseView.submitTaskError(msg);
          // }
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
