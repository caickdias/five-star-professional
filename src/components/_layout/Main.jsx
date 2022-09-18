import React from 'react'

import FinancialImg from '../../assets/financial-professionals.jpg';
import HomeImg from '../../assets/home-professionals.jpg';
import WorkWithUsImg from '../../assets/workwithus.jpg';
import AboutUsImg from '../../assets/fs_about.jpg';
import ResearchImg from '../../assets/star.png';

import HomeCard from '../HomeCard'
import AboutUsCard from '../AboutUsCard';


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

            <div className='flex flex-wrap items-center justify-center py-16 bg-gray-500 text-white'>

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

                <AboutUsCard 
                    img={WorkWithUsImg}
                    title="Work With Us"
                    description="We employ bright, dedicated individuals who are passionate about results, committed to teamwork and focused on providing exceptional client service."                
                    url="https://www.fivestarprofessional.com/public/workwithus"
                />
                
                <AboutUsCard 
                    img={AboutUsImg}
                    title="About Us"
                    description="Five Star Professional conducts market research to define and promote professional excellence in the professions we serve. Do you work with a Five Star award winner?"                
                    url="https://www.fivestarprofessional.com/public/aboutus"
                />

                <AboutUsCard 
                    img={ResearchImg}
                    title="Research"
                    description="Five Star Professional conducts research to help consumers with the important decision of selecting a service professional."                
                    url="https://www.fivestarprofessional.com/public/research"
                />

            </div>
        </div>
    )
}

export default Main