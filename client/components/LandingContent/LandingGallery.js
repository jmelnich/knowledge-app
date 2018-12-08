import React, {Component} from 'react';
import {baseURL} from "../../config";
import ImageModal from './ImageModal';

const thumbs = ['students_xs.jpg', 'denver_xs.jpg', 'nano_xs.jpg',
	 'gulf_xs.jpg', 'robot_xs.jpg', 'university_xs.jpg', 'dashboard_xs.jpg',
	];

class LandingGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
			photo: null
		}
    }

    openModal (photo) {
        const format = photo.substring(photo.length - 4, photo.length);
        const name = photo.substring(0, photo.length - 7);
    	this.setState({photo:name+format,
			isModalOpen: true});
	};

    render() {
        return (
            <section id="gallery">
                <div className="wrapper">
                    <div className="section-content">
                        <h2>Join us today</h2>
                        <div className="gallery">
                            {thumbs.map((photo, i) => (
                                <img onClick={() => this.openModal(photo)} key={i} src={`${baseURL}/gallery/${photo}`}
                                     alt="photo"/>
                            ))}
                        </div>
                    </div>
                </div>
				<ImageModal photo={this.state.photo}/>
            </section>
        );
	}
};

export default LandingGallery;
