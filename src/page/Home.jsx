import React, { useEffect, useState } from 'react'
import SocialLinks from '../components/SocialLinks/SocialLinks.jsx'
import Button from '../components/Button/Button.jsx'
import imageProfile from '../assets/img-profile1.png'
import Atropos from 'atropos/react'
import 'atropos/css'

const Home = () => {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 1200 
      const newOpacity = Math.max(0, 1 - scrollY / maxScroll)
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='w-full mx-auto px-6 flex lg:px-8'>
        <div
          className='flex flex-col max-w-7xl min-h-[45rem] p-2 gap-y-4 lg:flex-row items-center m-auto bg-transparent shadow-none rounded-lg lg:p-8 lg:mt-20 lg:gap-x-10 transition-opacity ease-out duration-[1200ms]'
          style={{ opacity }}
        >
          <Atropos
        className='w-full'
        activeOffset={40}
        shadow={false}
        highlight={false}
        rotateXMax={2}
        rotateYMax={2}
      >
          <img data-atropos-offset="5" className='w-md lg:w-xl rounded-3xl' src={imageProfile} alt="Perfil de Gino Gallardo" />
      </Atropos>
          <div className='text-white flex flex-col gap-y-4 lg:gap-y-6'>
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <h1 className='text-3xl md:text-4xl lg:text-[1.8em] xl:text-[4rem] font-bold font-[crimson] tracking-widest'>GINO GALLARDO</h1>
              <h3 className='text-xl text-[#f97e3e] font-[mada] tracking-wider md:text-2xl xl:text-5xl'>
                desarrollador:<span className='text-white ml-2'>"frontend";</span>
              </h3>
            </div>
            <div className='lg:text-2xl px-2 md:px-16 lg:pl-0'>
              <p>Construyo experiencias digitales que combinan funcionalidad, diseño y accesibilidad. Me gusta convertir buenas ideas en productos que se sienten bien, se ven y funcionan aún mejor.</p>
            </div>
            <div className='flex items-center justify-between px-3 md:px-16 lg:mt-20'>
              <Button />
              <SocialLinks />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
