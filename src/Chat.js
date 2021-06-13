import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Message,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import "./Chat.css";

export const Chat = ({ message }) => {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />

        <div className="chat-headerInfo">
          <h3>Room name</h3>
          <p>Last seen at..</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        <p className="chat-message">
          <span className="chat-name">Max</span>
          This is a Message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat-message chat-receiver">
          <span className="chat-name">Max</span>
          This is a Message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon />
        <form>
          <input
            //value={input}
            //onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button /*onClick={sendMessage}*/ type="submit">
            Send
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};
