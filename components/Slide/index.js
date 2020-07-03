import React from "react";
import Slider from "react-slick";

const Slide = ({slide}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {slide.map(item => (
        <div key={item.image}>
          <img src={item.image} />
        </div>
      ))}
    </Slider>
  );
}

export default Slide;