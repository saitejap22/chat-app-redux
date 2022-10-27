export const sendMessage = (payload) => {
  return { type: "SEND_MESSAGE", payload };
};
export const sendMessageToUser = (payload, l) => {
  return async (dispatch, getState) => {
    dispatch(
      sendMessage({
        name: "Sai Teja",
        text: payload.senderMsg,
        currentUser: payload.user,
        timeStamp: payload.timeStamp,
      })
    );
    const response = await fetch(
      "https://fipolo-webhook-test.herokuapp.com/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: payload.senderMsg,
        }),
      }
    );
    const data = await response.json();
    dispatch(
      sendMessage({
        name: payload.user,
        text: data.reply,
        currentUser: payload.user,
        timeStamp: payload.timeStamp,
      })
    );
  };
};
