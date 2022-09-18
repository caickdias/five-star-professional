import React from 'react'

import HomeCard from '../HomeCard'
import FinancialImg from '../../assets/financial-professionals.jpg';
import HomeImg from '../../assets/home-professionals.jpg';

const Main = () => {
    
    return (
        <div className='flex flex-col items-center justify-center'>

            <div id="professionals" className='flex w-5/6 border-b-[1px] border-gray-400 pb-4 items-center justify-center mb-16 transition-all'>
                <h1 className='text-4xl font-bold'>
                    Find Professionals
                </h1>
            </div>

            <div className='flex flex-wrap items-center justify-center mb-24'>

                <div className="flex flex-col items-end justify-center w-1/2 p-12 text-center">
                    <h1 className='text-4xl font-bold mb-2'>
                        Find Financial Professionals
                    </h1>
                    <h1 className='text-lg mb-2'>
                        Browser award-winning real estate agents, mortgage professionals and home/auto agents
                    </h1>                    
                </div>

                <div className="flex justify-center w-1/2">
                <a className='flex items-center justify-center' href="https://www.fivestarprofessional.com/Market/WM">
                        <HomeCard img={FinancialImg} />
                    </a>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-center py-16 bg-gray-600 text-white'>

                <div className="flex justify-center w-1/2">
                    <a className='flex items-center justify-center' href="https://www.fivestarprofessional.com/Market/RE">
                        <HomeCard img={HomeImg} />
                    </a>
                </div>

                <div className="flex flex-col items-start justify-center w-1/2 p-12 text-center">
                    <h1 className='text-4xl font-bold mb-2'>
                        Find Home Professionals
                    </h1>
                    <h1 className='text-lg'>
                        Browser award-winning wealth managers and investment professionals
                    </h1>
                </div>
            </div>

            <div id="aboutus" className='flex w-5/6 border-b-[1px] border-gray-400 pb-4 items-center justify-center my-16'>
                <h1 className='text-4xl font-bold'>
                    About Us
                </h1>
            </div>

            <div className='flex flex-wrap w-full items-center justify-evenly'>

                <div className='flex flex-col w-1/4 items-center justify-around mb-12'>

                    <div className="w-64 h-64 rounded-full">
                        <img className='h-full rounded-full hover:scale-110 transition-all'src={require('../../assets/workwithus.jpg')} />                    
                    </div>
                    
                    <h1 className='font-bold text-2xl my-8'>
                        Work With Us
                    </h1>
                    <p>
                    Five Star Professional conducts market research to define and promote professional excellence.
                    </p>
                </div>

                <div className='flex flex-col w-1/4 items-center justify-around mb-12'>

                    <div className="w-64 h-64">
                        <img className='h-full rounded-full hover:scale-110 transition-all'src={require('../../assets/fs_about.jpg')} />                    
                    </div>

                    <h1 className='font-bold text-2xl my-8'>
                        About Us
                    </h1>
                    <p>
                    Five Star Professional conducts market research to define and promote professional excellence in the professions we serve.
                    </p>
                </div>

                <div className='flex flex-col w-1/4 items-center justify-around mb-12'>

                    <div className="w-64 h-64">
                        <img className='h-full rounded-full hover:scale-110 transition-all'src={require('../../assets/star.png')} />                    
                    </div>

                    <h1 className='font-bold text-2xl my-8'>
                        Research
                    </h1>
                    <p>Five Star Professional conducts research to help consumers with the important decision of selecting a service professional.</p>
                </div>
            </div>
        </div>
    )
}

export default Main