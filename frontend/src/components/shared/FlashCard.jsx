import React from 'react'

const FlashCard = ({name, color}) => {
  const colors = ["#E9DBDB", "#CCDCE8", "#BDE1C3"]

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  
  return (
    <div style={{background: randomColor()}} className="shadow shadow-md h-[150px] flex items-center justify-center bg-[${color}] p-3 rounded-md cursor-pointer text-center"><p className='text-2xl text-black'>{name}</p></div>
  )
}

export default FlashCard