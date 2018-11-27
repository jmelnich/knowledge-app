import React, {Component} from 'react';
import Email from '../Forms/Inputs/Email';
import Name from '../Forms/Inputs/Text';
import Message from '../Forms/Inputs/TextArea';
import {isValidEmail, isFilled} from '../Forms/Inputs/formValidator';

class LandingContactsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            text: '',
            isEnabled: false,
            isValidEmail: false,
            isName: false,
            isMsg: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.switchButton = this.switchButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.email !== this.state.email) {
            this.setState({
                isValidEmail:isValidEmail(this.state.email)
            })
        }
        if (this.state.isValidEmail === true && this.state.name.trim() && this.state.text.trim() && !this.state.isEnabled) {
            this.switchButton();
        } else if ((this.state.isValidEmail !== true || !this.state.name.trim() || !this.state.text.trim()) && this.state.isEnabled) {
            this.switchButton();
        }
        if (prevState.name !== this.state.name) {
            this.setState({
                isName:isFilled(this.state.name)
            })
        }
        if (prevState.text !== this.state.text) {
            this.setState({
                isMsg:isFilled(this.state.text)
            })
        }

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    switchButton() {
        const {isValidEmail, name, text} = this.state;
        this.setState({
            isEnabled: isValidEmail === true && name.trim() && text.trim()
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Your message has been sent! We will contact you back within 7 days');
        //TODO: send message from user to admin email
        this.setState({
            email: '',
            name: '',
            text: '',
            isEnabled: false,
            isValidEmail: false,
            isName: false,
            isMsg: false
        })
    }

    render() {
        return (
            <div className="contact-form">
                <form>
                    <fieldset className="flex-col">
                        <legend>Contact us</legend>
                        <Email handleChange={this.handleChange}
                               message={this.state.isValidEmail}
                               placeholder="email@gmail.com"
                               email={this.state.email}/>
                        <Name handleChange={this.handleChange}
                               message={this.state.isName}
                               placeholder="Name"
                               name="name"
                               value={this.state.name}/>
                        <Message handleChange={this.handleChange}
                                 rows={4} cols={50}
                                 name="text"
                                 placeholder="Your message"
                                 value={this.state.text}
                                 message={this.state.isMsg}
                        />
                        <button className="submit" disabled={!this.state.isEnabled} onClick={this.handleSubmit}
                                type="submit">Send</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default LandingContactsForm;