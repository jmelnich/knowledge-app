import {SET_USER_COURSES} from '../actions/types';

const initialState = {
    completed: [],
    wish: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_USER_COURSES:
            return Object.assign({}, state, {
                completed: action.payload.filter(course => course.status === 2),
                wish: action.payload.filter(course => course.status === 1)
            });
        default:
            return state;
    }
}