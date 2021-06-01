import {
  LOGIN,
  LOGOUT,
  UPDATE_EMAIL,
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_PHONE_NUMBER,
} from "../actions/action-types/login-actions";

const initState = {
  uid: null,
  firstname: "",
  lastname: "",
  phoneNumber: "",
  email: "",
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("uid", action.user.uid);
      localStorage.setItem("token", action.token);
      console.log(">> Login reducer");
      console.log(action);
      return {
        ...state,
        uid: action.user.uid,
        firstname: action.user.firstname,
        lastname: action.user.lastname,
        phoneNumber: action.user.phone_number,
        email: action.user.email,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        uid: null,
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
      };
    case UPDATE_FIRSTNAME:
      localStorage.setItem("firstname", action.firstname);
      return {
        ...state,
        firstname: action.firstname,
      };
    case UPDATE_LASTNAME:
      localStorage.setItem("lastname", action.lastname);
      return {
        ...state,
        lastname: action.lastname,
      };
    case UPDATE_EMAIL:
      localStorage.setItem("email", action.email);
      return {
        ...state,
        email: action.email,
      };
    case UPDATE_PHONE_NUMBER:
      localStorage.setItem("phoneNumber", action.phoneNumber);
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    default:
      return state;
  }
};

export default loginReducer;
