import React, { Component } from 'react';
import udacity from '../../udacity-courses.json';
import CourseItem from './CourseItem';

class CatalogByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.match.params.category
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // called only when props params router changed
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.setState({
                category:this.props.match.params.category
            })
        }
    }

render() {
        let currentCategory = '';
        switch (this.state.category) {
            case "general":
                currentCategory = 'general';
                break;
            case "computer-science":
                currentCategory = 'Georgia Tech Masters in CS';
                break;
            case "non-tech":
                currentCategory = "Non-Tech";
                break;
            case "ios":
                currentCategory = "iOS";
                break;
            case "android":
                currentCategory = "Android";
                break;
            case "software-engineering":
                currentCategory = "Software Engineering";
                break;
            case "web":
                currentCategory = "Web Development";
                break;
            case "data-science":
                currentCategory = "Data Science";
                break;
            default:
                currentCategory = "";

        }
    let courses = udacity.courses;
    courses = courses.filter(course => {
        if (course.tracks.length === 0 && currentCategory === "general") {
            return true;
        } else if (course.tracks[0] === currentCategory || course.tracks[1] === currentCategory) {
            return true;
        }
    });

    return (
        <div className="flex-row courses-block">
            {courses.map(item => (
                <CourseItem key={item.key} course={item}/>
            ))}
        </div>
    );
  }
}
export default CatalogByCategory;
