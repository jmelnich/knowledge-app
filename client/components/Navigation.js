import React, { Component } from 'react';
import {baseURL} from '../config';
import {Link} from 'react-router-dom';

const categories = ['general', 'non-tech', 'computer-science', 'ios', 'android', 'software-engineering',
    'web', 'data-science'];

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({isVisible: !this.state.isVisible})
    };

render() {
    const display = this.state.isVisible ? 'inline-block' : 'none';
    const dropStyle = {
           display: display
    };


    return (
        <nav id="nav">
            <ul className="flex-row main-nav">
                <li onClick={this.toggle}><a>catalog</a></li>
                <li style={dropStyle} className="drop-down">
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}><Link to={`/catalog/${category}`}
                                                  onClick={this.toggle}>{category}</Link></li>
                        ))}
                        <li><Link to="/catalog" onClick={this.toggle}>Full Catalog</Link></li>
                    </ul>
                </li>
                <li><a href={`${baseURL}/#about`}>about us</a></li>
                <li><a href={`${baseURL}/#contacts`}>contacts</a></li>
                <li><a href="#loginForm">log in</a></li>
            </ul>
        </nav>
    );
  }
}
export default Navigation;