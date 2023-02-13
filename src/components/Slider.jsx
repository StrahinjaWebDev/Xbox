import React, { useState, useEffect } from "react";
import Slide1Img from "../assets/Slide1.jpg";
import Slide2Img from "../assets/Slide2.jpg";
import Slide3Img from "../assets/Slide3.jpg";
import Slide1ImgMob from '../assets/Slide1mob.jpg'
import Slide2ImgMob from '../assets/Slide2Mob.jpg'
import Slide3ImgMob from '../assets/Slide3Mob.jpg'
import { BsPlay } from "react-icons/bs";
import {AiOutlineRight} from 'react-icons/ai';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [paused, setPaused] = useState(false);
  const images = [
    {
      src: Slide1Img,
      srcmob:Slide1ImgMob,
      alt: "Image 1",
      textpgn: "Simply Next Gen",
      dscpgn: "Expirience next gen Series for only $299",
      btnpgn:'Buy Now >',
    },
    {
      src: Slide2Img,
      srcmob:Slide2ImgMob,
      alt: "Image 2",
      textBH: "Hogwarts Legacy",
      dscBH: "Spells, potions, and magical beasts. The wizarding world awaits you.",
      btnBH: 'Get It Now >'
    },
    {
      src: Slide3Img,
      alt: "Image 3",
      srcmob:Slide3ImgMob,
      text007: "GoldenEye 007",
      dsc007: "Play with Xbox Game Pass Ultimate",
      btn007: 'Get It Now >',
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
    
    <div className="relative  mt-2 ">
      <img
        className="w-screen h-[36rem] md:h-[52rem] xl:h-[42rem] hidden lg:block"
        src={images[index].src}
      />

<img
        className="w-screen h-[36rem] md:h-[52rem] xl:h-[42rem] max-w-screen-lg lg:hidden"
        src={images[index].srcmob}
      />


      
      
<div  className="absolute w-screen h-[22rem] flex items-center text-white justify-center bottom-9 ">

<div className="absolute grid grid-rows-3 w-[80vw]   gap-3  justify-center   xl:w-[34vw] " >

<span className="flex justify-center items-center text-white text-3xl font-semibold md:text-5xl">{images[index].textBH}</span>
<span className="flex justify-center items-center pl-7  md:font-semibold md:text-3xl">{images[index].dscBH}</span>

<button className="text-blue-500 w-[100%] flex justify-center items-center  font-semibold  xl:text-xl">{images[index].btnBH} {images[index].btn007} {images[index].btnpgn}</button>



</div>

<div  className="absolute grid grid-rows-3 w-[80vw]   gap-3   ">

<span className="flex justify-center items-center text-3xl font-semibold md:text-5xl">{images[index].text007}</span>
<span className=" flex justify-center items-center pl-7 pb-6   md:font-semibold md:text-3xl">{images[index].dsc007}</span>



</div>

<div className="absolute grid grid-rows-3 w-[80vw]   gap-3  ">
<span className="flex justify-center items-center text-black text-3xl font-semibold md:text-5xl">{images[index].textpgn}</span>
<span className="text-black flex justify-center items-center pl-7 pb-6   md:font-semibold md:text-3xl">{images[index].dscpgn}</span>



</div>

</div>
      
     
  


     

      <div className="absolute w-screen h-[4rem] flex items-center justify-center bottom-4  gap-3">
      <button className="text-[1.4rem]   bg-none text-red-400 mr-2" onClick={handlePause}>
          {paused ? "||" : "||"}
        </button>
        {images.map((_, i) => (
          <span
            key={i}
            className={`inline-block h-4 w-4  border-white  rounded-full ${
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
