import React from 'react'

const FilterAll = (props) => {
    const {updateFilter} = props;
    return (
        <form className="flex-row" id="filters">
            <fieldset>
                <h3>Platform</h3>
                <ul className="filter-set">
                    <li className="flex-row"><input type="checkbox" name="platform" value="udacity" onChange={updateFilter}/><label>Udacity</label></li>
                    <li className="flex-row"><input type="checkbox" name="platform" value="stepik" onChange={updateFilter}/><label>Stepik</label></li>
                    <li className="flex-row"><input type="checkbox" name="platform" value="udemy" onChange={updateFilter}/><label>Udemy</label></li>
                    <li className="flex-row"><input type="checkbox" name="platform" value="coursera" onChange={updateFilter}/><label>Coursera</label></li>

                </ul>
            </fieldset>
            <fieldset>
                <h3>Category</h3>
                <ul className="filter-set">
                    <li className="flex-row"><input type="checkbox" name="category" value="general" onChange={updateFilter}/><label>General</label></li>
                    <li className="flex-row"><input type="checkbox" name="category" value="Georgia Tech Masters in CS" onChange={updateFilter}/><label>Georgia Tech Masters in CS</label></li>
                    <li className="flex-row"><input type="checkbox" name="category" value="iOS" onChange={updateFilter}/><label>iOS</label></li>
                    <li className="flex-row"><input type="checkbox" name="category" value="Android" onChange={updateFilter}/><label>Android</label></li>
                    <li className="flex-row"><input type="checkbox" name="category" value="Software Engineering" onChange={updateFilter}/><label>Software Engineering</label></li>
                    <li className="flex-row"><input type="checkbox" name="category" value="Non-Tech" onChange={updateFilter}/><label>Non-Tech</label></li>
                    <li className="flex-row"><input type="checkbox" name="category" value="Web Development" onChange={updateFilter}/><label>Web Development</label></li>
                    <li className="flex-row"><input type="checkbox" name="category" value="Data Science" onChange={updateFilter}/><label>Data Science</label></li>
                </ul>
            </fieldset>
            <fieldset>
                <h3>Level</h3>
                <ul className="filter-set">
                    <li className="flex-row"><input type="checkbox" name="level" value="beginner" onChange={updateFilter}/><label>Beginner</label></li>
                    <li className="flex-row"><input type="checkbox" name="level" value="intermediate" onChange={updateFilter}/><label>Intermediate</label></li>
                    <li className="flex-row"><input type="checkbox" name="level" value="advanced" onChange={updateFilter}/><label>Advanced</label></li>
                </ul>
            </fieldset>
            <fieldset>
                <h3>Duration</h3>
                <ul className="filter-set">
                    <li className="flex-row"><input type="checkbox" name="duration" value="less" onChange={updateFilter}/><label>1 month and less</label></li>
                    <li className="flex-row"><input type="checkbox" name="duration" value="1" onChange={updateFilter}/><label>1-3 months</label></li>
                    <li className="flex-row"><input type="checkbox" name="duration" value="3" onChange={updateFilter}/><label>3+ months</label></li>
                </ul>
            </fieldset>
        </form>
    );
}

export default FilterAll;