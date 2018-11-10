import React from 'react'

const Carousel = (props) => {
    const {imgSrc, title, caption, showNext, showPrev} = props;
    return (
        <div className="carousel-item">
            <img src={imgSrc} alt="slider image"/>
            <div className="wrapper slider-text">
            <i className="icon-left-open-big" onClick={showPrev}/>
                <div className="info flex-col">
                    <h1>{title}</h1>
                    <p>{caption}</p>
                </div>
            <i className="icon-right-open-big" onClick={showNext}/>
            </div>
        </div>

    );
};

export default Carousel;