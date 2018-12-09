import {SET_USER_COURSES, UPDATE_COURSE} from "./types";
import {baseURL} from "../config";

const header = {
    "Content-Type": "application/json",
    'Accept': 'application/json'
};

export const updateCourse = (course) => dispatch => {
	console.log('course i goona send', course);
    fetch(`${baseURL}/course/update`, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: header
    })
        .then((response) => response.json())
        .then((response) => {
            console.log('status for course on back', response);
            console.log('course i add to store', course);
            dispatch({
                type: UPDATE_COURSE,
                payload: course
            })
        })
};

export const getUserCourses = (id) => (dispatch) => {
    fetch(`${baseURL}/course/get`, {
        method: 'POST',
        body: JSON.stringify(id),
        headers: header
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.courses) {
                dispatch({
                    type: SET_USER_COURSES,
                    payload: response.courses
                })
            } else {
                console.log(response);
            }
        })
};

