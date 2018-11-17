import React from 'react'

const LandingAbout = () => {
    return (
        <section id="about">
            <div className="wrapper flex-row-between">
                <div className="section-content">
                    <h2>About us</h2>
                    <ul>
                        <li>
                            <i className="icon-book"/>
                            <p>Mission: Our goal is to democratize education through the offering of world-class
                                higher education opportunities that are accessible, flexible, and economical. </p>
                        </li>
                        <li>
                            <i className="icon-users"/>
                            <p>Community: Database knowledge is a place where students are a community of global
                                learners united in a shared goal of uplift and transformation.
                            </p>
                        </li>
                        <li>
                            <i className="icon-comment"/>
                            <p>Support: Resume reviews, interview prep, expert career guidance.</p>
                        </li>
                        <li>
                            <i className="icon-bank"/>
                            <p>Best courses: it is a place where lifelong learners come to learn the skills
                                they need, to land the jobs they want, to build the lives they deserve.</p>
                        </li>
                        <li>
                            <i className="icon-laptop"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at
                                cupiditate dicta</p>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default LandingAbout;