import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


export const HeroSlider = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className='relative'>
          <Image layout='fill' objectFit='cover' src="/images/bg.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/bg2.png" alt="Slide 2" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      
    </div>
  )
}
