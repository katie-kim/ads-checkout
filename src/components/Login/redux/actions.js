export const USER_LOGGED_IN = 'USER_LOGGED_IN';

export const userLogin = (token) => ({
  type: USER_LOGGED_IN,
  token,
});
