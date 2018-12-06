import React from 'react';
import {baseURL} from "../../config";

const thumbs = ['students_xs.jpg', 'denver_xs.jpeg', 'nano_xs.jpg',
	 'gulf_xs.jpg', 'robot_xs.jpg', 'university_xs.jpg', 'dashboard_xs.jpg',
	];

export const LandingGallery = (props) => {
    return (
	    <section id="gallery">
		    <div className="wrapper">
			    <div className="section-content">
				    <h2>Join us today</h2>
				    <div className="gallery">
					    {thumbs.map((photo, i) => (
						    <img key={i} src={`${baseURL}/gallery/${photo}`} alt="photo"/>
					    ))}

				    </div>
			    </div>
		    </div>
	    </section>
    );
};

export default LandingGallery;