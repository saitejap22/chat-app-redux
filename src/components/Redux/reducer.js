const initialState = {
  msg: [],
};

export const sendReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      console.log(action.payload);
      return { ...state, msg: [...state.msg, action.payload] };
    default:
      return state;
  }
};
export default sendReducer;
