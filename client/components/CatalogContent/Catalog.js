import React, {Component} from 'react';
import udacity from '../../udacity-courses.json';
import CourseItem from "./CourseItem";
import FilterAll from "./FilterAll";

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
	        platform: [],
	        category: [],
	        level: [],
	        duration: []
        };
        this.updateQuery = this.updateQuery.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
    }

    updateQuery(event) {
    	const request = event.target.value;
        this.setState({query: request});
    }

	searchByTitle(request) {
		request = request.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    	const regex = new RegExp(`${request}`, "i");
		return udacity.courses.filter(item => regex.test(item.title));
	}

    updateFilter(event) {
		const {value, name} = event.target;
		let arr = this.state[name].filter(item => item === value);
		if (arr.length) {
			this.setState({
                [name]: this.state[name].filter(item => item !== value)
        	})
		} else {
			this.setState({[name]: [...this.state[name], value]})
		}
	}

    render () {
    	//console.log('current state', this.state);
		const {query, level, category, duration} = this.state;
    	let courses = udacity.courses;
    	if (query) {
		    courses = this.searchByTitle(query);
	    }
	    if (level.length) {
            let arr = [];
			for (let i = 0; i < level.length; i++) {
                arr = arr.concat(courses.filter(course => course.level === level[i]));
			}
			courses = arr;
		}
        if (category.length) {
            let arr = [];
            for (let i = 0; i < category.length; i++) {
                arr = arr.concat(courses.filter(course => course.tracks[0] === category[i]
					|| course.tracks[1] === category[i]));
            }
            courses = arr;
        }
        if (duration.length) {
            let arr = [];
            for (let i = 0; i < duration.length; i++) {
                arr = arr.concat(courses.filter(course => {
					switch (duration[i]) {
						case "less":
							if ((course.expected_duration_unit === "days") ||
								(course.expected_duration_unit === "weeks" && course.expected_duration <= 4))
								return true;
							break;
						case "1":
							if ((course.expected_duration_unit === "months" && course.expected_duration <= 3) ||
								(course.expected_duration_unit === "weeks" && course.expected_duration >= 5 && course.expected_duration <= 12))
								return true;
							break;
						case "3":
							if ((course.expected_duration_unit === "months" && course.expected_duration >= 4) ||
								(course.expected_duration_unit === "weeks" && course.expected_duration > 12))
								return true;
							break;
						default:
							return false;
					}
				}
			));
            }
            courses = arr;
        }
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
                            <FilterAll updateFilter={this.updateFilter}/>
                            <div className="flex-row courses-block">
                                {courses.map(item => (
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