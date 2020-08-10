import { baseUrl } from '../config';

const SET_MESSAGE = "/store/message/SET_MESSAGE"

export const writeMessage = (message, userId) => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/api/users/${userId}`)
    if (!res.ok) {
      throw res
    }
    const user = await res.json();
    dispatch(setMessage(message, user))
  }
  catch (e) {
    console.error(e)
  }
}

export const setMessage = (message, user) => ({
  type: SET_MESSAGE,
  message,
  user
})


export default function reducer(state = [], action) {
  Object.freeze(state);
  const newState = Object.assign([], state);

  switch (action.type) {
    case SET_MESSAGE: {
      return [
        ...newState,
        {
          ...action.message,
          User: action.user
        }
      ]

    }
    default: return state;
  }
}