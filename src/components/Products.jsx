import React from 'react'
import Accesories from '../assets/Accessories.svg'
import Consoles from '../assets/Consoles.svg'
import GamePass from '../assets/GamePass.svg'
import Games from '../assets/Games.svg'
import Play from '../assets/Play.svg'
import Signin from '../assets/SignIn.svg'

function Products() {
  return (
    <div className='grid  grid-rows-4 pl-10 pt-12 '>
      <>
<div className=' grid grid-cols-3 items-center '>
  <img className='h-[2.6rem] w-[3.375rem] ml-2' src={GamePass} alt="" /> 
  <img className='h-[2.6rem] w-[3.375rem]' src={Games} alt="" />
  <img className='h-[2.6rem] w-[3.375rem]' src={Consoles} alt="" />
</div>
<div className=' grid grid-cols-3 '>
<label className='text-green-600 font-semibold'>Game Pass</label>
<label className='text-green-600 font-semibold'>Games</label>
<label className='text-green-600 font-semibold'>Consoles</label>
</div>
</>

<div className='grid grid-cols-3 '>
<img className='h-[2.6rem] w-[3.375rem] ml-2' src={Accesories} alt="" />
<img className='h-[2.6rem] w-[3.375rem]' src={Play} alt="" />
<img className='h-[2.6rem] w-[3.375rem]' src={Signin} alt="" />
</div>
<div className=' grid grid-cols-3 '>
<label className='text-green-600 font-semibold'>Accessories</label>
<label className='text-green-600 font-semibold ml-2.5'>Play</label>
<label className='text-green-600 font-semibold'>Sign In</label>


</div>
    </div>
  )
}

export default Products