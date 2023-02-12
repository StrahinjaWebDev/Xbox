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
      textpgn: "Simply Next Gen",
      dscpgn: "Expirience next gen with Fall Guys on Xbox Series for only $299",
      btnpgn:'Buy Now >',
    },
    {
      src: Slide2Img,
      alt: "Image 2",
      textBH: "Xbox celebrates Black History Month",
      dscBH: "Here are some of the ways we're celebrating - join us.",
      btnBH: 'Learn More >'
    },
    {
      src: Slide3Img,
      alt: "Image 3",
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
    
    <div className="relative  mt-2">
      <img
        className="w-screen h-[36rem] md:h-[52rem] xl:h-[52rem]"
        src={images[index].src}
        alt={images[index].alt}
      />
      
      
<div  className="absolute w-screen h-[22rem] flex items-center text-white justify-center bottom-14 ">
<div className="absolute grid grid-rows-3 w-[80v]  items-center justify-center gap-10" >
<span className="text-white text-2xl md:text-4xl">{images[index].textBH}</span>
<span className="pt-4 md:text-2xl">{images[index].dscBH}</span>
<button className="w-[10rem] h-[3rem] bg-white text-black ml-[5rem] md:ml-[13rem]" >{images[index].btnBH}</button>


</div>

<div  className="absolute grid grid-rows-3 w-[80%]  items-center gap-3 justify-center ">

<span className="text-white text-4xl md:text-4xl">{images[index].text007}</span>
<span className=" text-white md:text-2xl">{images[index].dsc007}</span>
<button className=" w-[10rem] h-[4.7rem] bg-none text-black ml-[5rem] md:ml-[13rem]">{images[index].btn007}</button>


</div>

<div className="absolute grid grid-rows-3  justify-center  items-center ">
<span className="text-black text-4xl md:text-4xl">{images[index].textpgn}</span>
<span className="text-black md:text-2xl">{images[index].dscpgn}</span>
<button className="text-black bg-none">{images[index].btnpgn}</button>

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
