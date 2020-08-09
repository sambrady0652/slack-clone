import { baseUrl } from '../config';

const SET_MESSAGE = "/store/message/SET_MESSAGE"
const SET_USER_FOR_MESSAGE = "/store/message/SET_USER_FOR_MESSAGE"

export const writeMessage = (newMessage, channelId, userId) => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/api/messages`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newMessage, channelId, userId })
    })
    if (!res.ok) {
      throw res
    }

    const message = await res.json();
    dispatch(setMessage(message))
  }
  catch (e) {
    console.error(e)
  }
}

//WORK IN PROGRESSSSS
export const getUser = (userId, message) => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/api/users/${userId}`);
    if (!res.ok) {
      throw res
    }
    const user = await res.json();
    setUserForMessage(user, message)
    return user;
  }
  catch (e) {
    console.error(e);
  }
};

export const setMessage = message => ({
  type: SET_MESSAGE,
  message
})

export const setUserForMessage = (user, message) => ({
  type: SET_USER_FOR_MESSAGE,
  user,
  message
})

export default function reducer(state = [], action) {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_MESSAGE: {
      return {
        ...newState,
        message: action.message
      }
    }
    case SET_USER_FOR_MESSAGE: {
      return {
        ...newState,
        message: action.message,
        user: action.user
      }
    }
    default: return state;
  }
}