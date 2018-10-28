import React, {Component} from 'react'
import {googleKey} from '../../config'

class LandingContacts extends Component {
    componentDidMount () {
        // Connect the initMap() within this class to the global window context, so GoogleMaps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        this.addScript(`https://maps.googleapis.com/maps/api/js?key=${googleKey}&callback=initMap`);
    };

    addScript (src) {
        let ref = window.document.getElementsByTagName("script")[0];
        let script = window.document.createElement("script");
        script.src = src;
        script.async = true;
        ref.parentNode.insertBefore(script, ref);
    };

    initMap() {
        const uluru = {lat: 50.435567, lng: 30.513601};
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: uluru
        });
        const marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    };

    render () {
        return (
            <section id="contacts">
                <div className="wrapper">
                    <div className="section-content">
                        <h2>Our contacts</h2>
                        <div className="flex-row-between">
                            <div id="map">
                            </div>
                            <div className="contact-form">
                                <form>
                                    <h3>Contact us</h3>
                                    <fieldset className="flex-col">
                                        <input type="email" name="email" id="email"
                                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" size="30"
                                               placeholder="email@gmail.com"
                                               required/>
                                        <input placeholder="Name" type="text" required/>
                                        <input placeholder="Email" type="email"
                                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                               size="30" required/>
                                        <textarea rows="5" cols="50" placeholder="Your message"/>
                                        <button className="submit" disabled formNoValidate
                                                type="submit">Send</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};




export default LandingContacts;