import { CompositeDisposable } from "./CompositeDisposable";
import { OkHttpHolder } from "./OkHttpHolder";

export class BasePresenter {
  constructor(baseView) {
    this.baseView = baseView;
    this.requestList = [];
    this.server = OkHttpHolder.getInstance().getService();
    // const controller = new AbortController();
  }

  /**
   * 解除绑定
   */
  detachView() {
    this.baseView = null;
    this.removeDisposable();
  }

  addDisposable(data, callback) {
    if (this.compositeDisposable === undefined) {
      this.compositeDisposable = new CompositeDisposable();
      this.controller = new AbortController();
      this.compositeDisposable.setController(this.controller);
    }
    data.signal = this.controller.signal;
    this.compositeDisposable.add(this.server(data), callback);
  }

  // public void addFileDisposable(Observable<?> observable, FileObserver observer) {
  //   if (compositeDisposable == null) {
  //       compositeDisposable = new CompositeDisposable();
  //   }
  //   compositeDisposable.add(observable.subscribeOn(Schedulers.io())
  //           .observeOn(AndroidSchedulers.mainThread())
  //           .subscribeWith(observer));
  // }

  removeDisposable() {
    if (this.compositeDisposable != null) {
      this.compositeDisposable.dispose();
    }
  }
}
