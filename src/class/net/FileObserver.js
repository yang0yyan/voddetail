import { BaseObserver } from "./BaseObserver";

export class FileObserver extends BaseObserver {
  constructor(baseView, success, error) {
    super(baseView, success, error);
  }

  // @Override 重写父类方法
  onStart() {
    super.onStart(); //执行父类方法
    if (this.baseView !== undefined) {
      this.baseView.showProgress();
    }
  }

  // @Override 重写父类方法
  onComplete() {
    super.onComplete();
    if (this.baseView !== undefined) {
      this.baseView.hideProgress();
    }
  }
}
