import { baseUrl } from '../config'

const LOAD_CHANNEL = "stack/store/LOAD_CHANNEL";
const JOIN_CHANNEL = 'stack/authentication/JOIN_CHANNEL';
const STACK_USER_ID = 'STACK_USER_ID';

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

export const joinChannel = (channelId) => async dispatch => {
  const userId = localStorage.getItem(STACK_USER_ID);
  try {
    const res = await fetch(`${baseUrl}/api/users/${userId}/channels`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, channelId })
    });
    if (!res.ok) {
      throw res
    }
    const user = await res.json();
    console.log(user)
    dispatch(setJoined(user))
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

export const setJoined = (user) => ({
  type: JOIN_CHANNEL,
  user
})

const initialState = {
  id: "",
  name: "",
  topic: "",
  users: [],
  oldMessages: []
}

//REDUCER 

export default function reducer(state = initialState, action) {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD_CHANNEL:
      return {
        ...newState,
        id: action.channel.id,
        name: action.channel.name,
        topic: action.channel.topic,
        users: action.users,
        oldMessages: action.channel.Messages,
      }
    case JOIN_CHANNEL: {
      return {
        ...newState,
        users: [...newState.users, action.user]
      }
    }
    default: return state;
  }
}
