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
import Beast from '../assets/Beast.jpg'

function Featured() {
  return (
    <div className="grid grid-rows-12 gap-[0.3rem] h-[300rem] md:h-[400rem]">
      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[55rem]">
        <img src={Beast} className="h-[30.5rem] w-[98vw] absolute  top-0   md:h-[55rem]" />
        <div className="bg-gray-500 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:bg-inherit   md:flex md:items-end ">
          <div className="w-[94%] h-[70%] grid grid-rows-3 md:h-[50%]">
            <h2 className="text-3xl text-white md:text-5xl">Find your magical beast</h2>
            <span className="text-sm text-white md:text-xl md:pt-4">Take a quiz to discover your creature match from the Wizarding World</span>
            <button className=" bg-inherit uppercase text-white w-[31%] font-semibold md:w-[17%] md:h-1/2">Learn More ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={GamePas} className="h-[30.5rem] w-[98vw] absolute  top-0   md:h-[28rem]" />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem]">
        <div className="w-[94%] h-[90%] grid grid-rows-3 md:h-[75%] md:items-center">
            <h2 className="text-3xl text-white md:text-4xl">Discover your next favorite game</h2>
            <span className="text-sm text-white pt-6 md:text-lg">Play hundreds of high-quality games with friends on console, PC, phones and tablets.</span>
            <button className=" bg-inherit uppercase text-white w-[50%] font-semibold md:w-[27%]">Join Xbox Game Pass  ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[55rem]">
        <img src={Control} className="h-[30.5rem] w-[98vw] absolute  top-0   md:h-[55rem]" />
        <div className="bg-gray-500 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:bg-inherit   md:flex md:items-end ">
          <div className="w-[94%] h-[70%] grid grid-rows-3 md:h-[50%]">
            <h2 className="text-3xl text-white md:text-5xl ">Elevate Your Game</h2>
            <span className="text-sm text-white md:text-xl md:pt-4">Get surreal with the Xbox Wireless Controller - Stellar Shift Special Edition.</span>
            <button className=" bg-inherit uppercase text-white w-[31%] font-semibold md:w-[17%] md:h-1/2">Learn More ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={Rush} className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]" />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem]">
        <div className="w-[94%] h-[60%] grid grid-rows-3 md:h-[75%] md:items-center">
            <h2 className="text-3xl text-white md:text-4xl">Hi-Fi RUSH</h2>
            <span className="text-sm text-white pt-3  md:text-lg">Feel the beat</span>
            <button className=" bg-inherit uppercase text-white w-[28%] font-semibold md:w-[15%]">Get it Now  ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={Minecraft} className="h-[16rem] w-[98vw] absolute  top-0   md:h-[25rem]" />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[18rem]">
        <div className="w-[94%] h-[80%] grid grid-rows-4 md:h-[90%] md:items-center">
          <span className="bg-yellow-500 w-[45%] h-[50%] md:w-[25%] md:h-[40%] text-black ">CONSOLE · PC · CLOUD</span>
            <h2 className="text-3xl text-white md:text-4xl">Minecraft Legends</h2>
            <span className="text-sm text-white pt-3  md:text-lg">Unite the Overwold</span>
            <button className=" bg-inherit uppercase text-white w-[40%] font-semibold md:w-[21%]">Pre-Order Now  ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={Redfall} className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]" />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem]">
        <div className="w-[94%] h-[75%] grid grid-rows-3 md:h-[75%] md:items-center">
            <h2 className="text-3xl text-white md:text-4xl">Redfall</h2>
            <span className="text-sm text-white pt-3  md:text-lg">Slay alone or squad up against a legion of vampires in this open-world FPS!</span>
            <button className=" bg-inherit uppercase text-white w-[40%] font-semibold md:w-[21%]">PRE-ORDER NOW  ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={Deadspace} className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]" />
        <div className="bg-white h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem]">
        <div className="w-[94%] h-[70%] grid grid-rows-3 md:h-[85%] md:items-center">
            <h2 className="text-3xl text-black md:text-5xl  font-semibold">Dead Space™</h2>
            <span className="text-sm text-black pt-3  md:text-lg">Unravel the mystery aboard the USG Ishimura</span>
            <button className=" bg-inherit uppercase text-green-700 w-[28%] font-semibold md:w-[15%]">Get It Now  ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={Age} className="h-[16rem] w-[98vw] absolute  top-0   md:h-[25rem]" />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[18rem]">
        <div className="w-[94%] h-[90%] grid grid-rows-4 md:h-[90%] md:items-center">
          <span className="bg-yellow-500 w-[45%] h-[50%] md:w-[25%] md:h-[40%] text-black ">CONSOLE · PC · CLOUD</span>
            <h2 className="text-3xl text-white md:text-4xl">Age of Empires II: Definitive Edition</h2>
            <span className="text-sm text-white pt-6  md:text-lg ">Now available on console and cloud. Play with Xbox Game Pass Ultimate.</span>
            <button className=" bg-inherit uppercase text-white w-[40%] font-semibold md:w-[21%]">Pre-Order Now  ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={Diablo} className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]" />
        <div className="bg-green-700 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem]">
        <div className="w-[94%] h-[70%] grid grid-rows-3 md:h-[75%] md:items-center">
            <h2 className="text-3xl text-white md:text-4xl">Diablo IV</h2>
            <span className="text-sm text-white pt-3  md:text-lg">Pre-order any digital edition and get early access to the Open Beta</span>
            <button className=" bg-inherit uppercase text-white w-[40%] font-semibold md:w-[21%]">Pre-Order Now  ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={Overwatch} className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]" />
        <div className="bg-white h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem]">
        <div className="w-[94%] h-[73%] grid grid-rows-4 md:h-[85%] md:items-center">
        <span className="bg-yellow-500 uppercase w-[28%] h-[55%] md:w-[15%] md:h-[40%] text-black ">New Season</span>
            <h2 className="text-3xl text-black md:text-5xl  font-semibold">Overwatch 2</h2>
            <span className="text-sm text-black pt-3  md:text-lg">Season 3 brings ew control map, in game-events, and Battle Pass</span>
            <button className=" bg-inherit uppercase text-black w-[28%] font-semibold md:w-[15%]">Get It Now  ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[55rem]">
        <img src={Minecraft2} className="h-[30.5rem] w-[98vw] absolute  top-0   md:h-[55rem]" />
        <div className="bg-gray-500 h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:bg-inherit   md:flex md:items-end ">
          <div className="w-[94%] h-[80%] grid grid-rows-3 md:h-[80%]">
            <h2 className="text-3xl text-white md:text-5xl">Safer Internet Day - Xbox and Minecraft Education</h2>
            <span className="text-sm pt-6 text-white md:text-xl md:pt-8">Celebrate with Xbox online safety tips and Minecraft Privacy Prodigy</span>
            <button className=" bg-inherit uppercase text-white w-[31%] font-semibold md:w-[17%] md:h-1/2">Learn More ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[55rem]">
        <img src={Fortnite} className="h-[30.5rem] w-[98vw] absolute  top-0   md:h-[55rem]" />
        <div className="bg-white h-[43%] w-[98vw] absolute  bottom-0  flex justify-center items-center md:bg-inherit   md:flex md:items-end ">
          <div className="w-[94%] h-[60%] grid grid-rows-3 md:h-[60%]">
            <h2 className="text-3xl text-black md:text-5xl md:pt-8">Fortnite</h2>
            <span className="text-sm pt-3 text-black md:text-xl md:pt-8">Get ready for return of Fortnite x Dragon Ball</span>
            <button className=" bg-inherit uppercase text-black w-[40%] font-semibold md:w-[22%] md:h-1/2">Download Now ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={BlackH} className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]" />
        <div className="bg-white h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem]">
        <div className="w-[94%] h-[73%] grid grid-rows-3 md:h-[85%] md:items-center">
      
            <h2 className="text-2xl text-black md:text-4xl  font-semibold ">Xbox celebrates Black History Month</h2>
            <span className="text-sm text-black pt-7  md:text-lg">Here are some of the ways we're celebrating - join us.</span>
            <button className=" bg-inherit uppercase text-black w-[30%] font-semibold md:w-[17%]">Learn More  ></button>
          </div>
        </div>
      </div>

      <div className="relative h-[30.5rem] w-full flex   justify-center md:h-[43rem] ">
        <img src={Gear} className="h-[16rem] w-[98vw] absolute  top-0   md:h-[28rem]" />
        <div className="bg-white h-1/2 w-[98vw] absolute  bottom-0  flex justify-center items-center md:flex md:items-end md:h-[15rem]">
        <div className="w-[94%] h-[60%] grid grid-rows-3 md:h-[85%] md:items-center">
      
            <h2 className="text-2xl text-black md:text-4xl  font-semibold ">Xbox Gear Shop</h2>
            <span className="text-sm text-black   md:text-lg md:pt-1">Check out the latest gear</span>
            <button className=" bg-green-700 uppercase text-white w-[35%] h-2/3 font-semibold md:w-[21%] ">Shop Now  ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
