import React from 'react'

const HomeCard = ({ img }) => {
  return (
    <div className='w-2/4 min-w-[20rem] rounded-3xl shadow-2xl hover:scale-110 transition-all'>
        <img className='object-contain rounded-3xl' src={img} />
    </div>
  )
}

export default HomeCard