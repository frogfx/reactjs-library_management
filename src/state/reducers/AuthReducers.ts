import { ActionType } from "../action-types";
import { Action } from "../actions";
import { User } from "../../interface/index";

export interface AuthState {
   isLogin?: boolean;
   user?: User;
}

const initialState = {
   isLogin: false,
   user: {} as User,
};

export const authReducer = (
   state: AuthState = initialState,
   action: Action
) => {
   switch (action.type) {
      case ActionType.LOGIN:
         return {
            ...state,
            isLogin: true,
            user: action.payload,
         };
      case ActionType.LOGOUT:
         return {
            ...state,
            isLogin: false,
            user: {} as User,
         };
      default:
         return state;
   }
};
