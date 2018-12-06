import {SET_USER_COURSES} from "./types";
import {baseURL} from "../config";

const header = {
    "Content-Type": "application/json",
    'Accept': 'application/json'
};

export const updateCourse = (course) => {
    fetch(`${baseURL}/course/update`, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: header
    })
        .then((response) => response.json())
        .then((response) => {
            console.log('status for course on back', response);
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
            console.log('courses', response.courses);
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

