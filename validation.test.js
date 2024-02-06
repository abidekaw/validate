const {
  validateString,
  validateEmail,
  validatePassword,
  validateFullName,
  validatePhoneNumber,
} = require("./src/utils");

// ----- string test -----
// ===== rules =====
//    ==> minimal 8 karakter
//    ==> maksimal 255 karakter
//    ==> tidak boleh kosong atau spasi kosong
test("String validation - Valid string", () => {
  const validString = "abcd efgh";
  expect(validateString(validString)).toBe(true);
});

test("String validation - Invalid string", () => {
  const invalidString = "abcd";
  expect(validateString(invalidString)).toBe(false);
});

test("String validation - Invalid string", () => {
  const invalidString = "";
  expect(validateString(invalidString)).toBe(false);
});

test("String validation - Invalid string", () => {
  const invalidString = [];
  expect(validateString(invalidString)).toBe(false);
});

// ----- email test -----
// ===== rules =====
//    ==> ditandai dengan `__@__.__`
test("Email validation - Valid email", () => {
  const validEmail = "abid@mail.co";
  expect(validateEmail(validEmail)).toBe(true);
});

test("Email validation - Invalid email", () => {
  const invalidEmail = "abid.mail";
  expect(validateEmail(invalidEmail)).toBe(false);
});

test("Email validation - Invalid email", () => {
  const invalidEmail = "abid@mail";
  expect(validateEmail(invalidEmail)).toBe(false);
});

// ------ full name test ------
// ===== rules =====
//    ==> minimal 2 kata
test("Fullname validation - Valid fullname", () => {
  const validFullname = "abid eka w";
  expect(validateFullName(validFullname)).toBe(true);
});

test("Fullname validation - Invalid fullname", () => {
  const invalidFullname = "abid";
  expect(validateFullName(invalidFullname)).toBe(false);
});

// ----- password test -----
// ===== rules =====
//    ==> tidak mengandung spasi
test("Password validation - Valid password", () => {
  const validPassword = "abidekaw";
  expect(validatePassword(validPassword)).toBe(true);
});

test("Password validation - Invalid password", () => {
  const invalidPassword = "abid eka w";
  expect(validatePassword(invalidPassword)).toBe(false);
});

// ----- phone number test -----
// ===== rules =====
//    ==> dimulai dengan +62 || 0, minimal 10, maksimal 12
test("Phone Number validation - Valid phone number", () => {
  const validNumberPhone = "+628995598448";
  expect(validatePhoneNumber(validNumberPhone)).toBe(true);
});

test("Phone Number validation - Invalid phone number", () => {
  const invalidNumberPhpne = "628995598448";
  expect(validatePhoneNumber(invalidNumberPhpne)).toBe(false);
});
