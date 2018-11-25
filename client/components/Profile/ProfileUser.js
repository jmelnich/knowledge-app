import React from 'react';
import {baseURL} from "../../config";
import Graph from './Graph';

const User = (props) => {

    return (
        <div className="wrapper">
            <div className="section-content">
                <h2>Profile</h2>
                <div className="flex-row-between">
                    <div className="user-details">
                        <img src={`${baseURL}/img/default.png`}/>
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p>email@gmail.com</p>
                    </div>
                    <Graph/>
                </div>
            </div>
        </div>
    );
}

export default User;