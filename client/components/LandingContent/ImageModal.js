import React, {Component} from 'react';
import {baseURL} from "../../config";

class ImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        console.log('this in op toggle', this);
        this.setState({isOpen: false})
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            if (this.props.photo) {
                this.setState({isOpen: true})
            }
        }
    }

    render() {
        console.log('this.props', this.props.photo);
        console.log('this.state', this.state);
        return (
            <div id="imageModalForm" style={{display: this.state.isOpen ? 'block' : 'none'}}>
                <div className="modal">
                    <a className="modal__close" onClick={() => this.toggle()}>X</a>
                    <form className="flex-col">
                        <img src={`${baseURL}/gallery/${this.props.photo}`} alt="photo"/>
                    </form>

                </div>
            </div>
        );
    }
}

export default ImageModal;



//
//