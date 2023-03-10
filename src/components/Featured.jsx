import React from "react";
import MLB from "../assets/MLB.jpg";
import GamePas from "../assets/Gamepas.jpg";
import Control from "../assets/Control.jpg";
import Rush from "../assets/Rush.jpg";
import Minecraft from "../assets/Minecraft.jpg";
import Redfall from "../assets/Redfall.jpg";
import Deadspace from "../assets/Deadspace.jpg";
import Age from "../assets/Ageofempires.jpg";
import Diablo from "../assets/Diablo.jpg";
import Overwatch from "../assets/Overwatch.jpg";
import Minecraft2 from "../assets/MinecraftEdu.jpg";
import Fortnite from "../assets/Fortnight.jpg";
import BlackH from "../assets/BlackHH.jpg";
import Gear from "../assets/Gear.jpg";
import Beast from "../assets/Beast.jpg";
import GamePassSm from "../assets/GamePassSM.jpg";
import {BiWorld} from 'react-icons/bi'

function Featured() {
  return (
    <div className="grid grid-rows-12 gap-[0.3rem] h-[300rem] md:h-[400rem] xl:h-[201rem] xl:grid-rows-2">
      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[55rem] xl:justify-start   ">
        <img
          src={Beast}
          className="h-[30.5rem] w-[98vw] absolute  top-0   md:h-[55rem] xl:w-[50%] xl:h-[80%] "
        />
        <div className="flex justify-end w-[100%] h-[120%]">
          <div className="w-1/2 h-[100%] flex justify-end items-end">
            <img className="h-[33%] w-[50%] hidden xl:block " src={Rush} />
            <span className=" bg-green-700 w-[50%] h-[33%] hidden xl:block mr-1">
            <div className="w-[80%] h-[80%] grid  content-center items-center ml-[5%] gap-5">
              <h2 className="text-4xl text-white">Hi-fi Rush</h2>
              <span className="text-lg text-white">Feel the beat</span>
              <button className="text-white w-[22%] ">Get it now ></button>
              </div>
            </span>
          </div>

          <span className=" bg-green-700 w-[24.8%] h-[33%] hidden xl:block  ">
            <div className="w-[80%] h-[80%] grid  content-center items-center ml-[5%] gap-5">
              <h2 className="text-4xl text-white">Discover your next favorite game</h2>
              <span className="text-lg text-white">Play hundreds of high-quality games with friends on console, PC, phones and tablets.</span>
              <button className="text-white w-[55%] pr-12">Join Xbox Game Pass ></button>
            </div>
          </span>
          <img src={GamePassSm} className="hidden xl:block h-[33%] w-[25%]" />

          <div className=" flex justify-end items-end">
            <img
              className="absolute h-[80%] w-[49.8%] hidden xl:block "
              src={Control}/>

              
          </div>
        </div>

        <div className="bg-gray-500 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:bg-inherit   md:flex md:items-end    ">
          <div className="w-[94%] h-[70%] grid grid-rows-3 md:h-[50%] xl:mb-[14rem] ">
            <h2 className="text-3xl text-white md:text-5xl">
              Find your magical beast
            </h2>
            <span className="text-sm text-white md:text-xl md:pt-4 ">
              Take a quiz to discover your creature match from the Wizarding
              World
            </span>
            <button className=" bg-inherit uppercase text-white w-[31%] font-semibold md:w-[17%] md:h-1/2 xl:w-[6%]">
              Learn More >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem]  xl:hidden">
        <img
          src={GamePas}
          className="h-[15.5rem] w-[98vw] absolute  top-0   md:h-[28rem] xl:hidden"
        />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem] xl:hidden">
          <div className="w-[94%] h-[90%] grid grid-rows-3 md:h-[75%] md:items-center">
            <h2 className="text-3xl text-white md:text-4xl">
              Discover your next favorite game
            </h2>
            <span className="text-sm text-white pt-6 md:text-lg">
              Play hundreds of high-quality games with friends on console, PC,
              phones and tablets.
            </span>
            <button className=" bg-inherit uppercase text-white w-[50%] font-semibold md:w-[27%]">
              Join Xbox Game Pass >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[55rem]">
        <img
          src={Control}
          className="h-[25.5rem] w-[98vw] absolute  top-0   md:h-[55rem] xl:hidden"
        />

        <span className="bg-green-700 h-[42%] w-1/4 hidden xl:block">
        <div className="w-[80%] h-[80%] grid  content-center items-center ml-[5%] gap-5">
              <h2 className="text-4xl text-white">Minecraft</h2>
              <span className="text-lg text-white">Unite the Overlord</span>
              <button className="text-white w-[31%] ">Pre-Order Now ></button>
              </div>
        </span>
        <img className="w-1/4 h-[42%] hidden xl:block" src={Minecraft} />

        <span className="bg-green-700 h-[42%] w-1/4 ml-1 hidden xl:block">
        <div className="w-[80%] h-[80%] grid  content-center items-center ml-[5%] gap-5">
              <h2 className="text-4xl text-white">Redfall</h2>
              <span className="text-lg text-white">Slay alone or squad up against a legion of vampires in this open-world FPS!</span>
              <button className="text-white w-[31%] ">Pre-Order Now ></button>
              </div>
        </span>

        <img className="w-1/4 h-[42%] hidden xl:block" src={Redfall} />

        <img
          className="absolute w-screen h-[77.5%] top-[81.38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:block"
          src={Deadspace}
          alt=""
        />

        <div className="bg-gray-500 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:bg-inherit   md:flex md:items-end ">
          <div className="w-[94%] h-[70%] grid grid-rows-3 md:h-[50%]">
            <h2 className="text-3xl text-white md:text-5xl  ">
              Elevate Your Game
            </h2>
            <span className="text-sm text-white md:text-xl md:pt-4">
              Get surreal with the Xbox Wireless Controller - Stellar Shift
              Special Edition.
            </span>
            <button className=" bg-inherit uppercase text-white w-[31%] font-semibold md:w-[17%] md:h-1/2 xl:w-[6%]">
              Learn More >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem]  xl:h-[25rem] ">
        <img
          src={Rush}
          className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem] xl:hidden "
        />

        <span className="bg-green-700  w-1/4 hidden xl:block">
        <div className="w-[80%] h-[80%] grid  content-center items-center ml-[5%] gap-5">
              <h2 className="text-4xl text-white">Age of Empires II: Definitive Edition</h2>
              <span className="text-lg text-white">Now avalibe on console and cloud. Play with Xbox Game Pass Ultimate.</span>
              <button className="text-white w-[31%] ">Pre-Order Now ></button>
              </div>
        </span>
        <img className="w-1/4  hidden xl:block" src={Age} />

        <span className="bg-green-700  w-1/4 ml-1 hidden xl:block">
        <div className="w-[80%] h-[80%] grid  content-center items-center ml-[5%] gap-5">
              <h2 className="text-4xl text-white">Diablo IV</h2>
              <span className="text-lg text-white">Pre-order any digital edition and get early access to the Open</span>
              <button className="text-white w-[31%] ">Pre-Order Now ></button>
              </div>
        </span>

        <img className="w-1/4  hidden xl:block" src={Diablo} />
        <img
          className="absolute hidden xl:block right-0 w-[49.9%] h-[50rem] mt-[25.4rem] "
          src={Minecraft2}
        />
        <img
          className="absolute hidden xl:block left-0 w-[49.9%] h-[50rem] mt-[25.4rem] "
          src={Fortnite}
        />

        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem] xl:bg-white xl:hidden">
          <div className="w-[94%] h-[60%] grid grid-rows-3 md:h-[75%] md:items-center ">
            <h2 className="text-3xl text-white md:text-4xl xl:hidden">
              Hi-Fi RUSH
            </h2>
            <span className="text-sm text-white pt-3  md:text-lg xl:hidden">
              Feel the beat
            </span>
            <button className=" bg-inherit uppercase text-white w-[28%] font-semibold md:w-[15%]xl:hidden">
              Get it Now >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem]  ">
        <img
          src={Minecraft}
          className="h-[16rem] w-[98vw] absolute  top-0   md:h-[25rem] xl:hidden"
        />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[18rem] xl:hidden">
          <div className="w-[94%] h-[80%] grid grid-rows-4 md:h-[90%] md:items-center">
            <span className="bg-yellow-500 w-[45%] h-[50%] md:w-[25%] md:h-[40%] text-black ">
              CONSOLE ?? PC ?? CLOUD
            </span>
            <h2 className="text-3xl text-white md:text-4xl">
              Minecraft Legends
            </h2>
            <span className="text-sm text-white pt-3  md:text-lg">
              Unite the Overwold
            </span>
            <button className=" bg-inherit uppercase text-white w-[40%] font-semibold md:w-[21%]">
              Pre-Order Now >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] xl:hidden xl:w-0 ">
        <img
          src={Redfall}
          className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]"
        />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem] xl:hidden">
          <div className="w-[94%] h-[75%] grid grid-rows-3 md:h-[75%] md:items-center">
            <h2 className="text-3xl text-white md:text-4xl">Redfall</h2>
            <span className="text-sm text-white pt-3  md:text-lg">
              Slay alone or squad up against a legion of vampires in this
              open-world FPS!
            </span>
            <button className=" bg-inherit uppercase text-white w-[40%] font-semibold md:w-[21%]">
              PRE-ORDER NOW >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] xl:hidden xl:w-0 ">
        <img
          src={Deadspace}
          className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]"
        />
        <div className="bg-white h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem] xl:hidden">
          <div className="w-[94%] h-[70%] grid grid-rows-3 md:h-[85%] md:items-center">
            <h2 className="text-3xl text-black md:text-5xl  font-semibold">
              Dead Space???
            </h2>
            <span className="text-sm text-black pt-3  md:text-lg">
              Unravel the mystery aboard the USG Ishimura
            </span>
            <button className=" bg-inherit uppercase text-green-700 w-[28%] font-semibold md:w-[15%] ">
              Get It Now >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] xl:hidden xl:w-0 ">
        <img
          src={Age}
          className="h-[16rem] w-[98vw] absolute  top-0   md:h-[25rem]"
        />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[18rem] xl:hidden">
          <div className="w-[94%] h-[90%] grid grid-rows-4 md:h-[90%] md:items-center">
            <span className="bg-yellow-500 w-[45%] h-[50%] md:w-[25%] md:h-[40%] text-black ">
              CONSOLE ?? PC ?? CLOUD
            </span>
            <h2 className="text-3xl text-white md:text-4xl">
              Age of Empires II: Definitive Edition
            </h2>
            <span className="text-sm text-white pt-6  md:text-lg ">
              Now available on console and cloud. Play with Xbox Game Pass
              Ultimate.
            </span>
            <button className=" bg-inherit uppercase text-white w-[40%] font-semibold md:w-[21%]">
              Pre-Order Now >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] xl:hidden xl:w-0">
        <img
          src={Diablo}
          className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]"
        />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem] xl:hidden">
          <div className="w-[94%] h-[70%] grid grid-rows-3 md:h-[75%] md:items-center">
            <h2 className="text-3xl text-white md:text-4xl">Diablo IV</h2>
            <span className="text-sm text-white pt-3  md:text-lg">
              Pre-order any digital edition and get early access to the Open
              Beta
            </span>
            <button className=" bg-inherit uppercase text-white w-[40%] font-semibold md:w-[21%]">
              Pre-Order Now >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] xl:hidden xl:w-0">
        <img
          src={Overwatch}
          className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]"
        />
        <div className="bg-white h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem] xl:hidden">
          <div className="w-[94%] h-[73%] grid grid-rows-4 md:h-[85%] md:items-center">
            <span className="bg-yellow-500 uppercase w-[28%] h-[55%] md:w-[15%] md:h-[40%] text-black ">
              New Season
            </span>
            <h2 className="text-3xl text-black md:text-5xl  font-semibold">
              Overwatch 2
            </h2>
            <span className="text-sm text-black pt-3  md:text-lg">
              Season 3 brings ew control map, in game-events, and Battle Pass
            </span>
            <button className=" bg-inherit uppercase text-black w-[28%] font-semibold md:w-[15%]">
              Get It Now >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[55rem] xl:hidden xl:w-0 ">
        <img
          src={Minecraft2}
          className="h-[30.5rem] w-[98vw] absolute  top-0   md:h-[55rem]"
        />
        <div className="bg-gray-500 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:bg-inherit   md:flex md:items-end ">
          <div className="w-[94%] h-[80%] grid grid-rows-3 md:h-[80%]">
            <h2 className="text-3xl text-white md:text-5xl">
              Safer Internet Day - Xbox and Minecraft Education
            </h2>
            <span className="text-sm pt-6 text-white md:text-xl md:pt-8">
              Celebrate with Xbox online safety tips and Minecraft Privacy
              Prodigy
            </span>
            <button className=" bg-inherit uppercase text-white w-[31%] font-semibold md:w-[17%] md:h-1/2">
              Learn More >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[55rem] xl:hidden xl:w-0">
        <img
          src={Fortnite}
          className="h-[30.5rem] w-[98vw] absolute  top-0   md:h-[55rem]"
        />
        <div className="bg-white h-[43%] w-[98vw] absolute  bottom-0  flex justify-center items-center md:bg-inherit   md:flex md:items-end ">
          <div className="w-[94%] h-[60%] grid grid-rows-3 md:h-[60%]">
            <h2 className="text-3xl text-black md:text-5xl md:pt-8">
              Fortnite
            </h2>
            <span className="text-sm pt-3 text-black md:text-xl md:pt-8">
              Get ready for return of Fortnite x Dragon Ball
            </span>
            <button className=" bg-inherit uppercase text-black w-[40%] font-semibold md:w-[22%] md:h-1/2">
              Download Now >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] xl:hidden xl:w-0">
        <img
          src={BlackH}
          className="h-[15.5rem] w-[98vw] absolute  top-0   md:h-[28rem]"
        />
        <div className="bg-white h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem] xl:hidden">
          <div className="w-[94%] h-[73%] grid grid-rows-3 md:h-[85%] md:items-center">
            <h2 className="text-2xl text-black md:text-4xl  font-semibold ">
              Xbox celebrates Black History Month
            </h2>
            <span className="text-sm text-black pt-7  md:text-lg">
              Here are some of the ways we're celebrating - join us.
            </span>
            <button className=" bg-inherit uppercase text-black w-[30%] font-semibold md:w-[17%]">
              Learn More >
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] xl:h-0 xl:hidden xl:w-0">
        <img
          src={Gear}
          className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]"
        />
        <div className="bg-white h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem] xl:hidden">
          <div className="w-[94%] h-[60%] grid grid-rows-3 md:h-[85%] md:items-center">
            <h2 className="text-2xl text-black md:text-4xl  font-semibold ">
              Xbox Gear Shop
            </h2>
            <span className="text-sm text-black   md:text-lg md:pt-1">
              Check out the latest gear
            </span>
            <button className=" bg-green-700 uppercase text-white w-[35%] h-2/3 font-semibold md:w-[21%] ">
              Shop Now >
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen h-[230vw] xl:hidden  flex justify-center bg-gray-200 opacity-70 items-center">
        <div className="grid grid-rows-4 h-[95%] gap-12 w-[80%]">
          <div className="grid grid-rows gap- h-[100%]">
            <span className="text-xl font-bold">Browse</span>
            <span>Xbox consoles</span>
            <span>Xbox games</span>
            <span>Xbox Game Pass</span>
            <span>Xbox accessories</span>
          </div>

          <div className="grid grid-rows gap-2">
          <span className='text-xl font-bold'>Resources</span>
    <span>Xbox News</span>
    <span>Xbox Support</span>
    <span>Feedback</span>
    <span>Community Standards</span>
    <span>Photosensitive Seizure Warning</span>
    <span>User Research at Xbox</span>
          </div>

          <div className="grid grid-rows gap-2">
          <span className='text-xl font-bold'>Microsoft Store</span>
    <span>Xbox consoles</span>
    <span>Microsoft Store Support</span>
    <span>Returns</span>
    <span>Orders tracking</span>
    <span>Store locations</span>
          </div>

          <div className="grid grid-rows gap-2">
          <span className='text-xl font-bold'>For Developers</span>
    <span>Games</span>
    <span>ID@Xbox</span>
    <span>Windows</span>
    <span>Creators Program</span>
    <span>Designed for Xbox</span>
          </div>
          


        </div>

    

      </div>
      <div className="h-[15vw] w-screen  flex pl-[2.4rem] items-center bg-gray-200 opacity-70 xl:hidden ">

      < BiWorld  size={'2rem'}/>
  <span>English (United States)</span>

    </div>
    </div>
  );
}

export default Featured;
