import { baseUrl } from '../config';
import openSocket from 'socket.io-client';

export const getMessages = () => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/:channelId`);
    if (!res.ok) {
      throw res
    }
    const { users, messages } = res.json();
  }
  catch (e) {

  }
}
// messages: {
//   1: {
//     userId: 1,
//       channelId: 1,
//         content: "",
//   }
// }