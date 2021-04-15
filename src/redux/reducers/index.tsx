import { combineReducers } from "redux";
import agentsDataReducer from "./agentsDataReducer";

const rootReducer = combineReducers({
  agentsData: agentsDataReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
