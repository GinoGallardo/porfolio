import React from 'react'

const products = [
  { name: 'Proyectos', href: '#'},
  { name: 'Habilidades', href: '#'},
  { name: 'Sobre mi', href: '#'},
  { name: 'Contactos', href: '#' },
]

function Link() {
  return (
    <div className='flex flex-col lg:flex-row'>
      {products.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-x-6 rounded-lg py-2 px-4 relative hover:bg-amber-600 lg:flex-row"
                  >
                    <a href={item.href} className="text-sm  hover:text-white font-[mada] text-[#f97e3e] -tracking-wide lg:text-2xl">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                ))}
    </div>
  )
}

export default Link