import React, { useEffect, useState } from "react";
import UserItem from "../UserItem/UserItem";
import * as s from "./StyleUserList";
import { Staff } from "../../../interface/index";
import { State } from "../../../state/reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";

interface PropsUserList {
   users?: Staff[];
}

const UserList: React.FC<PropsUserList> = ({ users }) => {
   const currentUser = useSelector((state: State) => state.auth.user);
   const socket = useSelector((state: State) => state.socket.socket);
   const [currentUsers, setCurrentUsers] = useState<String[]>([]);

   useEffect(() => {
      socket?.emit("getOnline");

      socket?.on("sendOnline", ({ onLineUsers }) => {
         setCurrentUsers([...onLineUsers]);
      });
   }, [socket]);

   return (
      <s.UserList>
         {users?.map((user) => {
            if (user.id !== currentUser?.id)
               return (
                  <UserItem
                     name={user.name}
                     isOnline={currentUsers.includes(user.id)}
                     srcImg={`${process.env.REACT_APP_BE}${user.image}`}
                  />
               );
         })}
      </s.UserList>
   );
};

export default UserList;
