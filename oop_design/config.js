const hasNumber = (string) => (string.search(/\d/) !== -1);

export default class PasswordValidator {
  constructor(options) {
    const defaultOptions = { containNumbers: true, minLength: 8 };
    const fullOptions = {...defaultOptions, ...options};
    this.minLength = fullOptions.minLength;
    this.containNumbers = fullOptions.containNumbers;
  }
  validate = (password) => {
    const errors = {};
    if (password.length < this.minLength) {
      errors.minLength = 'too small';
    }
    if (this.containNumbers) {
      if (!hasNumber(password)) {
        errors.containNumbers = 'should contain at least one number';
      }
    }
    
    return errors;
  }
}