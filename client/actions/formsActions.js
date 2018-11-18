export const SVR ='http://localhost:5000';

export const signUpUser = (user) => (dispatch) => {
    console.log(user);
    fetch(`${SVR}/user/add`, {
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
