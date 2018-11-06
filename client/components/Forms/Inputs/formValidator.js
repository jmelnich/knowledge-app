export const isValidEmail = (email) => {
    const regExpEmail = /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.+]+\.[a-zA-Z0-9]+$/;
    return regExpEmail.test(email) ? true : 'Please, input valid email';
};

export const isComplexPassword = (password) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])\w{6,}$/;
    return pattern.test(password) ? true :
        'The password is too weak. Should include minimum 1 digit, 1 letter and be at least 6' +
        ' characters long';
};

export const isPasswordMatch = (pass1, pass2) => {
  return pass1 === pass2 ? true : 'Passwords do not match';
};

export const isFilled = (text) => {
    return text.trim() ? true : 'This field cannot be empty';
};
