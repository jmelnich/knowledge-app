import React from 'react';
import {connect} from 'react-redux';
import CourseItem from "../CatalogContent/CourseItem";
import udacity from '../../udacity-courses.json';

const Wish = (props) => {
    const wish = props.wish;

    return (
        <div className="wrapper">
            <div className="section-content">
                <h2>Want to learn</h2>
                {/*<div className="flex-row courses-block">*/}
                    {/*{props.wish.map(item => (*/}
                        {/*<CourseItemProfile key={item.course_id} course={item}/>*/}
                    {/*))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

function mapStateToProps({courses}) {
    return {wish: courses.wish}
}

export default connect(mapStateToProps)(Wish);