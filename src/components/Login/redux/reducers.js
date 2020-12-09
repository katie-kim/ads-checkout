import { USER_LOGGED_IN } from "./actions";

const initialState = {
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type){
  case USER_LOGGED_IN:
    return {
      ...state,
      token: action.token,
    };
  default:
    return state;
  }
};