import React from 'react'

const Welcome = (props) => {
    return (
        <div className="welcome">
            <div className="wrapper">
                <div className="info">
                    <h1>Database of your knowledge</h1>
                </div>
                <div className="steps-block">
                    <header>
                        <h2>Record and keep track of your progress</h2>
                    </header>
                    <div className="flex-row">
                        <div className="step">
                            <p>Define your area of expertize</p>
                        </div>
                        <div className="step">
                            <p>Complete course</p>
                        </div>
                        <div className="step">
                            <p>Update your skills</p>
                        </div>
                        <div className="step">
                            <p>Share your profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;