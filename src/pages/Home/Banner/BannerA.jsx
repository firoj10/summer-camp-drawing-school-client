import React from 'react';
import  './Banner.css'
import img1 from './../../../assets/1.jpg'
import img2 from './../../../assets/2.jpg'
import img3 from './../../../assets/3.jpg'

const BannerA = () => {
  const sliderData = [
    {
      text: 'Welcome to our website!',
      info: 'Learn more about our products and services.',
      message: 'Contact us for any inquiries.',
      imageUrl: img3
    },
    {
      text: 'Exciting new features added!',
      info: 'Upgrade your experience with our latest updates.',
      message: 'Try them out today!',
      imageUrl:img2
    },
    {
      text: 'Limited-time offer!',
      info: 'Get a 20% discount on all purchases.',
      message: "Don't miss out, shop now!",
      imageUrl: img1
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
    );
  };

  const { text, info, message, imageUrl } = sliderData[currentSlide];

  return (
    <div className="slider">
      <div className="slider-image">
        <img src={imageUrl} alt="Slider" />
      </div>
      <div className="slider-content">
        <h2>{text}</h2>
        <p>{info}</p>
        <p>{message}</p>
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default BannerA;
