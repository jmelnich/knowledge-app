import React, {Component} from 'react';
import udacity from '../../udacity-courses.json'
import CourseItem from "./CourseItem";

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
        this.updateQuery = this.updateQuery.bind(this);
    }

    updateQuery(event) {
        this.setState({query: event.target.value.trim()});
    }

    render () {
        return (
            <main>
                <section id="catalog">
                    <div className="wrapper">
                        <div className="section-content">
                            <h2>Discover courses</h2>
                            <form>
                                <fieldset>
                                    <input type="text" placeholder="Search by title"
                                           value={this.state.query}
                                           onChange={this.updateQuery}
                                    />
                                </fieldset>
                            </form>

                            <form className="flex-row" id="filters">
	                            <fieldset>
		                            <h3>Platform</h3>
		                            <ul className="filter-set">
			                            <li className="flex-row"><input type="checkbox" value="Select1"/><label>Udacity</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select2"/><label>Stepik</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>Udemy</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>Coursera</label></li>

		                            </ul>
	                            </fieldset>
	                            <fieldset>
		                            <h3>Category</h3>
		                            <ul className="filter-set">
			                            <li className="flex-row"><input type="checkbox" value="Select1"/><label>General</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select2"/><label>Georgia Tech Masters in CS</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>iOS</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>Android</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>Software Engineering</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>Non-Tech</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>Web Development</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>Data Science</label></li>
		                            </ul>
	                            </fieldset>
	                            <fieldset>
		                            <h3>Level</h3>
		                            <ul className="filter-set">
			                            <li className="flex-row"><input type="checkbox" value="Select1"/><label>Beginner</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select2"/><label>Intermediate</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>Advanced</label></li>
		                            </ul>
	                            </fieldset>
	                            <fieldset>
		                            <h3>Duration</h3>
		                            <ul className="filter-set">
			                            <li className="flex-row"><input type="checkbox" value="Select1"/><label>1 month and less</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select2"/><label>1-3 months</label></li>
			                            <li className="flex-row"><input type="checkbox" value="Select3"/><label>3+ months</label></li>
		                            </ul>
	                            </fieldset>
                            </form>
                            <div className="flex-row courses-block">
                                {udacity.courses.map(item => (
                                    <CourseItem key={item.key} course={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        );
    }

}

export default Catalog;