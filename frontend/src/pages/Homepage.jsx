import React from 'react'
import FlashCardList from '../components/HomePage/FlashCardList'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const Homepage = () => {
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
        <FlashCardList />
    </div>
       <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mt-20'>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-semibold text-[#333]'>Latest Quizzes</h2>
            <div className='flex items-center'>
            <Link to="/quizzes" className='cursor-pointer'>Quiz Library</Link>
            <ArrowRightIcon className='h-4 ml-3'/>
            </div>
            
        </div>
        <FlashCardList />
    </div>
    </div>
  )
}

export default Homepage