import { combineReducers } from "redux";
import reducer_AllPost from "./reducer_AllPost";

const rootReducer = combineReducers({
    all_Posts:reducer_AllPost,
})

export default rootReducer;