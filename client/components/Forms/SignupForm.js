import React, {Component} from 'react';

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
        this.validateEmail = this.validateEmail.bind(this);
        this.validateComplex = this.validateComplex.bind(this);
        this.validateMatch = this.validateMatch.bind(this);
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
        this.validateMatch();
    }

    validateMatch() {
        const password2 = this.state.password2;
        const password1 = this.state.password1;
        if (password1 === password2) {
            this.setState({
                isPasswordMatch: true
            })
        } else {
            this.setState({
                isPasswordMatch: false
            })
        }
    }

    handleSubmit() {
        const {isValidEmail, isComplexPassword, isPasswordMatch} = this.state;
        if (isValidEmail && isComplexPassword && isPasswordMatch) {
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
                            <label>Email</label>
                            <input type="email"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   onKeyUp={this.validateEmail}
                            />
                            {!this.state.isValidEmail && !!this.state.email.trim() &&
                            (<span className="error">Please, input valid email</span>)}
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
                            <label>Password</label>
                            <input type="password"
                                   name="password1"
                                   onChange={this.handleChange}
                                   onKeyUp={this.validateComplex}/>
                            {!this.state.isComplexPassword && !!this.state.password1.trim() &&
                            (<span className="error">Password is too weak</span>)}
                            <label>Repeat password</label>
                            <input type="password"
                                   name="password2"
                                   onChange={this.handleChange}
                                   onKeyUp={this.validateMatch}/>
                            {!this.state.isPasswordMatch && !!this.state.password2.trim() &&
                            (<span className="error">Passwords do not match</span>)}
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