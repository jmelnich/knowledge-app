import React from 'react';
import {baseURL} from "../../config";
import Graph from './Graph';
import {connect} from 'react-redux';

const User = (props) => {
    return (
        <div className="wrapper-fixed">
            <div className="section-content">
                <h2>Profile</h2>
                <div className="flex-row-between flex-wrap-m">
                    <div className="user-details flex-col">
                        <div className="user-details__image">
                            <img src={`${baseURL}/img/default.png`}/>
                        </div>
                        <div className="user-details__info">
                            <p>{`${props.details.first_name} ${props.details.last_name}`}</p>
                            <p>{props.details.email}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem ea est eum id nemo, optio porro quibusdam rerum vitae voluptatem voluptatum! Iure nemo non odit quisquam. </p>
                        </div>
	                    <div className="user-details__skills">
	                        <h3>My Skills</h3>
                            <div className="flex-col">
                                <label>HTML</label>
                                <progress value="44" max="100"/>
                                <label>CSS</label>
                                <progress value="54" max="100"/>
                                <label>JS</label>
                                <progress value="54" max="100"/>
                                <label>SQL</label>
                                <progress value="54" max="100"/>
	                            <label>PHP</label>
	                            <progress value="24" max="100"/>
                            </div>
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