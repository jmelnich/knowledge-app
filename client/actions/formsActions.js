import {baseURL} from "../config";

export const signUpUser = (user) => (dispatch) => {
    console.log(user);
    fetch(`${baseURL}/user/add`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {"Content-Type": "application/json",
            'Accept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((status) => {
            console.log(status);
            if (status === 'success') {
                //TODO:show success to user
                return;
            }
        });
    };
