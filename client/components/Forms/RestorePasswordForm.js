import React, {Component} from 'react'
import Email from './Email'
import {isValidEmail} from './formValidator'

class RestorePasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
                            <Email handleChange={this.handleChange}
                                   message={this.state.isValidEmail}
                                   email={this.state.email}/>
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