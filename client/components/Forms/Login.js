import React, {Component} from 'react';
import Email from './Inputs/Email'
import {isValidEmail} from './Inputs/formValidator'
import Password from "./Inputs/Password";
import {loginUser} from '../../actions/formsActions';
import {connect} from 'react-redux';

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

    handleSubmit(e) {
        e.preventDefault();
        const {isValidEmail, email, password} = this.state;
        if (isValidEmail === true) {
            this.props.loginUser({email, password});
            // this.setState({
            //     email: '',
            //     password: '',
            //     isValidEmail: false
            // });
        }
    }

    render() {
        return (
            <div id="loginForm">
                <div className="modal">
                    <a href="#" className="modal__close">X</a>
                    <form className="flex-col">
                        <fieldset className="flex-col">
                            <legend>Log in</legend>
                            <Email handleChange={this.handleChange}
                                   message={this.state.isValidEmail}
                                   email={this.state.email}/>
                            <Password handleChange={this.handleChange}
                                    password={this.state.password}/>
                        </fieldset>
                        <a href="#restorePasswordForm">Forgot your password?</a>
                        <button type="submit" onClick={this.handleSubmit}>Log in</button>
                        <p>Don't have account? <a href="#signUpForm"> Sign up</a></p>
                    </form>

                </div>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
	return {
		loginUser: (data) => dispatch(loginUser(data))
	}
}

export default connect(null, mapDispatchToProps)(Login);