import { Component } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { BsFillChatFill } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import { GoSmiley } from "react-icons/go";
import { sendMessageToUser } from "../Redux/action";
import "./index.css";
import { connect } from "react-redux";

class ChatApp extends Component {
  state = {
    senderMsg: "",
    user: "Rahul",
    timeStamp: new Date().toLocaleTimeString(),
  };

  handleSendMsg = (e) => {
    this.setState({ senderMsg: e.target.value });
  };

  onSendClick = () => {
    this.props.sendMessageToUser({
      senderMsg: this.state.senderMsg,
      user: this.state.user,
      timeStamp: new Date().toLocaleTimeString(),
    });
    this.setState({ senderMsg: "" });
  };

  handleAvatar1 = () => {
    this.setState({ user: "Rahul" });
  };

  handleAvatar2 = () => {
    this.setState({ user: "Vipin" });
  };

  render() {
    console.log(this.props);

    let reply = this.props.state.sendReducer.msg;
    return (
      <>
        <div className="main-div">
          <div className="inner-div">
            <div className="left-div">
              <h3 className="head-we">
                <BsFillChatFill size="22" style={{ marginRight: "10px" }} /> We
                Chat
              </h3>
              <div className="user-icon">
                <button className="avatar" onClick={this.handleAvatar1}>
                  <IoPersonCircle
                    style={{ marginRight: "10px" }}
                    color="#075e54"
                    size="30"
                  />
                  Rahul
                </button>
                <button className="avatar" onClick={this.handleAvatar2}>
                  <IoPersonCircle
                    style={{ marginRight: "10px" }}
                    color="#075e54"
                    size="30"
                  />
                  Vipin
                </button>
              </div>
            </div>
            <div className="right-div">
              <p className="reply-date">Oct 27 2022</p>

              {this.state.user === "Rahul" ? (
                <ul className="reply-container">
                  {reply
                    .filter((i) => i.currentUser === "Rahul")
                    .map((el, ind) => {
                      return (
                        <li key={ind} className="reply-msg">
                          {el.name} : {el.text}
                          <p className="reply-time">{el.timeStamp}</p>
                        </li>
                      );
                    })}
                </ul>
              ) : null}

              {this.state.user === "Vipin" ? (
                <ul className="reply-container">
                  {reply
                    .filter((i) => i.currentUser === "Vipin")
                    .map((el, ind) => {
                      return (
                        <li key={ind} className="reply-msg">
                          {el.name} : {el.text}
                          <p className="reply-time">{el.timeStamp}</p>
                        </li>
                      );
                    })}
                </ul>
              ) : null}

              <div className="fixed-msg">
                <GoSmiley
                  color="#323f4b"
                  size={30}
                  style={{ margin: "10px" }}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Message"
                  onChange={this.handleSendMsg}
                />
                <button className="send-btn" onClick={() => this.onSendClick()}>
                  <BiSend color="#323f4b" size={30} style={{ margin: "5px" }} />
                </button>
              </div>
            </div>
          </div>
          <h3 className="footer-head">WE CHAT</h3>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {
  sendMessageToUser: sendMessageToUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
