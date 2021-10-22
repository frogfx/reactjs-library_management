import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { User } from "../../interface/index";
import io from "socket.io-client";
import { Socket } from "socket.io-client";

export const logIn = (user: User) => {
   const socket = io("http://localhost:8000", { transports: ["websocket"] });

   socket.emit("login", { id: user.id });

   return (dispatch: Dispatch<Action>) => {
      dispatch({ type: ActionType.LOGIN, payload: user });
      dispatch({ type: ActionType.CONNECT_SOCKET, payload: socket });
   };
};

export const logOut = (socket: Socket | null | undefined) => {
   if (socket) {
      socket.disconnect();
   }
   localStorage.removeItem("accessToken");
   localStorage.removeItem("refreshToken");
   return (dispatch: Dispatch<Action>) => {
      dispatch({ type: ActionType.LOGOUT });
   };
};
