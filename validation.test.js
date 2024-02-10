import React from "react";
import validator, { validateNoXss } from "./src/utils";
const _ = new validator();

// ----- string test -----
// ===== rules =====
//    ==> tidak boleh kosong
test("String validation - Valid string", () => {
  const validString = "abcd efgh";
  expect(_.validateString(validString)).toBe(true);
});

test("String validation - Invalid string", () => {
  const invalidString = "";
  expect(_.validateString(invalidString)).toBe(false);
});

test("String validation - Invalid string", () => {
  const invalidString = [];
  expect(_.validateString(invalidString)).toBe(false);
});

// ----- email test -----
// ===== rules =====
//    ==> ditandai dengan `__@__.__`
test("Email validation - Valid email", () => {
  const validEmail = "abid@mail.co";
  expect(_.validateEmail(validEmail)).toBe(true);
});

test("Email validation - Invalid email", () => {
  const invalidEmail = "abid.mail";
  expect(_.validateEmail(invalidEmail)).toBe(false);
});

test("Email validation - Invalid email", () => {
  const invalidEmail = "abid@mail";
  expect(_.validateEmail(invalidEmail)).toBe(false);
});

// ------ full name test ------
// ===== rules =====
//    ==> minimal 2 kata
test("Fullname validation - Valid fullname", () => {
  const validFullname = "abid eka w";
  expect(_.validateFullName(validFullname)).toBe(true);
});

test("Fullname validation - Invalid fullname", () => {
  const invalidFullname = "abid";
  expect(_.validateFullName(invalidFullname)).toBe(false);
});

// ----- password test -----
// ===== rules =====
//    ==> tidak mengandung spasi
test("Password validation - Valid password", () => {
  const validPassword = "abidekaw";
  expect(_.validatePassword(validPassword)).toBe(true);
});

test("Password validation - Invalid password", () => {
  const invalidPassword = "abid eka w";
  expect(_.validatePassword(invalidPassword)).toBe(false);
});

// ----- phone number test -----
// ===== rules =====
//    ==> dimulai dengan +62 || 0, minimal 10, maksimal 12
test("Phone Number validation - Valid phone number", () => {
  const validNumberPhone = "+628995598448";
  expect(_.validatePhoneNumber(validNumberPhone)).toBe(true);
});

test("Phone Number validation - Invalid phone number", () => {
  const invalidNumberPhone = "628995598448";
  expect(_.validatePhoneNumber(invalidNumberPhone)).toBe(false);
});

// ----- age test -----
// ===== rules =====
//    ==> hanya boleh angka dan panjang tidak boleh lebih dari 2
test("Age validation - Valid age", () => {
  const validAge = "17";
  expect(_.validateAge(validAge)).toBe(true);
});

test("Age validation - Invalid age", () => {
  const invalidAge = "123";
  expect(_.validateAge(invalidAge)).toBe(false);
});

// ----- title & description test -----
// ===== rules =====
//    ==> minimal 8 karakter, maksimal 500 karakter
test("Title & Description validation - Valid Title & Description", () => {
  const validTitleDesc = "contoh title";
  expect(_.validateTitleDesc(validTitleDesc)).toBe(true);
});

test("Title & Description validation - Invalid Title & Description", () => {
  const invalidTitleDesc = "title";
  expect(_.validateTitleDesc(invalidTitleDesc)).toBe(false);
});

// ----- No Xss test -----
// ===== rules =====
//    ==> inject script asing
test("No Xss validation", () => {
  const inject = "<script>alert('hai')</script>";
  expect(_.validateNoXss(inject)).toBe("");
});

// ----- Date test -----
// ===== rules =====
//    ==> format tanggal YYYY-DD-MM || MM-DD-YYYY
test("DATE validation", () => {
  const date = "20-20-2000";
  expect(_.validateDate(date)).toBe(false);
});

// ----- HTML valid test -----
// ===== rules =====
//    ==> tag html harus valid
test("HTML Tag validation", () => {
  const tag = "<p>ini paraghraph</p>";
  expect(_.validateHtml(tag)).toBe(true);
});
