import { combineReducers } from "redux";
import { authReducer } from "./AuthReducers";
import { socketReducer } from "./SocketReducers";

const rootReducer = combineReducers({
   auth: authReducer,
   socket: socketReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
