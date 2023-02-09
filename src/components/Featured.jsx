import React from 'react'
import MLB from '../assets/MLB.jpg'

function Featured() {
  return (
    <div className='grid grid-cols-12'>
      
        
      <div className='ml-[0.4rem] bg-gray-700 w-[25rem] h-[33rem] '>
      <img className='w-[25rem] h-[17rem]' src={MLB}  alt="" />
      <div className='grid grid-rows-4 gap-2'>
        <span className=' bg-yellow-400 text-black w-[7.6rem] h-6 mt-[2rem] ml-3'>Console . Cloud</span>
        <span className=' text-white text-3xl ml-3'>MLB® The Show™  23</span>
        <span className=' text-white text-sm ml-3'>Play Day One with Xbox Game Pass Ultimate</span>
        <button className='bg-none text-white h-1 w-[8rem] font-semibold ml-3'>Pre-Order Now ></button>
      </div>


      





    </div>
    
    
    
    </div>
  )
}

export default Featured
