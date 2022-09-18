import React from 'react'

const AboutUsCard = ({ img, title, description, url }) => {
  return (
    <div className='flex flex-col w-1/4 items-center justify-around mb-12'>

        <a href={url}>
            <div className="w-64 h-64 rounded-full">
                <img className='h-full rounded-full hover:scale-110 transition-all' src={img} />                    
            </div>
        </a>
        
        <h1 className='font-bold text-2xl my-8'>
            {title}
        </h1>
        <p>
            {description}
        </p>
    </div>
  )
}

export default AboutUsCard