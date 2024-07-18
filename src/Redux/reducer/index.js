import { combineReducers } from "redux";
import UserReducer from "./Userreducer";

const rootReducer = combineReducers({
  Notes: UserReducer,
});

export default rootReducer;
