import React from 'react'
import Logo from '../icons/Logo';
import { navbarMenu } from '../../menus/navbar';

const Navbar = () => {
  return (
    <div className='flex p-4 px-12 w-full h-20 border-rose-900 items-center justify-between'>
        <Logo 
            size={90}
        />
        
        <div className='flex items-center justify-center'>
            {
                navbarMenu.map(item => (
                    <a href={item.path} className='text-red-900 text-lg font-bold mx-8'>
                        {item.title.toUpperCase()}
                    </a>
                ))
            }
        </div>

        <div>
            <a href="https://www.fivestarprofessional.com/account/login" className='text-red-900 text-xl'>
                Log In
            </a>
        </div>

    </div>
  )
}

export default Navbar