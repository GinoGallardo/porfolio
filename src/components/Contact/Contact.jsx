import React from 'react'
import ContactSocialLink from './ContactSocialLink'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id='contact' className='text-white py-30 max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto'>
      <ContactSocialLink />
      <ContactForm />
    </section>
  )
}

export default Contact