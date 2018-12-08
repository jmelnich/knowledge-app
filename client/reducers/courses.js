import {SET_USER_COURSES, UPDATE_COURSE} from '../actions/types';

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
        case UPDATE_COURSE:
            if (action.payload.status === 0) {
             return Object.assign({}, state, {
                 completed: state.completed.filter(c => c.course_id !== action.payload.course_id),
                 wish: state.wish.filter(c => c.course_id !== action.payload.course_id)
             })
            } else if (action.payload.status === 1) {
                return Object.assign({}, state, {
                    wish: state.wish.concat(action.payload)
                });
            } else if (action.payload.status === 2) {
                return Object.assign({}, state, {
                    completed: state.completed.concat(action.payload)
                });
            }
        default:
            return state;
    }
}