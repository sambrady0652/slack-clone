import { baseUrl } from '../config';

//ACTION TYPES AND LOCAL STORAGE ASSIGNMENTS
const REMOVE_TOKEN = 'stack/authentication/REMOVE_TOKEN';
const SET_USER = 'stack/authentication/SET_USER';
const STACK_TOKEN = 'STACK_TOKEN';
const STACK_USER_ID = 'STACK_USER_ID';

//SIGN IN 
export const signIn = (email, password) => async dispatch => {
  try {
    //Retrieve Information from Server
    const response = await fetch(`${baseUrl}/api/signin`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw response;
    }
    //Place token in Local Storage, update Redux State
    const { token, user } = await response.json();
    localStorage.setItem(STACK_TOKEN, token);
    localStorage.setItem(STACK_USER_ID, user.id);
    dispatch(setUser(token, user));
  }
  catch (err) {
    console.error(err);
  }
}

//SIGN UP 
export const signUp = (firstName, lastName, email, password, title, profPic) => async dispatch => {
  try {
    const formData = new FormData();
    formData.append("firstName", firstName)
    formData.append("lastName", lastName)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("title", title)
    if (profPic !== "") {
      formData.append("profPic", profPic, `${firstName}-profpic`)
    }

    const response = await fetch(`${baseUrl}/api/signup`, {
      method: 'post',
      body: formData
    });
    if (!response.ok) {
      throw response
    }
    //Place token in Local Storage, update Redux State
    const { token, user } = await response.json();
    localStorage.setItem(STACK_TOKEN, token);
    localStorage.setItem(STACK_USER_ID, user.id);
    dispatch(setUser(token, user));
  }
  catch (err) {
    console.error(err);
  }
}

//SIGN OUT
export const signOut = () => async (dispatch) => {
  localStorage.removeItem(STACK_TOKEN);
  localStorage.removeItem(STACK_USER_ID);
  dispatch(removeToken())
}

//LOAD USER INFO
export const loadUser = () => async dispatch => {
  const token = localStorage.getItem(STACK_TOKEN);
  const userId = localStorage.getItem(STACK_USER_ID);
  try {
    const res = await fetch(`${baseUrl}/api/users/${userId}`);
    if (!res.ok) {
      throw res
    }
    const user = await res.json();
    dispatch(setUser(token, user))
  }
  catch (e) {
    console.error(e);
  }
};

//ACTION CREATOR FUNCTIONS

export const setUser = (token, user) => ({
  type: SET_USER,
  user,
  token
});

export const removeToken = () => ({
  type: REMOVE_TOKEN
})


export default function reducer(state = { needSignIn: true }, action) {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case REMOVE_TOKEN: {
      delete newState.token;
      return {
        ...newState,
        needSignIn: true
      };
    }
    case SET_USER: {
      return {
        token: action.token,
        needSignIn: false,
        userId: action.user.id,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
        imageUrl: action.user.imageUrl,
        title: action.user.title
      };
    }
    default: return state;
  }
}
