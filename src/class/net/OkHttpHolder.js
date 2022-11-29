import { Api } from "./Api";

export class OkHttpHolder {
  static #instance = null;
  #service = null;
  #api = null;

  constructor() {
    this.#initOkHttp();
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new OkHttpHolder();
    }
    return this.#instance;
  }

  #initOkHttp() {
    let axios = require("axios");

    this.#service = axios.create({
      timeout: 2000,
    });
    // 全局设置重试时长和重试间隔
    this.#service.defaults.retry = 1;
    this.#service.defaults.retryDelay = 1000;
    this.#setInterceptors();
    this.#api = new Api();
  }

  getService() {
    return this.#service;
  }

  getApi() {
    return this.#api;
  }

  #setInterceptors() {
    let thiz_ = this;
    // 添加请求拦截器
    this.#service.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        config.headers["Business-Name"] = "CCTEG";
        config.headers["Authorization"] =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNjY5NjE3ODc3LCJyb2xlcyI6IumHh-e8luWqkui1hOa1i-ivleinkuiJsizkuK3lm73nhaTnp5HmgLvpg6jnrqHnkIblkZgiLCJ1c2VySWQiOiI4NjAwMDBfMDAxMzE2XzAwNDQ0MCIsInVzZXJuYW1lIjoi5Lit5Zu954Wk56eR5oC76YOo566h55CG5ZGYIn0.QOEieovI9j-7uTYxPlHpL7iTDJUjTmY-rQLvD3oChVA";
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    this.#service.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么

        // 重试失败的请求
        let obj = thiz_.postDelayRetry(error);
        if (obj) return obj;

        return Promise.reject(error);
      }
    );
  }

  // 异步 重试失败的请求
  postDelayRetry(err) {
    var config = err.config;
    // 如果配置不存在或未设置重试选项，则拒绝
    if (!config || !config.retry) return null;

    // 设置变量以跟踪重试次数
    config.__retryCount = config.__retryCount || 0;

    // 判断是否超过总重试次数
    if (config.__retryCount >= config.retry) {
      // 返回错误并退出自动重试
      return null;
    }

    // 增加重试次数
    config.__retryCount += 1;

    //打印当前重试次数
    console.log(config.url + " 自动重试第" + config.__retryCount + "次");

    // 创建新的Promise
    var backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, config.retryDelay || 1);
    });

    let thiz_ = this;
    // 返回重试请求
    return backoff.then(function () {
      return thiz_.#service(config);
    });
  }
}
