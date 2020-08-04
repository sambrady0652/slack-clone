

export default function reducer(state = {}, action) {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  switch (action.type) {

    default: return state;
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