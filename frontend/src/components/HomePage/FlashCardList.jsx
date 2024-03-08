import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import FlashCard from '../shared/FlashCard'

const FlashCardList = () => {
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
          console.log(data);
    }

    const fetchQuizzes = async () => {
        const response = await fetch('http://localhost:3000/quiz', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token'),
            }
          });
          const data = await response.json();
          console.log(data);
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
       {flashcard.map((flashcard) => (
           <FlashCard key={flashcard.id} name={flashcard.name} color={flashcard.color} />
       ))    
    }
    </div>
     
  )
}

export default FlashCardList