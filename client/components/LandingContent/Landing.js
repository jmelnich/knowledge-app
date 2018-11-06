import React from 'react'
import LandingSlider from './LandingSlider'
import LandingSteps from './LandingSteps'
import LandingAbout from './LandingAbout'
import LandingBegin from './LandingBegin'
import LandingPartners from './LandingPartners'
import LandingContacts from './LandingContacts'
import Login from '../Forms/Login'
import Signup from "../Forms/Signup";
import RestorePassword from "../Forms/RestorePassword"

const Landing = () => {
    return (
        <div>
            <Login/>
            <Signup/>
            <RestorePassword/>
            <LandingSlider/>
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