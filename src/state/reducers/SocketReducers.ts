import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Socket } from "socket.io-client";

export interface SocketState {
   socket?: Socket | null;
}

const initialState = {
   socket: null,
};

export const socketReducer = (
   state: SocketState = initialState,
   action: Action
) => {
   switch (action.type) {
      case ActionType.CONNECT_SOCKET:
         return {
            ...state,
            socket: action.payload,
         };
      default:
         return state;
   }
};
