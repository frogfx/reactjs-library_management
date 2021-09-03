import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { User } from "../../interface/index";

export const logIn = (user: User) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({ type: ActionType.LOGIN, payload: user });
   };
};

export const logOut = () => {
   localStorage.removeItem("accessToken");
   localStorage.removeItem("refreshToken");
   return (dispatch: Dispatch<Action>) => {
      dispatch({ type: ActionType.LOGOUT });
   };
};
