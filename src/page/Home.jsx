import React from 'react'
import Redes from '../components/Redes/Redes.jsx'
import Button from '../components/Button/Button.jsx'

const Home = () => {
  return (
    <>
      <div className='w-full mx-auto flex items-center justify-between lg:px-8'>
        <div className='flex flex-col max-w-7xl p-2 gap-y-4 lg:flex-row items-center m-auto bg-[rgba(249,126,62,0.3)] backdrop-blur-xs shadow-lg rounded-lg lg:p-12 lg:mt-20  lg:gap-x-10'>
          <img className='w-md lg:w-xl rounded-3xl' src="../src/assets/img-profile1.png" alt="" />
          <div className='text-white flex flex-col gap-y-4 lg:gap-y-8'>
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <h1 className='text-xl md:text-3xl lg:text-[1.8em] xl:text-[4rem] font-bold font-[crimson] tracking-widest'>GINO GALLARDO</h1>
              <h3 className='text-md text-[#f97e3e] font-[mada] tracking-wider md:text-2xl xl:text-5xl'>desarrollador:<span className=' text-white ml-2'>"frontend";</span></h3>
            </div>
            <div className=' lg:text-2xl'>
              <p>Frontend Developer con foco en accesibilidad, diseño funcional y transformación digital, mi motor es la pasión, mi herramienta la versatilidad. Transformo ideas en experiencias reales, accesibles y modernas.</p>
            </div>
            <div className='flex items-center justify-between px-10'>
              <Button/>
              <Redes/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home