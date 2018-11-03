import React, {Component} from 'react';

class RestorePasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isValidEmail: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
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

    handleSubmit() {
        const {isValidEmail} = this.state;
        //TODO: check if email exists in db
        if (isValidEmail) {
            //TODO: send email for password renewal
            this.setState({
                email: '',
                isValidEmail: false
            });
            alert('Please, check your email');
        } else {
            alert ('No user with this email found');
        }
    }

    render() {
        return (
            <div id="restorePasswordForm">
                <div className="modal">
                    <a href="#" className="modal__close">X</a>
                    <form className="flex-col">
                        <fieldset className="flex-col">
                            <legend>Restore password</legend>
                            <label>Email</label>
                            <input type="email"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   onKeyUp={this.validateEmail}
                            />
                            {!this.state.isValidEmail && !!this.state.email.trim() &&
                            (<span className="error">Please, input valid email</span>)}
                        </fieldset>
                        <button type="submit" onClick={this.handleSubmit}>Send</button>
                        <a href="#loginForm">Back to login</a>
                    </form>

                </div>
            </div>
        );
    }
}

export default RestorePasswordForm;