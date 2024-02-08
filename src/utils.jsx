import React from "react";

const minLength = 8;
const maxLength = 500;

export function validateString(string) {
  return string.toString().trim() !== "";
}

export function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return validateString(email) && emailRegex.test(email);
}

export function validatePassword(password) {
  const passRegex = /\s/;
  return (
    validateString(password) &&
    !passRegex.test(password) &&
    password.length >= minLength
  );
}

export function validateFullName(fullName) {
  return validateString(fullName) && fullName.split(" ").length >= 2;
}

export function validatePhoneNumber(phoneNumber) {
  const numberRegex = /^(\+62|0)(\d{10,12})$/;
  return numberRegex.test(phoneNumber);
}

export function validateAge(age) {
  const ageRegex = /[0-9]$/;
  return age.length <= 2 && ageRegex.test(age);
}

export function validateTitleDesc(value) {
  return (
    validateString(value) &&
    value.length >= minLength &&
    value.length <= maxLength
  );
}

export function validateNoXss(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.body.textContent || "";
}

export function validateDate(date) {}

export function validateHtml(val) {}
