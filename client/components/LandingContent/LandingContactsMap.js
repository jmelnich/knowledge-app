import React, {Component} from 'react';
import {googleKey} from "../../config";

class LandingContactsMap extends Component {
    componentDidMount() {
        // Connect the initMap() within this class to the global window context, so GoogleMaps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        this.addScript(`https://maps.googleapis.com/maps/api/js?key=${googleKey}&callback=initMap`);
    };
    addScript(src) {
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
    render() {
        return (
            <div id="map"></div>
        );
    }
}

export default LandingContactsMap;