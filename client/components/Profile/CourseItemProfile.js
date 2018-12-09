import React from 'react';

export const CourseItemProfile = (props) => {
    return (
        <article className="course course-item-profile">
	        <section>
		        <h3>{props.item.title}</h3>
		        <div className="level-time-info">
			        <i className="icon-signal"/>
			        <span>{props.item.level || "No level" }</span>
		        </div>
	        </section>
        </article>
    );
};

export default CourseItemProfile;