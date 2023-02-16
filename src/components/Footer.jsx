import React from 'react'
import GearS from '../assets/GearS.jpg'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiWorld} from 'react-icons/bi'

function Footer() {
  return (
    <div className='hidden xl:block relative h-[80vw] w-screen'>
<div className='w-screen h-[11%]'></div>

<div className=' xl:block w-screen h-[50%]'>
    <img src={GearS} />

</div>

<div className='w-screen h-[6%] flex justify-center items-center'>
  <div className='w-[90%] flex gap-5'>
    <span>Follow Xbox</span>
    < AiOutlineMail      size={'1.4rem'} />
    < AiOutlineFacebook  size={'1.4rem'}/>
    < AiOutlineTwitter   size={'1.4rem'}/>
    < AiOutlineInstagram size={'1.4rem'}/>
  </div>
</div>

<div className='w-screen h-[25%] bg-gray-200 opacity-70 flex   justify-end items-center '>
  <div className='w-[95%] h-[80%] grid grid-cols-4  '>
  <div className='grid grid-rows  h-[65%] '>
    <span className='text-xl font-bold'>Browse</span>
    <span>Xbox consoles</span>
    <span>Xbox games</span>
    <span>Xbox Game Pass</span>
    <span>Xbox accessories</span>
    

  </div>
  <div className='grid grid-rows h-[90%]'>
    <span className='text-xl font-bold'>Resources</span>
    <span>Xbox News</span>
    <span>Xbox Support</span>
    <span>Feedback</span>
    <span>Community Standards</span>
    <span>Photosensitive Seizure Warning</span>
    <span>User Research at Xbox</span>
    

  </div>

  <div className='grid grid-rows h-[75%]'>
    <span className='text-xl font-bold'>Microsoft Store</span>
    <span>Xbox consoles</span>
    <span>Microsoft Store Support</span>
    <span>Returns</span>
    <span>Orders tracking</span>
    <span>Store locations</span>
    

  </div>

  <div className='grid grid-rows h-[65%]'>
    <span className='text-xl font-bold'>For Developers</span>
    <span>Games</span>
    <span>ID@Xbox</span>
    <span>Windows</span>
    <span>Creators Program</span>
    <span>Designed for Xbox</span>
    

  </div>
</div>

</div>
<div className='w-screen h-[8%] bg-gray-200 opacity-70'>

<div className='flex float-left w-[20%] h-[100%]  justify-center items-center gap-2'>
    < BiWorld  size={'2rem'}/>
  <span>English (United States)</span>
</div>

<div className='flex float-right w-[60%] h-[100%]  justify-center items-center gap-5'>
    <span>Sitemap</span>
    <span>Contact Microsoft</span>
    <span>Privacy & Cookies</span>
    <span>Terms of use</span>
    <span>Trademarks</span>
    <span>Third Party Notices</span>
    <span>Safety & eco</span>
    <span>About our ads</span>
    <span>© Microsoft 2023</span>

</div>
</div>


    </div>
    
  )
}

export default Footer