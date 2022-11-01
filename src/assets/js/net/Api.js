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
    return {
      url: "/api/v1/mgxType_dic/category",
      method: "POST",
      baseURL: this.httpsUrlCetc,
      headers: {},
      params: {}, // query 传参
      data, // budy 传参
    };
  }

  #post(data) {
    return {
      url: "",
      method: "POST",
      baseURL: "",
      headers: {},
      params: {}, // query 传参
      data, // budy 传参
    };
  }
}

export class Builder {
  constructor() {}
}
