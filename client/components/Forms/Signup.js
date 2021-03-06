import React, {Component} from 'react';
import Email from './Inputs/Email';
import Password from "./Inputs/Password";
import {isValidEmail, isComplexPassword, isPasswordMatch} from './Inputs/formValidator';
import {signUpUser, assignFlashMsg} from '../../actions/userActions';
import {connect} from "react-redux";
import {toggleLogin, toggleSignUp} from "../../actions/formToggleActions";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password1: '',
            password2: '',
            isValidEmail: false,
            isComplexPassword: false,
            isPasswordMatch: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	    this.toggleLogin = this.toggleLogin.bind(this);
	    this.toggleSignUp = this.toggleSignUp.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.email !== this.state.email) {
            this.setState({
                isValidEmail:isValidEmail(this.state.email)
            })
        }
        else if (prevState.password1 !== this.state.password1) {
            this.setState({
                isComplexPassword:isComplexPassword(this.state.password1)
            });
            this.setState({
                isPasswordMatch:isPasswordMatch(this.state.password1, this.state.password2)
            });
        } else if (prevState.password2 !== this.state.password2) {
            this.setState({
                isPasswordMatch:isPasswordMatch(this.state.password1, this.state.password2)
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

    handleSubmit(e) {
        e.preventDefault();
        const {isValidEmail, isComplexPassword, isPasswordMatch} = this.state;
        if (isValidEmail === true && isComplexPassword === true && isPasswordMatch === true) {
            const user = {
                email: this.state.email,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                password: this.state.password1,
            };
            this.props.signUpUser(user);
            this.setState({
                email: '',
                first_name: '',
                last_name: '',
                password1: '',
                password2: '',
                isValidEmail: false,
                isComplexPassword: false,
                isPasswordMatch: false
            });
            this.toggleSignUp();
        } else {
            this.props.assignFlashMsg({
	            text: 'Please fill all required fields',
	            type: 'danger'
            })
        }
    }

    render() {

        return (
            <div id="signUpForm" style={{display: this.props.form ? 'block' : 'none'}}>
                <div className="modal">
                    <a href="#" className="modal__close" onClick={this.toggleSignUp}>X</a>
                    <form className="flex-col">
                        <fieldset className="flex-col">
                            <legend>Sign up</legend>
                            <Email handleChange={this.handleChange}
                                   message={this.state.isValidEmail}
                                   email={this.state.email}/>
                            <label>First name</label>
                            <input type="text"
                                   name="first_name"
                                   value={this.state.first_name}
                                   onChange={this.handleChange}
                            />
                            <label>Last name</label>
                            <input type="text"
                                   name="last_name"
                                   value={this.state.last_name}
                                   onChange={this.handleChange}
                            />

                            <Password handleChange={this.handleChange}
                                      name="password1"
                                      message={this.state.isComplexPassword}
                                      password={this.state.password1}/>
                            <Password handleChange={this.handleChange}
                                      name="password2"
                                      label={'Repeat password'}
                                      message={this.state.isPasswordMatch}
                                      password={this.state.password2}/>
                        </fieldset>
                        <button type="submit" onClick={this.handleSubmit}>Sign up</button>
                        <p>Have account? <a href="#loginForm" onClick={this.toggleLogin}>Log in</a></p>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({form}) {
    return {form: form.signup}
}

function mapDispatchToProps(dispatch) {
	return {
		signUpUser: (user) => dispatch(signUpUser(user)),
		toggleLogin: () => dispatch(toggleLogin()),
		toggleSignUp: () => dispatch(toggleSignUp()),
		assignFlashMsg: (info) => dispatch(assignFlashMsg(info))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);