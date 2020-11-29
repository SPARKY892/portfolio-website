import './Slideshow.scss';
import React from 'react';

const Slideshow = ({ images }) => {

    const largeImages = images.map((image) => {
        return (
            <div className="mySlides">
                <img src={image} style={{width:'100%'}} />
            </div>
        );
    });

    const thumbnails = images.map((image, index) => {
        return (
            <div className="column">
                <img className="demo cursor" src={image} style={{width:'100%'}} />
            </div>
        );
    });


    return (
        <div className="slideshowContainer">
            {largeImages}
            <div className="row">
                {thumbnails}
            </div>
        </div>
    );
};

export default Slideshow;