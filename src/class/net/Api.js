export class Api {
  constructor() {
    this.httpsUrlCetc = "/service-Ccteg";
  }

  /**
   * post请求
   * @param {Object} data
   * @returns Object
   */
  addCategory(data) {
    let config = this.#get(data);
    config.url = "/api/v1/todo/newreport/query";
    return config;
  }

  #get(data) {
    let config = this.#configData();
    config.method = "GET";
    config.params = data;
    return config;
  }

  #post(data) {
    let config = this.#configData();
    config.method = "POST";
    config.data = data;
    return config;
  }

  /**
   *
   * @returns { url: "", method: "", baseURL: "", headers: {}, params: {}, data: {} }
   */
  #configData() {
    return {
      url: "",
      method: "",
      baseURL: this.httpsUrlCetc,
      headers: {},
      params: {}, // query 传参
      data: {}, // budy 传参
    };
  }
}

export class Builder {
  constructor() {}
}
