import React, { Component } from 'react'
import booksImg from "../../img/books.jpeg"
import librImg from "../../img/welcome-bg.jpeg"

class LandingWelcome extends Component {
    // constructor() {
    //     super();
    //     this.indx = 0;
    //     this.imagesElems = document.getElementsByClassName("sliderImg");
    //     console.log('in constructor', this.imagesElems);
    //     this.carousel = this.carousel.bind(this);
    // }
    // componentDidMount() {
    //     this.carousel();
    // };
    //
    //
    // carousel() {
    //     console.log('in carousel', this.imagesElems);
    //     for (let i = 0; i < this.imagesElems.length; i++) {
    //         this.imagesElems[i].style.display = "none";
    //     }
    //     this.indx++;
    //     if (this.indx > this.imagesElems.length) {
    //         this.indx = 1;
    //     }
    //     this.imagesElems[this.indx - 1].style.display = "block";
    //     setTimeout(this.carousel, 5500);
    //
    //
    // }

    render() {
        return (
            <div className="welcome">
                <img className="sliderImg" src={booksImg}/>
                <img className="sliderImg" src={librImg}/>
                <div className="wrapper">
                    <div className="info flex-col">
                        <h1>All knowledge in one place</h1>
                        <p>Find, learn and keep records of all your skills </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default LandingWelcome;
