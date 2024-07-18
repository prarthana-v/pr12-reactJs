import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Redux/reducer";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;