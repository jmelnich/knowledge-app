import React, {Component} from 'react';

class LandingContactsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            text: '',
            isDisabled: true,
            isValidEmail: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.enableButton = this.enableButton.bind(this);
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
            }, () => this.enableButton());
        } else {
            this.setState({
                isValidEmail: false
            },() => this.enableButton())

        }
    }

    enableButton() {
        const {isValidEmail, name, text} = this.state;
        if (isValidEmail && name.trim() && text.trim()) {
            this.setState({
                isDisabled: false
            })
        } else {
            this.setState({
                isDisabled: true
            })
        }
    }

    handleSubmit() {
        alert('Your message has been sent! We will contact you back within 7 days');
        //TODO: send message from user to admin email
        this.setState({
            email: '',
            name: '',
            text: '',
            isDisabled: true,
            isValidEmail: false
        })
    }

    render() {
        return (
            <div className="contact-form">
                <form>
                    <fieldset className="flex-col">
                        <legend>Contact us</legend>
                        <input type="email"
                               name="email"
                               placeholder="email@gmail.com"
                               value={this.state.email}
                               onChange = {this.handleChange}
                               onBlur={this.validateEmail}/>
                        <input type="text"
                               name="name"
                               placeholder="Name"
                               value={this.state.name}
                               onChange = {this.handleChange}
                               onBlur={this.enableButton}/>
                        <textarea rows="5" cols="50"
                                  name="text"
                                  placeholder="Your message"
                                  value={this.state.text}
                                  onChange = {this.handleChange}
                                  onBlur={this.enableButton}/>
                        <button className="submit" disabled={this.state.isDisabled} onClick={this.handleSubmit}
                                type="submit">Send</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default LandingContactsForm;