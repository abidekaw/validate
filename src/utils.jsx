export function validateEmail(email) {
  const emailValid = /\S+@\S+\.\S+/;
  return validateString(email) && emailValid.test(email);
}

export function validatePassword(password) {
  return validateString(password) && !/\s/.test(password)
}

export function validateString(string) {
  const stringValid = string.toString().trim();

  return (
    stringValid.length >= 8 && stringValid.length <= 255 && stringValid !== ""
  );
}

export function validateFullName(fullName) {
  // fullname minimal 2 kata ?
  return validateString(fullName) && fullName.split(' ').length >= 2
}
