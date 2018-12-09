import React from 'react'
import CourseItemProfile from "./CourseItemProfile";
import {connect} from "react-redux";

const Archive = (props) => {
    return (
        <div className="wrapper">
            <div className="section-content">
                <h2>Completed courses</h2>
	            <div className="flex-row courses-block">
		            {props.completed.map(item => (
			            <CourseItemProfile key={item.course_id} item={item}/>
		            ))}
	            </div>
            </div>
        </div>
    );
};

function mapStateToProps({courses}) {
	return {completed: courses.completed}
}

export default connect(mapStateToProps)(Archive);