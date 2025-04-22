import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";


function SocialLinks() {
  return (
    <div className='flex gap-x-6 '>
      <a href="https://github.com/GinoGallardo" target='_blank' className='hover:text-[#f97e3e]'>
        <FaGithub className=' filter hover:drop-shadow-[0_0_15px_#f97e3e]' size={40}/>
      </a>
      <a href="www.linkedin.com/in/gino-gallardo-7053801a9" target='_blank' className= 'hover:text-[#f97e3e]'>
        <FaLinkedinIn className=' filter hover:drop-shadow-[0_0_15px_#f97e3e]' size={40} />
      </a>
    </div>
  )
}

export default SocialLinks