import React, { useState } from "react";
import Microsoft from "../assets/Microsoft.png";
import XBOX from "../assets/Xbox.png";
import { BsChevronDown } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";




const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-center items-center pt-3 gap-[4rem] md:gap-[14rem] xl:gap-0 xl:ml-[8rem] xl:w-[80%] ">
        <div className="flex justify-center items-center gap-[2rem]  lg:hidden ">
        <button onClick={handleNav} className="">
          <RxHamburgerMenu size="1.5rem" />
        </button>

        <button className="pt-1 lg:hidden " >
          <VscSearch size="1rem " />
        </button>
        </div>
        <div className="xl:flex xl:gap-7 xl:justify-center xl:items-center">


        <img className="w-[6.8rem] xl:w-[10%] xl:h-[10%] pb-2 " src={Microsoft} alt="/" />
        <label className="text-3xl hidden xl:block " >|</label>
        
        
        <img className="hidden xl:block xl:w-[6%] xl:h-[6%] " src={XBOX}  /> 
            <span className="hidden xl:block">Game Pass</span> 
            <span className="hidden xl:block">Games</span> 
            <span className="hidden xl:block">Devices</span> 
            <span className="hidden xl:block">Play</span> 
            <span className="hidden xl:block">Community</span> 
            <span className="hidden xl:block">Support</span> 
            <span className="hidden xl:block">My Xbox</span> 
            <span className="hidden xl:block">Developers</span>
        </div>

      

        <div className="flex justify-center items-center gap-[2rem]">
        <button >
          <AiOutlineShoppingCart size="1.1rem" />
        </button>
        
        <button >
        
          <BsPersonPlus size="1.2rem" />
        </button>
        </div>
      </div>
      {nav ? (
        <div className="fixed w-screen h-[92vh] z-[999] bg-white flex flex-col gap-[0.975rem] pt-6 pl-4 text-[0.925rem] ">
          <span>Microsoft 365</span> <hr />
          <span>Teams</span> <hr />
          <span>Windows</span> <hr />
          <span>Surface</span> <hr />
          <span>Xbox</span> <hr />
          <span>Deals</span> <hr />
          <span>Small Business</span> <hr />
          <span>Support</span> <hr />
          <span>Software</span> <hr />
          <span>PCs & Devices</span> <hr />
          <span>Entertainment</span> <hr />
          <span>Business</span> <hr />
          <span>Developer & IT</span> <hr />
          <span>Other</span> <hr />
          <span>View Sitemap</span>
          <hr className="bg-black " />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidenav;
