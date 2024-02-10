import React from "react";
import DOMPurify from "isomorphic-dompurify";

export default class Validator {
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

  validateHtml(value) {
    const validTags = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rb",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "slot",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
    ];

    const doc = new DOMParser().parseFromString(value, "text/html");
    const body = doc.body;

    if (!body || !body.children || body.children.length === 0) {
      return false;
    }

    for (let i = 0; i < body.children.length; i++) {
      let child = body.children[i];
      
      if (!validTags.includes(child.tagName.toLowerCase())) {
        return false;
      }
      return true;
    }
  }
}