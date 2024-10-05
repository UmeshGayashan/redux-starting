import { combineReducers } from "redux";
import reducer_AllPost from "./reducer_AllPost";
import reducer_SelectedPost from "./reducer_SelectedPost";
import { selectPost } from "../actions/postAction";

const rootReducer = combineReducers({
    all_Posts:reducer_AllPost,
    selectedPost:reducer_SelectedPost
})

export default rootReducer;