import React from 'react'
import LandingSlider from './LandingSlider'
import LandingSteps from './LandingSteps'
import LandingAbout from './LandingAbout'
import LandingBegin from './LandingBegin'
import LandingPartners from './LandingPartners'
import LandingContacts from './LandingContacts'
import LoginForm from '../Forms/LoginForm'
import SignupForm from "../Forms/SignupForm";
import RestorePasswordForm from "../Forms/RestorePasswordForm"

const Landing = () => {
    return (
        <div>
            <LoginForm/>
            <SignupForm/>
            <RestorePasswordForm/>
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