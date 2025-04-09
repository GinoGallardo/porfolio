import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";


function SocialLinks() {
  return (
    <div className='flex gap-x-6 '>
      <a href="#" className='hover:text-[#f97e3e]'>
        <FaGithub size={40}/>
      </a>
      <a href="#" className='hover:text-[#f97e3e]'>
        <FaLinkedinIn size={40} />
      </a>
    </div>
  )
}

export default SocialLinks