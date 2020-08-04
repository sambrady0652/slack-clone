import { baseUrl } from '../config';

//ACTION TYPES AND LOCAL STORAGE ASSIGNMENTS
const SET_TOKEN = 'stack/authentication/SET_TOKEN';
const REMOVE_TOKEN = 'stack/authentication/REMOVE_TOKEN';
const STACK_TOKEN = 'STACK_TOKEN';

//SIGN IN 
export const signIn = (email, password) => async dispatch => {
  try {
    //Retrieve Information from Server
    const response = await fetch(`${baseUrl}/auth/signin`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw response;
    }
    //Place token in Local Storage, update Redux State
    const { token } = await response.json();
    localStorage.setItem(STACK_TOKEN, token);
    dispatch(setToken(token));
  }
  catch (err) {
    console.error(err);
  }
}

//SIGN UP 
export const signUp = (firstName, lastName, email, password, title) => async dispatch => {
  try {
    //Retrieve Information from Server
    const response = await fetch(`${baseUrl}/auth/signup`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password, title }),
    });
    if (!response.ok) {
      throw response
    }
    //Place token in Local Storage, update Redux State
    const { token } = await response.json();
    localStorage.setItem(STACK_TOKEN, token);
    dispatch(setToken(token));
  }
  catch (err) {

  }
}

//SIGN OUT
export const signOut = () => async (dispatch) => {
  localStorage.removeItem(STACK_TOKEN)
  dispatch(removeToken())
}

//ACTION CREATOR FUNCTIONS
export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN
})

export const loadToken = () => async dispatch => {
  const token = localStorage.getItem(STACK_TOKEN);
  if (token) {
    dispatch(setToken(token))
  }
};

export default function reducer(state = { needSignIn: true }, action) {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...newState,
        token: action.token,
        needSignIn: false
      };
    }
    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      return {
        ...newState,
        needSignIn: true
      };
    }

    default: return state;
  }
}
