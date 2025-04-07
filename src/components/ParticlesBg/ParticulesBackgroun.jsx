import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particleConfig from './config/particlesConfig'

const ParticulesBackgroun = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className='absolute inset-0 -z-10 pointer-events-none'>
    <Particles
      options={particleConfig}
      init={particlesInit}
    />
  </div>
  )
};

export default ParticulesBackgroun;
