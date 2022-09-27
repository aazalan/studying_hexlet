export default class Truncater {
    static defaultOptions = {
      separator: '...',
      length: 200,
    };
    constructor(options) {
      this.options = { ...this.constructor.defaultOptions, ...options};
    }
    truncate(text, options) {
      const { length, separator } = { ...this.options, ...options };
      if (text.length <= length) {
        return text;
      }
      const truncatedText = text.slice(0, length) + separator;
      return truncatedText;
    }
  }