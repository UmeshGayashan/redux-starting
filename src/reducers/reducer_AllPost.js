import {FETCH_BUTTON_CLICKED} from "../actions/types.js"

export default function(state=null,action){
    switch(action.type){
        case FETCH_BUTTON_CLICKED:
            return action.payload;
            break;
    }
    return state
}

// One Reducer can have multiple Actions