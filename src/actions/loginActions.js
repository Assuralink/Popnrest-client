import {
  LOGIN,
  LOGOUT,
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_EMAIL,
  UPDATE_PHONE_NUMBER,
} from "./action-types/login-actions";

export const login = (user, token) => {
  return {
    type: LOGIN,
    user: user,
    token: token,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
export const update_firstname = (firstname) => {
  return {
    type: UPDATE_FIRSTNAME,
    firstname: firstname,
  };
};
export const update_lastname = (lastname) => {
  return {
    type: UPDATE_LASTNAME,
    lastname: lastname,
  };
};
export const update_phoneNumber = (phoneNumber) => {
  return {
    type: UPDATE_PHONE_NUMBER,
    phoneNumber: phoneNumber,
  };
};
export const update_email = (email) => {
  return {
    type: UPDATE_EMAIL,
    email: email,
  };
};
