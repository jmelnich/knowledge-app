import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isValidEmail: false,
            isComplexPassword: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateComplex = this.validateComplex.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    validateEmail(e) {
        const email = e.target.value;
        const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+$/;
        if (regExpEmail.test(email)) {
            this.setState({
                isValidEmail: true
            });
        } else {
            this.setState({
                isValidEmail: false
            })
        }
    }

    validateComplex(e) {
        const password = e.target.value;
        const pattern = /^(?=.*\d)(?=.*[a-z])\w{6,}$/;
        if (pattern.test(password)) {
            this.setState({
                isComplexPassword: true
            })
        } else {
            this.setState({
                isComplexPassword: false
            })
        }
    }

    handleSubmit() {
        const {isValidEmail, isComplexPassword} = this.state;
        if (isValidEmail && isComplexPassword) {
            //TODO: send email and password to back end, recieve answer and based on that login user or show
            this.setState({
                email: '',
                password: '',
                isValidEmail: false,
                isComplexPassword: false
            });
            alert('Logging in...');
        } else {
            alert ('Login and password incorrect');
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
                            <label>Email</label>
                            <input type="email"
                                   name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                   onKeyUp={this.validateEmail}
                            />
                            {!this.state.isValidEmail && !!this.state.email.trim() &&
                            (<span className="error">Please, input valid email</span>)}
                            <label>Password</label>
                            <input type="password"
                                    name="password"
                                   autoComplete="on"
                                   onChange={this.handleChange}
                                   onKeyUp={this.validateComplex}/>
                            {!this.state.isComplexPassword && !!this.state.password.trim() &&
                            (<span className="error">Wrong password</span>)}
                        </fieldset>
                        <a href="#restorePasswordForm">Forgot your password?</a>
                        <button type="submit" onClick={this.handleSubmit}>Log in</button>
                        <p>Don't have account? <a href="#signUpForm"> Sign up</a></p>
                    </form>

                </div>
            </div>
        );
    }
}

export default LoginForm;