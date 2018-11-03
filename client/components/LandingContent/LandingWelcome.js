import React, { Component } from 'react'
import booksImg from "../../img/books.jpeg"
import librImg from "../../img/welcome-bg.jpeg"

class LandingWelcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.carousel = this.carousel.bind(this);
    }
    componentDidMount() {
        this.carousel();
    };


    carousel() {
        let x = document.getElementsByClassName("sliderImg");
        //console.log(x);
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        this.setState((prevState)=> ({
            index: prevState.index + 1
        }), () => {
            if (this.state.index > x.length) {
                    console.log('before',this.state.index);
                this.setState({index: 0}), () => {
                    console.log('after', this.state.index);
                    x[this.state.index - 1].style.display = "block";
                    setTimeout(this.carousel, 2500);
                };
            } else {
                console.log('in else', this.state.index);
                x[this.state.index - 1].style.display = "block";
                setTimeout(this.carousel, 2500);
            }
        });


    }

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

// LandingWelcome = () => {
//     return (
        {/*<div className="welcome">*/}
            {/*<img src="../client/img/welcome-bg.jpeg"/>*/}
            {/*<img src="../client/img/books.jpeg"/>*/}
            {/*<div className="wrapper">*/}
                {/*<div className="info flex-col">*/}
                    {/*<h1>All knowledge in one place</h1>*/}
                    {/*<p>Find, learn and keep records of all your skills </p>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}
//     );
// }
//
// export default LandingWelcome;