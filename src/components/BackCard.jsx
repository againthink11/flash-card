import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from a library like react-icons

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const NextArrow = ({ currentSlide }) => (
    <div
      className={`slick-arrow slick-next ${currentSlide === 2 ? 'disabled' : ''}`}
      onClick={() => {
        if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
      }}
      style={{background:"red", color:"red", backgroundColor:"red"}}
    >
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ currentSlide }) => (
    <div
      className={`slick-arrow slick-prev ${currentSlide === 0 ? 'disabled' : ''}`}
      onClick={() => {
        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
      }}
       style={{background:"red", color:"red", backgroundColor:"red"}}
    >
      <FaArrowLeft />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow currentSlide={currentSlide} />,
    prevArrow: <PrevArrow currentSlide={currentSlide} />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };


  return (
    <div className='' style={{ padding: '20px' }}>
      <h2>React Slick Carousel Example</h2>
      <Slider {...settings}>
        <div>
          <img src="https://placekitten.com/800/400" alt="Slide 1" />
        </div>
        <div>
          <img src="https://placekitten.com/800/401" alt="Slide 2" />
        </div>
        <div>
          <img src="https://placekitten.com/800/402" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
