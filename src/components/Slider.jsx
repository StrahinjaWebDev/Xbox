import React, { useState, useEffect } from 'react';
import Slide1Img from '../assets/Slide1.jpg'
import Slide2Img from '../assets/Slide2.jpg'
import Slide3Img from '../assets/Slide3.jpg'
import {BsPlay} from 'react-icons/bs'

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [paused, setPaused] = useState(false);
  const images = [
    {
      src: Slide1Img,
      alt: 'Image 1',
      texta: 'Simply Next Gen',
      text4:'Expirience next gen with Fall Guys on Xbox Series for only $299',
      button1: ''
    },
    {
      src: Slide2Img,
      alt: 'Image 2',
      text: 'Xbox celebrates Black History Month',
      text2:"Here are some of the ways we're celebrating -join us."
    },
    {
      src: Slide3Img,
      alt: 'Image 3',
      text: 'GoldenEye 007',
      text3:'Play with Xbox Game Pass Ultimate'
    }
  ];

  useEffect(() => {
    if (!paused) {
      const id = setInterval(() => {
        setIndex((index + 1) % images.length);
      }, 5000);
      setIntervalId(id);
    }
    return () => clearInterval(intervalId);
  }, [index, images.length, paused]);

  const handlePause = () => {
    clearInterval(intervalId);
    setPaused(!paused);
  };

  const handleDotClick = (i) => {
    clearInterval(intervalId);
    setIndex(i);
    setPaused(true);
  };

  return (
    <div className="absolute  mt-2">
      <img
        className="w-screen h-[37rem]"
        src={images[index].src}
        alt={images[index].alt}
        
      />



      <div className="absolute bottom-0 left-[10rem]">
      <button className="text-[1.6rem] text-red-500 " onClick={handlePause} >
          {paused ? '||' : "||"}
        </button>
      </div>
      
      <p className="absolute left-[5rem] top-[18rem] w-[270px] text-white text-3xl ">{images[index].text}</p>

      <p className="absolute  left-[6rem] top-[18rem] text-black text-3xl ">{images[index].texta}</p>

<p className="absolute left-[5rem] top-[23rem] text-white text-l w-[270px]">{images[index].text2}</p>

<p className="absolute left-[5rem] top-[21rem] text-white text-l ">{images[index].text3}</p>

<p className="absolute w-[240px] left-[6rem] top-[21rem] text-black text-l ">{images[index].text4}</p>

     

     

      <div className="absolute bottom-4  left-[12rem]">
        {images.map((_, i) => (
          <span
            key={i}
            className={`inline-block h-3 w-3 m-1 border-white rounded-full ${
              i === index ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
