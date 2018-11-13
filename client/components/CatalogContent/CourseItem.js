import React from 'react';
import udacity from '../../img/affiliates/u.png'

const CourseItem = (props) => {
    const {course} = props;
    return (
        <article className="course">
            <header>
                <div className="course-head">
                <div className="course-head__affiliate">{course.affiliates.map(aff => (
                    <img src={aff.image || udacity} alt={aff.name}/>
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
                     style={{ width: 410, height: 180, backgroundImage: `url(${course.image})`, backgroundSize: "cover"}}/>
                <p>{course.subtitle}</p>
            </section>
            <footer>
                <div className="category">
                    <p>Categories:</p>
                    {course.tracks.length === 0 ? <span>General</span> : course.tracks.map(category => (
                    <span>{category}</span>
                ))}
                </div>
                <div className="user-finish"></div>
                <div className="user-to-complete"></div>
            </footer>
        </article>
    );
}

export default CourseItem;