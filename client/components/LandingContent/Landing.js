import React from 'react'
import LandingWelcome from './LandingWelcome'
import LandingSteps from './LandingSteps'
import LandingAbout from './LandingAbout'
import LandingBegin from './LandingBegin'
import LandingPartners from './LandingPartners'
import LandingContacts from './LandingContacts'

const Landing = () => {
    return (
        <div>
            <LandingWelcome/>
            <main>
                <LandingSteps/>
                <LandingAbout/>
                <LandingBegin/>
                <LandingPartners/>
                <LandingContacts/>
            </main>
        </div>
    )
}

export default Landing;