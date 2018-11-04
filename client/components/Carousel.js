import React from 'react'

const Carousel = (props) => {
    const {imgSrc, titleSrc, explSrc, showNext} = props;
    return (
        <div>
            <img className="animate-left" src={imgSrc} alt="slider image"/>
            <div className="wrapper slider-text">
                <div className="info flex-col">
                    <h1>{titleSrc}</h1>
                    <p>{explSrc}</p>
                </div>
            </div>
        </div>

    );
}

export default Carousel;