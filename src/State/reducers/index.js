import { combineReducers } from "redux";
import accountreducer from "./accountReducers";

const rootreducers=combineReducers({
    account:accountreducer
})

export default rootreducers;