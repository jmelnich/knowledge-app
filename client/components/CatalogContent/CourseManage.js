import React, {Component} from 'react';
import {connect} from 'react-redux';

class CourseManage extends Component {
  constructor(props) {
    super(props);
	this.state = {
	  wish: false,
	  complete: false
	};
	this.toggleComplete = this.toggleComplete.bind(this);
	this.toggleWish = this.toggleWish.bind(this);
  }

  /**
   * @param {string} id - Course id
   * @param {array} category - Course category
   */
  toggleComplete(id, category) {
    this.setState({complete: !this.state.complete});
    console.log(id, category);
  }

  /**
   * @param {string} id - Course id
   * @param {array} category - Course category
   */
  toggleWish(id, category) {
	this.setState({wish: !this.state.wish});
	console.log(id, category);
  }

  //save to ls

  //get arr from ls
  //compare key course to array from ls

  render() {
    //console.log('all props', this.props);
    const course_id = this.props.course.key;
    const course_cat = this.props.course.tracks;
    if (this.props.auth) {
      //get from DB
      //save to DB
	} else {
      //get from LS
      //save to LS
	}
	return (
	  <div className="course__manage">
		<i onClick={() => this.toggleComplete(course_id, course_cat)}
		   className={`icon-ok-circled ${this.state.complete ? 'active': ''}`}/>
		<i onClick={() => this.toggleWish(course_id, course_cat)}
		   className={`icon-plus-circle ${this.state.wish ? 'active': ''}`}/>
	  </div>
	);
  }
}

function mapStateToProps({user}) {
  return user;
}

export default connect(mapStateToProps, null)(CourseManage);