import { baseUrl } from '../config'

const LOAD_CHANNEL = "stack/store/LOAD_CHANNEL"

export const getChannel = (channelId) => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/api/channels/${channelId}`);
    if (!res.ok) {
      throw res
    }
    const { channel, users } = await res.json();
    dispatch(loadChannel(channel, users));
  }
  catch (e) {
    console.error(e);
  }
}

//ACTION CREATORS

export const loadChannel = (channel, users) => {
  // const { id } = channel
  const action = {
    type: LOAD_CHANNEL,
    channel,
    users
  }
  return action;

}

const initialState = {
  id: "",
  name: "",
  topic: "",
  users: [],
  messages: []
}

//REDUCER 

export default function reducer(state = initialState, action) {
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
        users: action.users,
        messages: action.channel.Messages,
      }
    default: return state;
  }
}
