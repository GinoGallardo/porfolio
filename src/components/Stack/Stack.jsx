import React from 'react'
import { Icon } from '@iconify/react'
import stackItems from '../../data/stack.json'

const Stack = () => {

  return (
    <section className='max-w-7xl m-auto mb-20 flex flex-col items-center justify-center lg:py-20 lg:mt-30 border border-amber-600'>
      <h2 className='text-4xl text-white font-bold mb-8'>Stack</h2>
      <div className='p-6 max-w-5xl flex items-center justify-center flex-wrap gap-8'>
        {stackItems.map((tech, index) => (
          <div key={index} className='relative group flex flex-col items-center'>
            <span
              className='absolute -top-6 text-md font-[mada] opacity-0 group-hover:opacity-100 transition duration-300 lg:text-2xl'
              style={{ color: tech.color }}
              >
              {tech.name}
            </span>
            <Icon
              icon={tech.icon}
              width={80}
              className='transition duration-300 mt-1 group-hover:scale-110'
              color={tech.color}
              style={{
                filter: `drop-shadow(0 0 0px transparent)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.filter = `drop-shadow(0 0 12px ${tech.color})`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = `drop-shadow(0 0 0px transparent)`
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack
