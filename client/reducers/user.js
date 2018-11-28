import {SET_CURRENT_USER} from "../actions/types";

const initialState = {
    auth: false,
    details: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, state, {
                auth: true,
                details: action.payload
            });
        default:
            return state;
    }
}