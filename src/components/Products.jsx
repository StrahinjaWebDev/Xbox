import React from 'react'
import Accesories from '../assets/Accessories.svg'
import Consoles from '../assets/Consoles.svg'
import GamePass from '../assets/GamePass.svg'
import Games from '../assets/Games.svg'
import Play from '../assets/Play.svg'
import Signin from '../assets/SignIn.svg'

function Products() {
  return (
    <div className='h-[15rem] mt-8  content-center grid grid-rows-2 grid-cols-3 pl-[3rem]  md:grid-cols-6 md:grid-rows-none md:h-[7rem] md:mt-0 md:pl-[3rem]  '>
   
    <div>
      <img className='w-1/2' src={GamePass} alt="" />
      <span className='font-bold text-green-600  '>Game pass</span>
      </div>
   

   <div>
      <img className='w-1/2' src={Games} alt="" />
      <span className='font-bold text-green-600 pl-1'>Games</span>
      </div>  

      <div>
      <img className='w-1/2' src={Consoles} alt="" />
      <span className='font-bold text-green-600 '>Consoles</span>
      </div>
    
    <div>
      <img className='w-1/2' src={Accesories} alt="" />
      <span className='font-bold text-green-600 '>Accesories</span>
      </div>
    
   <div>
      <img className='w-1/2' src={Play} alt="" />
      <span className='font-bold text-green-600 pl-3'>Play</span>
      </div>
    
   <div>
      <img className='w-1/2' src={Signin} alt="" />
      <span className='font-bold text-green-600 '>Sign In</span>
      </div>
    
      </div>
      
      
     

  )
}

export default Products