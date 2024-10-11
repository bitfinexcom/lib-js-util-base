/* eslint-disable no-misleading-character-class */
'use strict'
// https://v8.dev/features/regexp-v-flag
// https://mathiasbynens.be/notes/es-unicode-property-escapes
// https://www.regular-expressions.info/unicode.html

const CHARACTERS = '\\p{L}\\p{M}'
const INPUT_BASE_REG_EXP = new RegExp(`-0-9.,;:<>?/\n${CHARACTERS}'_ &()/+@%`, 'u')
const DIGITS = '0-9'

const REGEX_VALIDATION = {
  NUMBER: new RegExp(`^[${DIGITS}]+$`),
  EMAIL: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  PATH: /([^/]*)\/*$/,
  NAME: new RegExp(`^[-${CHARACTERS}' &()/]+$`, 'u'),
  NAME_WITH_DIGITS: new RegExp(`^[-${CHARACTERS}${DIGITS}' &()/]+$`, 'u'),
  INPUT: new RegExp(`^[${INPUT_BASE_REG_EXP.source}]+$`, 'u'),
  ADDRESS: new RegExp(`^[${INPUT_BASE_REG_EXP.source}#]+$`, 'u'),
  PHONE_CODE: /^(\+)*[0-9]+$/,
  IMAGE: /^data:image\/[A-Za-z+]+;base64,[A-Za-z0-9+/=]+$/,
  FILE: /^data:(image|application|video)\/[A-Za-z0-9+]+;base64,[A-Za-z0-9+/=]+$/,
  FILENAME: new RegExp(`^[-${DIGITS}.${CHARACTERS} ()_]+$`, 'u'),
  ADMIN_PASSWORD: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
}

module.exports = REGEX_VALIDATION
