import { baseUrl } from '../config';
import openSocket from 'socket.io-client';

const SET_MESSAGE = "/store/message/SET_MESSAGE"

// messages: {
//   1: {
//     userId: 1,
//       channelId: 1,
//         content: "",
//   }
// }

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

const setMessage = message => ({
  type: SET_MESSAGE,
  message
})

export default function reducer(state = {}, action) {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_MESSAGE: {
      return {
        ...newState,
        message: action.message
      }
    }
    default: return state;
  }
}