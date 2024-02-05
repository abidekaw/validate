const { validateString, validateEmail } = require("./src/utils");

test("String validation - Valid string", () => {
  const validString = "abcd efgh";
  expect(validateString(validString)).toBe(true);
});

test("String validation - Invalid string", () => {
  const validString = "abcd"; // :8 min char :255 max char
  expect(validateString(validString)).toBe(false);
});

test("String validation - Invalid string", () => {
  const invalidString = "";
  expect(validateString(invalidString)).toBe(false);
});

test("String validation - Invalid string", () => {
  const invalidString = []; // ({}, 123)
  expect(validateString(invalidString)).toBe(false);
});

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

test("Email validation - Invalid email", () => {
  const invalidEmail = "";
  expect(validateEmail(invalidEmail)).toBe(false);
});
