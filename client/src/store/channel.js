import { baseUrl } from '../config'

const LOAD_CHANNEL = "stack/store/LOAD_CHANNEL"

export const getChannel = (channelId) => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/api/channels/${channelId}`);
    if (!res.ok) {
      throw res
    }
    const { channel } = await res.json();
    dispatch(loadChannel(channel));
  }
  catch (e) {
    console.error(e);
  }
}

//ACTION CREATORS

export const loadChannel = (channel) => {
  // const { id } = channel
  const action = {
    type: LOAD_CHANNEL,
    channel
  }
  return action;

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

//REDUCER 

export default function reducer(state = {}, action) {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD_CHANNEL:
      //TODO: Fix State Shape
      return {
        ...newState,
        id: action.channel.id,
        name: action.channel.name,
        topic: action.channel.topic,
        users: action.channel.Users,
        messages: action.channel.Messages
      }
    default: return state;
  }
}
