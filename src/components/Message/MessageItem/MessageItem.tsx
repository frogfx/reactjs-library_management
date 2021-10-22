import React from "react";
import * as s from "./StyleMessageItem";

interface PropsItem {
   isMyMessage?: boolean;
   isCurrentUser?: boolean;
}

const MessageItem: React.FC<PropsItem> = ({ isMyMessage, isCurrentUser }) => {
   return (
      <s.MessageItem isMyMessage={isMyMessage} isCurrentUser={isCurrentUser}>
         <s.Image src="https://appstack.bootlab.io/img/avatars/avatar-3.jpg" />
         <s.Message>
            <s.Content>
               Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat
               animal commodo.
            </s.Content>
         </s.Message>
      </s.MessageItem>
   );
};

export default MessageItem;
