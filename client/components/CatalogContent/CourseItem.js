import React from 'react';
import u from '../../img/affiliates/u.png'

const CourseItem = (props) => {
    const {course} = props;
    return (
        <article className="course">
            <header>
                <div className="course__affiliate">{course.affiliates.map(aff => (
                    <img src={aff.image || u} alt={aff.name}/>
                ))}</div>
                <div className="course__source">Udacity</div>
            </header>
            <section className="course__content">
                <h3>{course.title}</h3>
                <p>{course.subtitle}</p>
                <p>{course.summary}</p>
                <a href={course.homepage} target="_blank">Learn more</a>
            </section>
            <footer>
                <div className="category">
                    <p>Categories:</p>
                {course.tracks.length === 0 ? 'General' : course.tracks.map(category => (
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