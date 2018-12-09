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
                                <label>Non-tech</label>
                                <progress value="44" max="100"/>
                                <label>Algorithms</label>
                                <progress value="54" max="100"/>
                                <label>Web</label>
                                <progress value="54" max="100"/>
                                <label>Mobile</label>
                                <progress value="54" max="100"/>
	                            <label>Software Engineering</label>
	                            <progress value="24" max="100"/>
	                            <label>Data Science</label>
	                            <progress value="24" max="100"/>
	                            <label>DevOps</label>
	                            <progress value="24" max="100"/>
	                            <label>Security</label>
	                            <progress value="2" max="100"/>
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