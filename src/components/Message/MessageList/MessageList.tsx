import React from "react";
import MessageItem from "../MessageItem/MessageItem";
import * as s from "./StyleMessageList";

const MessageList: React.FC = () => {
   return (
      <s.MessageList>
         <MessageItem />
         <MessageItem isCurrentUser />
         <MessageItem isMyMessage />
         <MessageItem />
         <MessageItem isCurrentUser />
         <MessageItem isMyMessage />
         <MessageItem />
         <MessageItem isCurrentUser />
         <MessageItem isMyMessage />
      </s.MessageList>
   );
};

export default MessageList;
