import React, { useEffect } from 'react'
import FlashCardList from '../components/HomePage/FlashCardList'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const Homepage = () => {
    // const flashcard = [
    //     {
    //         id: 1,
    //         name: 'React',
    //         color: "#E9DBDB"
    //     },
    //     {
    //         id: 2,
    //         name: 'BA - Stakeholder Analysis',
    //         color: "#CCDCE8"
    //     },
    //     {
    //         id: 3,
    //         name: 'Redux',
    //         color: "#FFA07A"
    //     },
    //     {
    //         id: 4,
    //         name: 'Flashcard Set 3',
    //         color: "#E9DBDB"
    //     }
    // ] 

  return (
    <div>
       <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mt-20'>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-semibold text-[#333]'>Latest Flashcard Sets</h2>
            <div className='flex items-center'>
            <Link to="/flashcards" className='cursor-pointer'>Flashcard Library</Link>
            <ArrowRightIcon className='h-4 ml-3'/>
            </div>
            
        </div>
        <div className='grid grid-cols-4 gap-6 mt-5'>
        <div className='mt-5 shadow shadow-md h-[150px] flex items-center justify-center bg-[#E9DBDB] p-3 rounded-md cursor-pointer text-center'>
        <p className="text-xl">Science</p>
        </div>
        <div className='mt-5 shadow shadow-md h-[150px] flex items-center justify-center bg-[#CCDCE8] p-3 rounded-md cursor-pointer text-center'>
        <p className="text-xl">Geography</p>
        </div>
        <div className='mt-5 shadow shadow-md h-[150px] flex items-center justify-center bg-[#BDE1C3] p-3 rounded-md cursor-pointer text-center'>
        <p className="text-xl">Maths</p>
        </div>
        <div className='mt-5 shadow shadow-md h-[150px] flex items-center justify-center bg-[#E9DBDB] p-3 rounded-md cursor-pointer text-center'>
        <p className="text-xl">English</p>
        </div>
        </div>
    </div>
    
       <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mt-20'>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-semibold text-[#333]'>Latest Quizzes</h2>
            <div className='flex items-center'>
            <Link to="/quizzes" className='cursor-pointer'>Quiz Library</Link>
            <ArrowRightIcon className='h-4 ml-3'/>
            </div>
            
            
        </div>
        <div className='grid grid-cols-4 gap-6 mt-5'>
        <div className='mt-5 shadow shadow-md h-[150px] flex items-center justify-center bg-[#FFA07A] p-3 rounded-md cursor-pointer text-center'>
        <p className="text-xl">Periodic table</p>
        </div>
        <div className='mt-5 shadow shadow-md h-[150px] flex items-center justify-center bg-[#FFA07A] p-3 rounded-md cursor-pointer text-center'>
        <p className="text-xl">World Capitals</p>
        </div>
        <div className='mt-5 shadow shadow-md h-[150px] flex items-center justify-center bg-[#FFA07A] p-3 rounded-md cursor-pointer text-center'>
        <p className="text-xl">Geometry</p>
        </div>
        <div className='mt-5 shadow shadow-md h-[150px] flex items-center justify-center bg-[#FFA07A] p-3 rounded-md cursor-pointer text-center'>
        <p className="text-xl">World History</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Homepage