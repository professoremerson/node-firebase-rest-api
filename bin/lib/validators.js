// Definindo o 'strict mode'

class Validator {
  constructor() {
    this._errors = []
  }

  isRequired(value, message) {
    if (!value || value.length <= 0)
      this._errors.push({
        message: message
      })
  }

  hasMinLen(value, min, message) {
    if (!value || value.length < min)
      this._errors.push({
        message: message
      })
  }

  hasMaxLen(value, max, message) {
    if (!value || value.length > max)
      this._errors.push({
        message: message
      })
  }

  hasFixedLen(value, len, message) {
    if (value.length != len)
      this._errors.push({
        message: message
      })
  }

  isEmail(value, message) {
    let reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
    if (!reg.test(value))
      this._errors.push({
        message: message
      })
  }

  isTrue(value, message) {
    if (value)
      this._errors.push({
        message: message
      })
  }

  isNotArrayOrEmpty(value, message) {
    if (!value && value.length == 0)
      this._errors.push({
        message: message
      })
  }

  isValid() {
    return this._errors.length == 0
  }

  errors() {
    return this._errors
  }

  clear() {
    this._errors = []
  }
}

module.exports = Validator
