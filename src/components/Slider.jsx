import React, { useState, useEffect } from "react";
import Slide1Img from "../assets/Slide1.jpg";
import Slide2Img from "../assets/Slide2.jpg";
import Slide3Img from "../assets/Slide3.jpg";
import { BsPlay } from "react-icons/bs";
import {AiOutlineRight} from 'react-icons/ai';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [paused, setPaused] = useState(false);
  const images = [
    {
      src: Slide1Img,
      alt: "Image 1",
      texta: "Simply Next Gen",
      text4: "Expirience next gen with Fall Guys on Xbox Series for only $299",
      button1: "",
    },
    {
      src: Slide2Img,
      alt: "Image 2",
      text: "Xbox celebrates Black History Month",
      text2: "Here are some of the ways we're celebrating -join us.",
    },
    {
      src: Slide3Img,
      alt: "Image 3",
      text: "GoldenEye 007",
      text3: "Play with Xbox Game Pass Ultimate",
    },
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
    <div className="relative  mt-2">
      <img
        className="w-screen h-[37rem]"
        src={images[index].src}
        alt={images[index].alt}
      />



      <div className="SECONDSLIDE text-white absolute w-[70%] h-[30%] left-[5rem] bottom-[8rem] grid grid-rows-3 items-center justify-center gap-6">
        <p className=" w-[270px] text-white text-3xl ">
          {images[index].text}
        </p>
        <p className=" text-white text-l ">
        {images[index].text2}
      </p>
      <button className="uppercase h-[2.5rem] ml-8 bg-white text-black font-bold w-[50%]">Learn More > </button>
      </div>

      <div className="absolute bottom-0 left-[10rem] flex justify-center">
        <button className="text-[1.4rem] w-[1.4rem]  bg-black text-white mb-4" onClick={handlePause}>
          {paused ? "||" : "||"}
        </button>
      </div>

      <p className="absolute  left-[6rem] top-[18rem] text-black text-3xl ">
        {images[index].texta}
      </p>

     

      <p className="absolute left-[5rem] top-[22rem] text-white text-l ">
        {images[index].text3}
      </p>

      <p className="absolute w-[240px] left-[6rem] top-[21rem] text-black text-l ">
        {images[index].text4}
      </p>

      <div className="absolute bottom-4  left-[12rem]">
        {images.map((_, i) => (
          <span
            key={i}
            className={`inline-block h-3 w-3 m-1 border-white rounded-full ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
