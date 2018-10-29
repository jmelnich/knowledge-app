import React from 'react'
import LandingContactsMap from './LandingContactsMap'
import LandingContactsForm from './LandingContactsForm'

const LandingContacts = () => {
    return (
        <section id="contacts">
            <div className="wrapper">
                <div className="section-content">
                    <h2>Our contacts</h2>
                    <div className="flex-row-between">
                        <LandingContactsMap/>
                        <LandingContactsForm/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingContacts;