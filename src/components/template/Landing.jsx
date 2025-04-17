import React from 'react'
import Header from '../Header/Header'
import Home from '../../page/Home'
import ProjectsLanding from '../Projects/ProjectsLanding'
import Stack from '../Stack/Stack'


function Landing() {
  return (
    <>
      <Header/>
      <Home/>
      <ProjectsLanding />
      <Stack />
    </>
  )
}

export default Landing