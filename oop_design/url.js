import Url from '../oop_design/url.js';
export default class {
    constructor(adress) {
      this.url = new URL(adress);
      const params = new URLSearchParams(this.url.search).entries()
      this.paramsAsObject = Object.fromEntries(params);
      this.scheme = this.url.protocol.slice(0, -1);
      this.hostname = this.url.hostname;
      this.host = this.url.host;
    }
    getScheme() {
      return this.scheme;
    }
    getHostName() {
      return this.hostname;
    }
    getQueryParams() {
      return this.paramsAsObject;
    }
    getQueryParam(key,defaultValue = null) {
      if(this.paramsAsObject[key]) {
        return this.paramsAsObject[key];
      }
      return defaultValue;
    }
    toString() {
      return this.url.toString();
    }
    equals(url) {
        return (this.url.toString() === url.toString());
    }
}
