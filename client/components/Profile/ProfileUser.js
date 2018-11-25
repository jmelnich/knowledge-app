import React from 'react';
import {baseURL} from "../../config";
import Graph from './Graph';

const User = (props) => {
    return (
        <div className="wrapper">
            <div className="section-content">
                <h2>Profile</h2>
                <div className="flex-row-between">
                    <div className="user-details flex-col">
                        <div className="user-details__image">
                            <img src={`${baseURL}/img/default.png`}/>
                        </div>
                        <div className="user-details__info">
                            <p>First Name</p>
                            <p>Last Name</p>
                            <p>email@gmail.com</p>
                            <p>Bio trulala Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Technical skills</p>
                            <p>Interests</p>
                        </div>
                    </div>
                    <Graph/>
                </div>
            </div>
        </div>
    );
}

export default User;