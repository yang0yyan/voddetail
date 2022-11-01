// eslint-disable-next-line no-unused-vars
import { BaseView } from "./BaseView";
export class BaseObserver {
  /**
   * 重载
   * @param {BaseView} baseView
   * @param {*} success
   * @param {*} error
   */
  constructor(baseView, success, error) {
    this.baseView = baseView;
    this.success = success;
    this.error = error;

    this.SUCCESS_CODE = 200;

    this.REJECT_REQUEST = 403;
    this.SERVICE_ERROR_CODE = 500;
    this.SYSTEM_ERROR_CODE = 501;

    this.ECONNABORTED = "ECONNABORTED";
    this.ERR_BAD_OPTION = "ERR_BAD_OPTION";
    this.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
    this.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
    this.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
    this.ERR_CANCELED = "ERR_CANCELED";
    this.ERR_DEPRECATED = "ERR_DEPRECATED";
    this.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
    this.ERR_NETWORK = "ERR_NETWORK";
    this.ETIMEDOUT = "ETIMEDOUT";
  }

  // @Override
  onStart() {
    if (this.baseView !== undefined) {
      this.baseView.showLoading();
    }
  }

  // @Override
  onNext(o) {
    if (o.code === this.SUCCESS_CODE) {
      this.success(o.data);
    } else {
      this.error(o);
      this.#responseError(o.code, o.message);
    }
  }

  // @Override
  onError(e) {
    console.log(e);
    this.error(e);
    if (e.response && e.response.data) {
      this.#responseError(e.response.data.code, e.response.data.message);
    } else {
      this.#systemError(e.code, e.message);
    }
  }

  // @Override
  onComplete() {
    if (this.baseView !== undefined) {
      this.baseView.hideLoading();
    }
  }

  #systemError(code, message) {
    if (code === this.ECONNABORTED) {
      this.#showError(code, "服务异常请稍后重试");
    } else if (code === this.ERR_BAD_OPTION) {
      this.#showError(code, "错误选项");
    } else if (code === this.ERR_BAD_OPTION_VALUE) {
      this.#showError(code, "错误选项值");
    } else if (code === this.ERR_BAD_REQUEST) {
      this.#showError(code, "错误请求");
    } else if (code === this.ERR_BAD_RESPONSE) {
      this.#showError(code, "错误响应");
    } else if (code === this.ERR_CANCELED) {
      this.#showError(code, "取消请求");
    } else if (code === this.ERR_DEPRECATED) {
      this.#showError(code, "网络断开");
    } else if (code === this.ERR_FR_TOO_MANY_REDIRECTS) {
      this.#showError(code, "重定向过多");
    } else if (code === this.ERR_NETWORK) {
      this.#showError(code, "错误网络");
    } else if (code === this.ETIMEDOUT) {
      this.#showError(code, "网络超时");
    } else {
      this.#showError(code, message);
    }
  }

  #responseError(code, message) {
    switch (code) {
      case this.REJECT_REQUEST:
        this.#showError(code, "拒绝请求: " + message);
        break;
      case this.SERVICE_ERROR_CODE:
        this.#showError(code, "服务器遇到错误，无法完成请求");
        break;
      case this.SYSTEM_ERROR_CODE:
        this.#showError(code, "系统错误: " + message);
        break;
      default:
        this.#showError(code, message);
        break;
    }
  }

  #showError(unknownError, message) {
    if (this.baseView !== undefined) {
      this.baseView.showError(message);
    }
  }
}
