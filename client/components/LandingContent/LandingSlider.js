import React, { Component } from 'react';
import Carousel from '../Carousel';
import bg1 from '../../img/welcome-bg.jpeg';
import bg2 from '../../img/books.jpeg';

const src = [bg1, bg2];

const title = ['All knowledge in one place', 'Find career of your dream'];
const caption = ['Find, learn and keep records of all your skills',
                'Share your profile with the best companies'];

class LandingSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0
        };

        this.showNext = this.showNext.bind(this);
        this.showPrev = this.showPrev.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.showNext();
        }, 9000);
    };

    componentWillUnmount () {
        clearTimeout(this.interval);
    }

    showNext () {
        const nextIdx = this.state.idx === src.length - 1 ? 0 : this.state.idx + 1;
        this.setState({
            idx: nextIdx
        });
    }

    showPrev () {
        const prevIdx = this.state.idx === 0 ? src.length - 1 : this.state.idx - 1;
        this.setState({
            idx: prevIdx
        });
    }

    render() {
        return (
            <div className="welcome">
                <Carousel imgSrc={src[this.state.idx]}
                          showNext={this.showNext}
                          showPrev={this.showPrev}
                          title={title[this.state.idx]}
                          caption={caption[this.state.idx]}
                />
            </div>
        );
    }
}
export default LandingSlider;
