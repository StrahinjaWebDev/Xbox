import React, { useState } from 'react'
import XBOX from '../assets/Xbox.png'
import {BsChevronDown} from 'react-icons/bs'



const Xboxnav = () => {
  const [set,navSet] = useState(false)
  const dropdown = () => {
    navSet(!set)
  };
  return (
    <div className="flex">
       <img className="w-[4.8rem] pt-[1rem] pl-3 z-[99]" src={XBOX} alt="/" ></img>
        <button onClick={dropdown} className="pl-4 pt-5 z-[99]">< BsChevronDown size='1rem'/></button> {set ? ( 
          <div className='fixed w-screen h-[58.4vh] z-[98] bg-white flex flex-col gap-[0.950rem] pt-[3.5rem] pl-4 text-[0.925rem]'>

            <span>Home</span> <hr />
            <span>Game Pass</span> <hr />
            <span>Games</span> <hr />
            <span>Devices</span> <hr />
            <span>Play</span> <hr />
            <span>Community</span> <hr />
            <span>Support</span> <hr />
            <span>My Xbox</span> <hr />
            <span>Developers</span> <hr className='bg-black' />


          </div>
        ) : ("")}
        </div>
  )
}

export default Xboxnav