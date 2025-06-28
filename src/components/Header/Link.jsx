import React from 'react'

const products = [
  { name: 'Proyectos', href: '/#proyects'},
  { name: 'Habilidades', href: '/#stack'},
  { name: 'Sobre mi', href: '/#aboutMe'},
  { name: 'Contactos', href: '#' },
]

function Link() {
  return (
    <div className='flex flex-col lg:flex-row'>
      {products.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-x-6 rounded-lg py-6 px-4 relative hover:bg-amber-600 lg:flex-row lg:py-2"
                  >
                    <a href={item.href} className="text-2xl hover:text-white font-[mada] text-[#f97e3e] -tracking-wide">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                ))}
    </div>
  )
}

export default Link