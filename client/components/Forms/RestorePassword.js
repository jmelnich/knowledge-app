import React, {Component} from 'react';
import Email from './Inputs/Email';
import {isValidEmail} from './Inputs/formValidator';
import {toggleFpass, toggleLogin} from '../../actions/formToggleActions';
import connect from "react-redux/es/connect/connect";

class RestorePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isValidEmail: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	    this.toggleFpass = this.toggleFpass.bind(this);
	    this.toggleLogin = this.toggleLogin.bind(this);
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

	toggleFpass() {
		this.props.toggleFpass();
	};

	toggleLogin() {
		this.props.toggleLogin();
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
            <div id="restorePasswordForm" style={{display: this.props.form ? 'block' : 'none'}}>
                <div className="modal">
                    <a href="#" className="modal__close" onClick={this.toggleFpass}>X</a>
                    <form className="flex-col">
                        <fieldset className="flex-col">
                            <legend>Restore password</legend>
                            <Email handleChange={this.handleChange}
                                   message={this.state.isValidEmail}
                                   email={this.state.email}/>
                        </fieldset>
                        <button type="submit" onClick={this.handleSubmit}>Send</button>
                        <a href="#loginForm" onClick={this.toggleLogin}>Back to login</a>
                    </form>

                </div>
            </div>
        );
    }
}

function mapStateToProps({form}) {
	return {form: form.fpass}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleFpass: () => dispatch(toggleFpass()),
		toggleLogin: () => dispatch(toggleLogin())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RestorePassword);