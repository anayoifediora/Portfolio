const regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const regexName = /^[a-zA-ZÀ-ÿ\s]{1,50}$/;

export const validateEmail = (email) => regexEmail.test(email);

export const validateName = (name) => regexName.test(name);

