import React, {Component} from 'react';
import Email from './Inputs/Email'
import {isValidEmail} from './Inputs/formValidator'
import Password from "./Inputs/Password";
import {assignFlashMsg, loginUser} from '../../actions/userActions';
import {connect} from 'react-redux';
import {toggleLogin, toggleSignUp, toggleFpass} from "../../actions/formToggleActions";
import {withRouter} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isValidEmail: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleSignUp = this.toggleSignUp.bind(this);
        this.toggleFpass = this.toggleFpass.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.email !== this.state.email) {
            this.setState({
                isValidEmail:isValidEmail(this.state.email)
            })
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
	toggleLogin() {
		this.props.toggleLogin();
	};

	toggleSignUp() {
		this.props.toggleSignUp();
	};

	toggleFpass() {
		this.props.toggleFpass();
	};

    handleSubmit(e) {
        e.preventDefault();
        const {isValidEmail, email, password} = this.state;
        if (isValidEmail === true) {
            this.props.loginUser({email, password})
	            .then((status) => {
	                if (status === 'ok') {
	                    this.setState({
		                    email: '',
		                    password: '',
		                    isValidEmail: false
                        });
	                    this.toggleLogin();
	                    this.props.history.push('/profile');
                    }
                });

        } else {
	        this.props.assignFlashMsg({
		        text: 'Please input correct credentials',
		        type: 'danger'
            })
        }
    }

    render() {
        return (
            <div id="loginForm" style={{display: this.props.form ? 'block' : 'none'}}>
                <div className="modal">
                    <a href="#" className="modal__close" onClick={this.toggleLogin}>X</a>
                    <form className="flex-col">
                        <fieldset className="flex-col">
                            <legend>Log in</legend>
                            <Email handleChange={this.handleChange}
                                   message={this.state.isValidEmail}
                                   email={this.state.email}/>
                            <Password handleChange={this.handleChange}
                                    password={this.state.password}/>
                        </fieldset>
                        <a href="#restorePasswordForm" onClick={this.toggleFpass}>Forgot your password?</a>
                        <button type="submit" onClick={this.handleSubmit}>Log in</button>
                        <p>Don't have account? <a href="#signUpForm" onClick={this.toggleSignUp}> Sign up</a></p>
                    </form>

                </div>
            </div>
        );
    }
};

function mapStateToProps({form}) {
    return {form: form.login}
}

function mapDispatchToProps(dispatch) {
	return {
		loginUser: (data) => dispatch(loginUser(data)),
        toggleLogin: () => dispatch(toggleLogin()),
        toggleSignUp: () => dispatch(toggleSignUp()),
		toggleFpass: () => dispatch(toggleFpass()),
		assignFlashMsg: (info) => dispatch(assignFlashMsg(info))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));