import React from 'react'
import Logo from '../icons/Logo';

import { menu, infoMenu } from '../../menus/footer';

const Footer = () => {
  return (
    <div className='flex flex-col w-full text-white pt-16 items-center justify-center bg-red-900'>
        
        <div className='flex flex-wrap  w-full justify-evenly mb-12 '>
            <div>
                <Logo size={200} />
                <p className='font-bold text-xl pt-8'>2117 Cliff Drive</p>
                <p className='font-bold text-xl'>Eagan, MN 55122</p>
                <p className='font-bold text-xl mb-8'>United States</p>
            </div>

            {
                menu.map(item => (
                    <div>
                        <p className='flex flex-col'>
                            <p className='font-bold text-lg mb-4'>{item.title.toUpperCase()}</p>
                            {
                                item.items.map(subitem => (
                                    <a 
                                        className='mb-4 opacity-50 hover:opacity-100 transition-all' 
                                        href={subitem.path}
                                    >
                                        {subitem.name}
                                    </a>
                                ))
                            }
                        </p>
                    </div>
                ))
            }
        </div>

        <div className='flex items-center w-4/5 justify-evenly border-t-[1px] border-black py-4'>
            {
                infoMenu.map(item => (
                    <a                         
                        href={item.path}
                    >
                        <p className='font-bold hover:scale-110 transition-all'>
                            {item.name}
                        </p>
                    </a>
                ))
            }
            <p>
                © 2022 Five Star Professional
            </p>
        </div>
    </div>
  )
}

export default Footer