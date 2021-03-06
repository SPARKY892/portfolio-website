import './Slideshow.scss';
import React, {useEffect, useState} from 'react';

const Slideshow = ({ images }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "flex";
        dots[slideIndex].className += " active";
    }, [slideIndex]);

    const largeImages = images.map((image) => {
        return (
            <div className="mySlides">
                <img className="largeImage" src={image} style={{width:'100%'}} />
            </div>
        );
    });

    const thumbnails = images.map((image, index) => {
        return (
            <div className="column">
                <img className="demo cursor" onClick={() => setSlideIndex(index)} src={image} style={{width:'100%'}} />
            </div>
        );
    });


    return (
        <div className="slideshowContainer">
            <div className="slideContainer">
                {largeImages}
            </div>
            <div className="row">
                {thumbnails}
            </div>
        </div>
    );
};

export default Slideshow;