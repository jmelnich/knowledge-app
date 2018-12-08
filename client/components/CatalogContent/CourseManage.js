import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCourse} from "../../actions/courseActions";

class CourseManage extends Component {
  constructor(props) {
    super(props);
	this.state = {
	    wish: [],
        completed: [],
        isWish: false,
        isCompleted: false
	};
	this.toggleComplete = this.toggleComplete.bind(this);
	this.toggleWish = this.toggleWish.bind(this);
  }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.courses.completed.length !== this.props.courses.completed.length ||
        prevProps.courses.wish.length !== this.props.courses.wish.length) {
        const course_id = this.props.course.key;
          this.setState({
              wish: this.props.courses.wish,
              completed: this.props.courses.completed,
              isWish: this.props.courses.wish.filter(course => course_id === course.course_id).length,
              isCompleted: this.props.courses.completed.filter(course => course_id === course.course_id).length
          });
      }
    }

  /**
   * @param {string} id - Course id
   * @param {array} category - Course category
   */
  toggleComplete(id, category) {
  	const status = !this.state.isCompleted ? 2 : 0;
    this.setState({isCompleted: !this.state.isCompleted,
                    isWish: false});
    const course = {
    	user_id: this.props.user.details.id,
		course_id: id,
		category: category[0],
		status
	};
    this.props.updateCourse(course);
  }

  /**
   * @param {string} id - Course id
   * @param {array} category - Course category
   */
  toggleWish(id, category) {
      const status = !this.state.isWish ? 1 : 0;
      this.setState({isWish: !this.state.isWish,
                    isCompleted: false});
      const course = {
          user_id: this.props.user.details.id,
          course_id: id,
          category: category[0],
          status
      };
      this.props.updateCourse(course);
  }

  //save to ls

  //get arr from ls
  //compare key course to array from ls

  render() {
    const course_id = this.props.course.key;
    const course_cat = this.props.course.tracks;
	return (
	  <div className="course__manage">
		<i onClick={() => this.toggleComplete(course_id, course_cat)}
		   className={`icon-ok-circled ${this.state.isCompleted ? 'active': ''}`}/>
		<i onClick={() => this.toggleWish(course_id, course_cat)}
		   className={`icon-plus-circle ${this.state.isWish ? 'active': ''}`}/>
	  </div>
	);
  }
}

function mapStateToProps({user, courses}) {
  return {user,
        courses
  }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCourse: (course) => dispatch(updateCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseManage);