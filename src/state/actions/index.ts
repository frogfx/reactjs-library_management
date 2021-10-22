import { Socket } from "socket.io-client";
import { User } from "../../interface/index";
import { ActionType } from "../action-types";

interface Login {
   type: ActionType.LOGIN;
   payload: User;
}

interface LogOut {
   type: ActionType.LOGOUT;
}

interface OpenCartModalAction {
   type: ActionType.OPEN_CART_MODAL;
   payload: null;
}

interface CloseCartModalAction {
   type: ActionType.CLOSE_CART_MODAL;
   payload: null;
}

interface ConnectSocket {
   type: ActionType.CONNECT_SOCKET;
   payload: Socket;
}

export type Action =
   | Login
   | LogOut
   | OpenCartModalAction
   | CloseCartModalAction
   | ConnectSocket;
