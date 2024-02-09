import React from "react";
import DOMPurify from "dompurify";

export default class validator {
  minLength = 8;
  maxLength = 500;

  validateString(string) {
    return string.toString().trim() !== "";
  }

  validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return this.validateString(email) && emailRegex.test(email);
  }

  validatePassword(password) {
    const passRegex = /\s/;
    return (
      this.validateString(password) &&
      !passRegex.test(password) &&
      password.length >= this.minLength
    );
  }

  validateFullName(fullName) {
    return this.validateString(fullName) && fullName.split(" ").length >= 2;
  }

  validatePhoneNumber(phoneNumber) {
    const numberRegex = /^(\+62|0)(\d{10,12})$/;
    return numberRegex.test(phoneNumber);
  }

  validateAge(age) {
    const ageRegex = /[0-9]$/;
    return age.length <= 2 && ageRegex.test(age);
  }

  validateTitleDesc(value) {
    return (
      this.validateString(value) &&
      value.length >= this.minLength &&
      value.length <= this.maxLength
    );
  }

  validateNoXss(input) {
    const sanitizedInput = DOMPurify.sanitize(input);
    return sanitizedInput || "";
  }

  validateDate(value) {
    const date = new Date(value);
    return !isNaN(date);
  }

  validateHtml(value) {}
}
