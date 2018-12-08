import React from 'react';
import {toggleSignUp} from "../../actions/formToggleActions";
import {connect} from 'react-redux';

const LandingBegin = (props) => {
    return (
        <section id="start">
            <div className="wrapper">
                <div className="section-content flex-col">
                    <h2>Ready to begin?</h2>
                    <h3>Take the advantage of our knowledge base today</h3>
                    <a href="#signUpForm" onClick={props.toggleSignUp}><button >Sign up</button></a>
                </div>
            </div>
        </section>
    );
};

function mapDispatchToProps(dispatch) {
	return {
		toggleSignUp: () => dispatch(toggleSignUp())
	}
}

export default connect(null, mapDispatchToProps)(LandingBegin);