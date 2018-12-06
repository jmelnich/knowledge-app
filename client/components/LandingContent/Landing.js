import React from 'react';
import LandingSlider from './LandingSlider';
import LandingSteps from './LandingSteps';
import LandingAbout from './LandingAbout';
import LandingBegin from './LandingBegin';
import LandingPartners from './LandingPartners';
import LandingContacts from './LandingContacts';
import LandingGallery from "./LandingGallery";

const Landing = () => {
    return (
        <div>
            <LandingSlider/>
            <main>
                <LandingSteps/>
                <LandingAbout/>
                <LandingBegin/>
                <LandingPartners/>
                <LandingContacts/>
                <LandingGallery/>
            </main>
        </div>
    )
}

export default Landing;