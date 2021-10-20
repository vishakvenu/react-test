import { createStore } from "redux";
import rootreducers from "./reducers";

export const store=createStore(rootreducers)