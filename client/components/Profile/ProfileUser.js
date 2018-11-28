import React from 'react';
import {baseURL} from "../../config";
import Graph from './Graph';
import {connect} from 'react-redux';

const User = (props) => {
    console.log(props);
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
                            <p>{`First Name: ${props.details.first_name}`}</p>
                            <p>{`Last Name: ${props.details.last_name}`}</p>
                            <p>{`email: ${props.details.email}`}</p>
                        </div>
                    </div>
                    <Graph/>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps({user}) {
  return {
	details: user.details
  }
}

export default connect(mapStateToProps)(User);