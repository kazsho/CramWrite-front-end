import React from 'react'

const FlashCard = ({name, color}) => {
  return (
    <div style={{background: color}} className="shadow shadow-md h-[150px] flex items-center justify-center bg-[${color}] p-3 rounded-md cursor-pointer text-center"><p className='text-2xl'>{name}</p></div>
  )
}

export default FlashCard