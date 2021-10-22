import React from "react";
import * as s from "./StyleUserItem";

interface PropsItem {
   isOnline: boolean;
   name: string;
   srcImg: string;
}

const UserItem: React.FC<PropsItem> = ({ name, isOnline }) => {
   return (
      <s.UserItem>
         <s.Left>
            <s.Image src="https://appstack.bootlab.io/img/avatars/avatar-3.jpg" />
            <s.Info>
               <s.Name>{name}</s.Name>
               <s.Status isOnline={isOnline}>
                  {isOnline ? "Online" : "Offline"}
               </s.Status>
            </s.Info>
         </s.Left>
         <s.Noti>
            <span>5</span>
         </s.Noti>
      </s.UserItem>
   );
};

export default UserItem;
