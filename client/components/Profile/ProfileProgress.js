import React from 'react';
import {connect} from 'react-redux';

const Progress = (props) => {
    return (
        <div className="wrapper">
            <div className="section-content">
                <h2>Courses in progress</h2>
            </div>
        </div>
    );
};

function mapStateToProps({courses}) {
    return courses;
}

export default connect(mapStateToProps)(Progress);