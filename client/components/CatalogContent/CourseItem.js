import React from 'react';
import udacity from '../../img/affiliates/u-affiliate.png'
import uBg from '../../img/udacity-default.png'

const CourseItem = (props) => {
    const {course} = props;
    return (
        <article key={course.key} className="course">
            <header>
                <div className="course-head">
                <div className="course-head__affiliate">{course.affiliates.map(aff => (
                    <img key={aff.name} src={aff.image || udacity} alt={aff.name}/>
                ))}</div>
                <div className="course-head__source">Udacity</div>
                </div>
                <h3>{course.title}</h3>
                <p>{course.summary}</p>
                <a href={course.homepage} target="_blank">Learn more</a>
            </header>
            <section className="course-content">
                <h3>{course.title}</h3>
                <div className="course-cover"
                     style={{ backgroundImage: `url(${course.image || uBg})`}}
                />
                <p>{course.subtitle}</p>
            </section>
            <footer>
                <div className="category">
                    {course.tracks.length === 0 ? <span>General</span> : course.tracks.map((category, i) => (
                    <span key={i}>{category}</span>
                    ))}
                </div>
                <div className="level-time-info">
                    <i className="icon-signal"/>
                    <span>{course.level || "No level"}</span>
                    <i className="icon-clock"/>
                    <span>{course.expected_duration}{" "}{course.expected_duration_unit}</span>
                </div>
                <div className="course__manage">
                    <i className="icon-ok-circled"/>
                    <i className="icon-plus-circle"/>
                </div>
            </footer>
        </article>
    );
}

export default CourseItem;