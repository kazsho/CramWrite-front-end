import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import FlashCard from '../shared/FlashCard'

const FlashCardList = () => {
    const [flashcard, setFlashcard] = useState([])
    const [quiz, setQuiz] = useState([])
    useEffect(() => {
        fetchFlashcards()
        fetchQuizzes()
    }, [])

    const fetchFlashcards = async () => {
        const response = await fetch('http://localhost:3000/flashcards', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token'),
            }
          });
          const data = await response.json();
          setFlashcard(data)
    }

    const fetchQuizzes = async () => {
        const response = await fetch('http://localhost:3000/quiz', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token'),
            }
          });
          const data = await response.json();
           setQuiz(data)
    }
        
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
    //         color: "#BDE1C3"
    //     },
    //     {
    //         id: 4,
    //         name: 'Flashcard Set 3',
    //         color: "#E9DBDB"
    //     }
    // ] 
  return (
    <div className='grid grid-cols-4 gap-6 mt-5'>
       <div style={{background: "red"}} className="shadow shadow-md h-[150px] flex items-center justify-center bg-[${color}] p-3 rounded-md cursor-pointer text-center"><p className='text-2xl text-black'>{name}</p></div>
       <div style={{background: "red"}} className="shadow shadow-md h-[150px] flex items-center justify-center bg-[${color}] p-3 rounded-md cursor-pointer text-center"><p className='text-2xl text-black'>{name}</p></div>
       <div style={{background: "red"}} className="shadow shadow-md h-[150px] flex items-center justify-center bg-[${color}] p-3 rounded-md cursor-pointer text-center"><p className='text-2xl text-black'>{name}</p></div>
       <div style={{background: "red"}} className="shadow shadow-md h-[150px] flex items-center justify-center bg-[${color}] p-3 rounded-md cursor-pointer text-center"><p className='text-2xl text-black'>{name}</p></div>
    </div>
     
  )
}

export default FlashCardList