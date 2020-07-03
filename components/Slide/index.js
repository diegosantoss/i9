import React from "react";
import Slider from "react-slick";

import styles from './index.module.css';

const Slide = ({slide}) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className={styles.slide_container}>
      <Slider {...settings}>
        {slide.map(item => (
          <>
            <section className={styles.slide_image} key={item.image}>
              <img src={item.image} width="1920" />
            </section>
            <section className={styles.slide_content} style={{ backgroundImage: `url(${item.image})` }}>
              <section className="container">
                <section className="slide_content_altered">
                  <h2>{item.text}</h2>
                </section>
                
              </section>
            </section>
          </>
        ))}
      </Slider>
      
    </section>

  );
}

export default Slide;