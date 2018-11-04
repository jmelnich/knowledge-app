import React, {Component} from 'react';
import Email from './Email'
import Password from "./Password"
import {isValidEmail, isComplexPassword, isPasswordMatch} from './formValidator'

class SignupForm extends Component {
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

    handleSubmit() {
        const {isValidEmail, isComplexPassword, isPasswordMatch} = this.state;
        if (isValidEmail === true && isComplexPassword === true && isPasswordMatch === true) {
            //TODO: send email and password to back end, recieve answer and based on that login user or show
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
            alert('Signing up...');
        } else {
            alert ('Please input all data');
        }
    }

    render() {
        return (
            <div id="signUpForm">
                <div className="modal">
                    <a href="#" className="modal__close">X</a>
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
                        <p>Have account? <a href="#loginForm"> Log in</a></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;