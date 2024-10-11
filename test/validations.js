'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { validations } = require('../index')

const {
  NUMBER,
  EMAIL,
  PATH,
  NAME,
  NAME_WITH_DIGITS,
  INPUT,
  ADDRESS,
  PHONE_CODE,
  IMAGE,
  FILE,
  FILENAME,
  ADMIN_PASSWORD
} = validations

describe('validations', () => {
  it('NUMBER, validate numbers', () => {
    assert.strictEqual(NUMBER.test('100'), true)

    assert.strictEqual(NUMBER.test('-100'), false)
    assert.strictEqual(NUMBER.test('1.2'), false)
    assert.strictEqual(NUMBER.test('.2'), false)
    assert.strictEqual(NUMBER.test('-0'), false)
    assert.strictEqual(NUMBER.test('string'), false)
  })

  it('EMAIL, validate email addresses', () => {
    assert.strictEqual(EMAIL.test('test5678@email.com'), true)
    assert.strictEqual(EMAIL.test('test5678test@email.com'), true)
    assert.strictEqual(EMAIL.test('test5678@email123.com'), true)
    assert.strictEqual(EMAIL.test('test5678@email123.io'), true)
    assert.strictEqual(EMAIL.test('test5678@email123.io123'), true)

    assert.strictEqual(NUMBER.test('abc'), false)
    assert.strictEqual(NUMBER.test('5678test@email.com'), false)
    assert.strictEqual(NUMBER.test('test@123email.com'), false)
    assert.strictEqual(NUMBER.test('test@123email.324'), false)
  })

  it('PATH, validate path, url', () => {
    assert.strictEqual(PATH.test('/'), true)
    assert.strictEqual(PATH.test('/path'), true)
    assert.strictEqual(PATH.test('path/'), true)
    assert.strictEqual(PATH.test('/path/test'), true)
    assert.strictEqual(PATH.test('//'), true)
    assert.strictEqual(PATH.test('/'), true)
    assert.strictEqual(PATH.test('a/b/c/d/e/f/g/c/d/f/k/d/'), true)
    assert.strictEqual(PATH.test('#'), true)
    assert.strictEqual(PATH.test('/3'), true)

    assert.strictEqual(PATH.test(''), true)
    assert.strictEqual(PATH.test('//abc'), true)
  })

  it('NAME, validate NAME', () => {
    assert.strictEqual(NAME.test('こんにちは'), true) // Japanese
    assert.strictEqual(NAME.test('你好'), true) // Chinese
    assert.strictEqual(NAME.test('Здравствуйте'), true) // Russian

    // Name with digits
    assert.strictEqual(NAME.test('こんにちは3'), false) // Japanese
    assert.strictEqual(NAME.test('你好4'), false) // Chinese
    assert.strictEqual(NAME.test('Здравствуйте4'), false) // Russian

    assert.strictEqual(NAME.test('*'), false) // special characters
    assert.strictEqual(NAME.test('😊'), false) // emoji
  })

  it('INPUT, validate input text', () => {
    // input with/without digits
    assert.strictEqual(INPUT.test('こんにちは'), true) // Japanese
    assert.strictEqual(INPUT.test('你好'), true) // Chinese
    assert.strictEqual(INPUT.test('Здравствуйте'), true) // Russian

    assert.strictEqual(INPUT.test('こんにちは3'), true) // Japanese
    assert.strictEqual(INPUT.test('你好4'), true) // Chinese
    assert.strictEqual(INPUT.test('Здравствуйте4'), true) // Russian

    assert.strictEqual(INPUT.test('*'), false) // special characters
    assert.strictEqual(INPUT.test('😊'), false) // emoji
  })

  it('NAME_WITH_DIGITS, validate name with digits', () => {
    assert.strictEqual(NAME_WITH_DIGITS.test('こんにちは3'), true) // Japanese
    assert.strictEqual(NAME_WITH_DIGITS.test('你好4'), true) // Chinese
    assert.strictEqual(NAME_WITH_DIGITS.test('Здравствуйте4'), true) // Russian

    // without digits
    assert.strictEqual(NAME_WITH_DIGITS.test('こんにちは'), true) // Japanese
    assert.strictEqual(NAME_WITH_DIGITS.test('你好'), true) // Chinese
    assert.strictEqual(NAME_WITH_DIGITS.test('Здравствуйте'), true) // Russian

    assert.strictEqual(NAME_WITH_DIGITS.test('*'), false) // special characters
    assert.strictEqual(NAME_WITH_DIGITS.test('😊'), false) // emoji
  })

  it('ADDRESS, validate address text', () => {
    assert.strictEqual(ADDRESS.test('123 Main Street, Springfield, IL 62701, USA'), true) // english
    assert.strictEqual(ADDRESS.test('東京都新宿区西新宿2丁目8-1'), true) // Japanese
    assert.strictEqual(ADDRESS.test('北京市朝阳区建国门外大街甲12'), true) // Chinese
    assert.strictEqual(ADDRESS.test('г. Москва, ул. Тверская, д. 15'), true) // Russian
    assert.strictEqual(ADDRESS.test('м. Київ, вул. Хрещатик, 22'), true) // Ukrainian

    // Simple addresses
    assert.strictEqual(ADDRESS.test('123 Main St.'), true)
    assert.strictEqual(ADDRESS.test('456 Elm Street; Apt #2'), true)
    assert.strictEqual(ADDRESS.test('789 Maple Ave, Unit 5'), true)
    assert.strictEqual(ADDRESS.test('321 Broadway St: Suite 100'), true)

    // punctuation in address
    assert.strictEqual(ADDRESS.test('15-20 First Ave.'), true)
    assert.strictEqual(ADDRESS.test('30/40 Oak Drive'), true)
    assert.strictEqual(ADDRESS.test('25:40 Second St.'), true)
    assert.strictEqual(ADDRESS.test('47:50 3rd Blvd; Apt 4B'), true)

    // Including special character
    assert.strictEqual(ADDRESS.test('Street Name & Co.'), true)
    assert.strictEqual(ADDRESS.test('First St. + Second St.'), true)
    assert.strictEqual(ADDRESS.test('Apt #123 & 456'), true)
    assert.strictEqual(ADDRESS.test('Cross St @ 78'), true)

    // Address with new line
    assert.strictEqual(ADDRESS.test('123 Main St\nApt 4'), true)
    assert.strictEqual(ADDRESS.test('456 Elm St\nSuite B'), true)

    // Complex address
    assert.strictEqual(ADDRESS.test('221B Baker Street, London'), true)
    assert.strictEqual(ADDRESS.test('1234 Example Rd, City, State 56789'), true)
    assert.strictEqual(ADDRESS.test('PO Box 1234'), true)
    assert.strictEqual(ADDRESS.test('456 High St. #10, New York, NY 10001'), true)
    assert.strictEqual(ADDRESS.test('456 Elm St@'), true) // special character

    // Leading/trailing spaces
    assert.strictEqual(ADDRESS.test(' 123 Main St '), true) // leading/trailing space
    assert.strictEqual(ADDRESS.test('#456 Elm St'), true) // leading character
    assert.strictEqual(ADDRESS.test('Unit 5; Apt #'), true) // leading character
    assert.strictEqual(ADDRESS.test('22 Main St? Apt'), true) // question mark
    assert.strictEqual(ADDRESS.test('\n'), true) // newline

    // Invalid characters
    assert.strictEqual(ADDRESS.test('123 Main St!'), false) // Exclamation mark
    assert.strictEqual(ADDRESS.test('789 Maple Ave#1*'), false) // asterisk

    assert.strictEqual(ADDRESS.test(''), false) // (empty)

    // // invalid characters
    assert.strictEqual(ADDRESS.test('!!!'), false)
    // assert.strictEqual(ADDRESS.test('@@@'), false)
    assert.strictEqual(ADDRESS.test('123*456'), false) // contains asterisk

    // // improper address format
    assert.strictEqual(ADDRESS.test('First St $ Apt 4'), false) // dollar sign

    assert.strictEqual(ADDRESS.test('*'), false) // special characters
    assert.strictEqual(ADDRESS.test('😊'), false) // emoji
  })

  it('PHONE_CODE, validate phone code', () => {
    assert.strictEqual(PHONE_CODE.test('+123'), true) // single plus sign
    assert.strictEqual(PHONE_CODE.test('++456'), true) // multiple plus sign
    assert.strictEqual(PHONE_CODE.test('789'), true) // no plus sign
    assert.strictEqual(PHONE_CODE.test('+1'), true) // plus with digit
    assert.strictEqual(PHONE_CODE.test('+123456'), true) // plus with multiple digit
    assert.strictEqual(PHONE_CODE.test('0'), true) // only digit
    assert.strictEqual(PHONE_CODE.test('+0'), true) // leading plus sign with zero

    assert.strictEqual(PHONE_CODE.test('+12a34'), false) // plus sign followed by non-digts
    assert.strictEqual(PHONE_CODE.test('a123'), false) // leading character
    assert.strictEqual(PHONE_CODE.test('++'), false) // double plus sign
    assert.strictEqual(PHONE_CODE.test(''), false) // (empty)
    assert.strictEqual(PHONE_CODE.test('+ 123'), false) // spaces around number
    assert.strictEqual(PHONE_CODE.test('+123abc'), false) // invalid characters mixed
    assert.strictEqual(PHONE_CODE.test('-123'), false) // negative sign
    assert.strictEqual(PHONE_CODE.test('*'), false) // special characters
    assert.strictEqual(PHONE_CODE.test('😊'), false) // emoji
  })

  it('IMAGE, validate image uri', () => {
    assert.strictEqual(IMAGE.test('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'), true) // image/png
    assert.strictEqual(IMAGE.test('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIu'), true) // image/jpeg
    assert.strictEqual(IMAGE.test('data:image/gif;base64,R0lGODlhEAAQAMIAAAAAAP///wAAACH5BAEAAAAALAAAAAAQABAAAAIhIhIhIhIhIhIhIhIhIh'), true) // image/gif
    assert.strictEqual(IMAGE.test('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci'), true) // image/svg
    assert.strictEqual(IMAGE.test('data:image/bmp;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci'), true) // image/bmp
    assert.strictEqual(IMAGE.test('data:image/xyz;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'), true) // allow all types of format

    assert.strictEqual(IMAGE.test('image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'), false) // Missing data:image/
    assert.strictEqual(IMAGE.test('data:image/png,iVBORw0KGgoAAAANSUhEUgAAAAUA'), false) // ;base64,
    assert.strictEqual(IMAGE.test('data:image/png;base64,iVBORw0KGgo@@@AAAAUA'), false) // incorrect base64
    assert.strictEqual(IMAGE.test('data:image/png;base64,'), false) // incorrect string, no base64
    assert.strictEqual(IMAGE.test('data:image/png;base64,abcde==!#%&'), false) // Missing base64
  })

  it('FILE, validate data uri', () => {
    assert.strictEqual(FILE.test('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'), true) // image/png
    assert.strictEqual(FILE.test('data:application/pdf;base64,JVBERi0xLjQKJcfs'), true) // image/pdf
    assert.strictEqual(FILE.test('data:video/mp4;base64,AAAAFGZ0eXBNUDANCk1vZGU'), true) // video/mp4
    assert.strictEqual(FILE.test('data:video/webm;base64,GkXFo3zqEKZxKbOQGh'), true) // video/webm
    assert.strictEqual(FILE.test('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci'), true) // image/svg
    assert.strictEqual(FILE.test('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgoJCAkL'), true) // image/jpeg
    assert.strictEqual(FILE.test('data:image/xyz;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'), true) // allow all types of format

    assert.strictEqual(FILE.test('data:image;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'), false) // Missing media type
    assert.strictEqual(FILE.test('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ=='), false) // Invalid media type
    assert.strictEqual(FILE.test('data:application/json;base64,{"key":"value"}'), false) // Invalid media type
    assert.strictEqual(FILE.test('data:video/mp4;base64,AAAAFGZ0eXBNUDANCk1vZGU...'), false) // Correct type but incomplete format
    assert.strictEqual(FILE.test('data:image/png;base64 iVBORw0KGgoAAAANSUhEUgAAAAUA'), false) // Missing the comma
    assert.strictEqual(FILE.test('data://image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'), false) // Incorrect syntax
    assert.strictEqual(FILE.test('data:image/png;base64,'), false) // No Base64 data
    assert.strictEqual(FILE.test('data:image/png;base64,abcde==!'), false) // Invalid characters
    assert.strictEqual(FILE.test('data:image/jpeg;base64,abc@123'), false) // Invalid characters in Base64
  })

  it('FILENAME, validate file name', () => {
    assert.strictEqual(FILENAME.test('valid-file.txt'), true)
    assert.strictEqual(FILENAME.test('another_valid_file123'), true)
    assert.strictEqual(FILENAME.test('file_with_spaces (and more).jpg'), true)
    assert.strictEqual(FILENAME.test('file-name_1234.pdf'), true)
    assert.strictEqual(FILENAME.test(' '), true) // Space should be valid
    assert.strictEqual(FILENAME.test('...'), true) // Dots should be valid
    assert.strictEqual(FILENAME.test('-_'), true) // Dash and underscore should be valid

    // Special chars
    assert.strictEqual(FILENAME.test('file@name_with_special&chars.txt'), false)
    assert.strictEqual(FILENAME.test('file.name;with,commas:and<less>than>symbols'), false)
    assert.strictEqual(FILENAME.test('file_with_special_chars&%'), false)

    assert.strictEqual(FILENAME.test('invalid/file.txt'), false) // Contains /
    assert.strictEqual(FILENAME.test('invalid\\file.txt'), false) // Contains \
    assert.strictEqual(FILENAME.test('invalid:file.txt'), false) // Contains :
    assert.strictEqual(FILENAME.test('invalid*file.txt'), false) // Contains *
    assert.strictEqual(FILENAME.test('invalid|file.txt'), false) // Contains |
    assert.strictEqual(FILENAME.test('invalid<file.txt'), false) // Contains <
    assert.strictEqual(FILENAME.test('invalid>file.txt'), false) // Contains >
    assert.strictEqual(FILENAME.test(''), false) // Empty string
    assert.strictEqual(FILENAME.test('invalid?file.txt'), false) // Contains ?
  })

  it('ADMIN_PASSWORD, validate password', () => {
    // valid admin password
    assert.strictEqual(ADMIN_PASSWORD.test('A1!strongpass'), true)
    assert.strictEqual(ADMIN_PASSWORD.test('Secure#Password1'), true)
    assert.strictEqual(ADMIN_PASSWORD.test('Another@Valid3Password'), true)
    assert.strictEqual(ADMIN_PASSWORD.test('Passw0rd!'), true)
    assert.strictEqual(ADMIN_PASSWORD.test('1234Abc!@#$'), true)
    assert.strictEqual(ADMIN_PASSWORD.test('Valid1Password&'), true)
    assert.strictEqual(ADMIN_PASSWORD.test('MyP@ssw0rd!'), true)
    assert.strictEqual(ADMIN_PASSWORD.test('Uppercase1!'), true) // No lowercase letters

    assert.strictEqual(ADMIN_PASSWORD.test('short1!'), false) // Too short
    assert.strictEqual(ADMIN_PASSWORD.test('nospecialchars'), false) // No special characters
    assert.strictEqual(ADMIN_PASSWORD.test('NOLOWERCASE1!'), false) // No lowercase letters
    assert.strictEqual(ADMIN_PASSWORD.test('nouppercase1!'), false) // No uppercase letters
    assert.strictEqual(ADMIN_PASSWORD.test('NoDigits!'), false) // No digits
    assert.strictEqual(ADMIN_PASSWORD.test('NoSpecialChars1'), false) // No special characters
    assert.strictEqual(ADMIN_PASSWORD.test('lowercase1!'), false) // No uppercase letters
    assert.strictEqual(ADMIN_PASSWORD.test('12345678!'), false) // No letters
    assert.strictEqual(ADMIN_PASSWORD.test('Password!'), false) // No digits
  })
})
