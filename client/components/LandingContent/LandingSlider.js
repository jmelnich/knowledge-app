import React, { Component } from 'react'
import Carousel from '../Carousel'

const imagesSrc = ['../../client/img/welcome-bg.jpeg',
                    '../../client/img/books.jpeg'
];

const titleSrc = ['All knowledge in one place', 'Find career of your dream'];
const explSrc = ['Find, learn and keep records of all your skills', 'Share your profile with the best' +
' companies'];

class LandingSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0
        };

        this.showNext = this.showNext.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this.showNext();
        }, 5000);
    };

    showNext () {
        if (this.state.idx >= imagesSrc.length - 1) {
            this.setState({
                idx: 0
            })
        } else {
            this.setState((prevState) => ({
                idx: prevState.idx + 1
            }))
        }
    }

    render() {
        return (
            <div className="welcome">
                <Carousel imgSrc={imagesSrc[this.state.idx]}
                          showNext={this.showNext}
                          titleSrc={titleSrc[this.state.idx]}
                          explSrc={explSrc[this.state.idx]}
                />
            </div>
        );
    }
}
export default LandingSlider;
