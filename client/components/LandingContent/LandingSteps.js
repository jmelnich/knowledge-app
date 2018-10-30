import React from 'react'

const LandingSteps = () => {
    return (
        <section id="steps">
            <div className="wrapper">
                <div className="section-content">
                    <h2>Record and keep track of your progress</h2>
                    <div className="flex-row steps-block flex-wrap-s">
                        <div className="step">
                            <h3>Define expertize</h3>
                            <p>Find the most relevant course among the diversity of e-learning platforms
                                from the well-organized catalog.
                            </p>
                        </div>
                        <div className="step">
                            <h3>Complete course</h3>
                            <p>Get the highest
                                quality learning possible from the best schools and universities.
                            </p>
                        </div>
                        <div className="step">
                            <h3>Update your skills</h3>
                            <p>Keep track of your progress in one place and get the insight of the experts
                                on how to grow futher.</p>
                        </div>
                        <div className="step">
                            <h3>Share your profile</h3>
                            <p>Get the visual statistics as a addition to your CV or portfolio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingSteps;