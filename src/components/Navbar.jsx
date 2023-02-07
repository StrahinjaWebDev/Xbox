import React from 'react'
import Microsoft from '../assets/Microsoft.png'
import XBOX from '../assets/Xbox.png'
import {BsChevronCompactDown} from 'react-icons/bs'
import {VscSearch} from 'react-icons/vsc'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPersonPlus} from 'react-icons/bs'


function Navbar() {
  return (
    <div className='w-screen h-[55px] flex justify-center'>
      <div className='w-[83%] h-[100%] '>

      <div className='w-[75%] h-[100%] float-left flex justify-start items-center gap-[25px] '>
        <img className='w-[9%] h-[41%]' src={Microsoft} alt="/" />
        <label className='text-2xl font-semibold mb-1.5'> | </label>
        <img className='w-[6%] h-[41%]' src={XBOX} alt="/" />
        
        <button className='text-sm'>Game Pass <BsChevronCompactDown className='w-[10px] float-right ml-1 mt-1' /></button>

        <button className='text-sm'>Games<BsChevronCompactDown className='w-[10px] float-right ml-1 mt-1' /></button>

        <button className='text-sm'>Devices <BsChevronCompactDown className='w-[10px] float-right ml-1 mt-1' /></button>

        <button className='text-sm'>Play <BsChevronCompactDown className='w-[10px] float-right ml-1 mt-1' /></button>

        <button className='text-sm'>Community <BsChevronCompactDown className='w-[10px] float-right ml-1 mt-1' /></button>

        <button className='text-sm'>Support <BsChevronCompactDown className='w-[10px] float-right ml-1 mt-1' /></button>

        <button className='text-sm'>My Xbox <BsChevronCompactDown className='w-[10px] float-right ml-1 mt-1' /></button>

        <button className='text-sm'>Developers <BsChevronCompactDown className='w-[10px] float-right ml-1 mt-1' /></button>

        </div>

        <div className='w-[25%] h-[100%]  float-right flex items-center justify-center gap-10'>
        
        <div className='float left flex gap-5'>

        <button className='text-sm'>All Microsoft<BsChevronCompactDown className='w-[10px] float-right ml-1 mt-1' /></button>
        <button className='text-sm'>Search <VscSearch className='w-[20px] float-right ml-1 mt-1' /></button>
        </div>
        <div className='float right flex gap-3'>
        <button className='text-sm'>Cart <AiOutlineShoppingCart className='w-[20px] h-[17px] float-right  mt-0.5' /></button>
        <button className='text-sm'>Sign in <BsPersonPlus className='w-[17px] h-[17px] float-right ml-2 mt-0.5' /></button>
        </div>

        </div>

        
      </div>
    

    </div>
  )
}

export default Navbar