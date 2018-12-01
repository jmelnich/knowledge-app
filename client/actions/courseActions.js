import {UPDATE_COURSE} from "./types";
import {baseURL} from "../config";

const header = {
    "Content-Type": "application/json",
    'Accept': 'application/json'
};

export const updateCourse = (course) => {
    console.log(course);
    fetch(`${baseURL}/course/update`, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: header
    })
        .then((response) => response.json())
        .then((response) => {
            console.log('resp in action', response);
        })
};

