import { baseUrl } from '../config'

const LOAD_CHANNEL = "LOAD_CHANNEL"

export default function reducer(state = {}, action) {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  switch (action.type) {

    default: return state;
  }
}

export const getChannel = () => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/api/:channelId`);
    if (!res.ok) {
      throw res
    }
    const { channel } = res.json();
    dispatch(loadChannel(channel));
  }
  catch (e) {
    console.error(e);
  }
}

//ACTION CREATORS

export const loadChannel = (channel) => {
  return {
    type: LOAD_CHANNEL,
    channel
  }
}

// channel: {
//   1: {
//     id: 1,
//     name: "",
//     purpose: "",
//     messages: [//array of message id's]
//     users: [//array of userId's]
//   },

//   2: {

//   }
// }