import React from 'react'
import Logo from '../icons/Logo';
import { navbarMenu } from '../../menus/navbar';

const Navbar = () => {
  return (
    <div className='flex px-24 w-full h-20 items-center justify-between'>
        <a href="https://www.fivestarprofessional.com/">
            <Logo 
                size={90}
            />
        </a>
        
        <div className='flex items-center justify-center h-full'>
            {
                navbarMenu.map(item => (                    
                    <a href={item.path} 
                        className='flex items-center border-b-2 border-transparent justify-center h-full hover:border-red-800 transition-all duration-300text-black text-lg font-bold mx-8'
                    >
                        {item.title.toUpperCase()}
                    </a>                    
                ))
            }
        </div>

        <div>
            <a href="https://www.fivestarprofessional.com/account/login" className='text-red-900 text-xl'>
                <p className='hover:scale-125 transition-all'>
                    Log In
                </p>
            </a>
        </div>

    </div>
  )
}

export default Navbar