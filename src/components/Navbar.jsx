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
      <div className="flex gap-8 items-center pt-3 ">
        <button onClick={handleNav} className="pl-3">
          <RxHamburgerMenu size="1.5rem" />
        </button>

        <button  >
          <VscSearch size="1rem" />
        </button>
        <img className="w-[7rem]  pb-2 ml-[2rem]" src={Microsoft} alt="/" />
        <button>
          <AiOutlineShoppingCart size="1.1rem" />
        </button>
        <button >
          <BsPersonPlus size="1.2rem" />
        </button>
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
