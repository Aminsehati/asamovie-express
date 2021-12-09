class validation {
  phone(number) {
    var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    var result = regex.test(number);
    return result;
  }
}
module.exports = new validation();