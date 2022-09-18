import React from 'react'

import Logo from '../icons/Logo';

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center py-44 px-8'>
        
        <div className='flex text-center flex-col w-1/2 items-center justify-center'>
            <h1 className='text-5xl font-bold'>
                Finding an outstanding professional            
                that will better suits your needs
            </h1>
        </div>

        <div className='flex text-center flex-col w-1/2 items-center justify-center mt-12'>
            <h1 className='text-lg'>
                Five Star Professional conducts research with consumers, peers and industry leaders to identify service professionals who provide quality services to their clients. Five Star award candidates also undergo a thorough regulatory review. 
            </h1>
        </div>

    </div>
  )
}

export default HeroSection