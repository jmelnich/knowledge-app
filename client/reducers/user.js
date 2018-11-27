import {SET_CURRENT_USER} from "../actions/types";

const initialState = {
    auth: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, state, {
                auth: true,
                user: action.payload
            });
        default:
            return state;
    }
}