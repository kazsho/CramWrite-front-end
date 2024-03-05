import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../css/flashcard.css'
import editIcon from '../assets/edit.png'

const StudyFlashCardPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const { id } = useParams()

  // fake data:
  const flashcards = [
    { id: 1, topic: 'React', terms: ['Components', 'Term 2', 'Term 3'], descriptions: ['Independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.', 'Description 2', 'Description 3'] },
    { id: 2, topic: 'Topic 2', terms: ['Term 1', 'Term 2'], descriptions: ['Description 1', 'Description 2'] },
  ]

  const currentFlashcardSet = flashcards.find(flashcardSet => flashcardSet.id === parseInt(id))

  const handleNextCard = () => {
    setCurrentIndex(prevIndex => (prevIndex === currentFlashcardSet.terms.length - 1 ? 0 : prevIndex + 1))
    setFlipped(false);
  }

  const handlePrevCard = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? currentFlashcardSet.terms.length - 1 : prevIndex - 1))
    setFlipped(false)
  }

  const currentTerm = currentFlashcardSet.terms[currentIndex]
  const currentDescription = currentFlashcardSet.descriptions[currentIndex]

  return (
    <div className="flashcard-container">
      <div className='flashcard-topic'>
    <span>Topic: {currentFlashcardSet.topic}</span>
    <div className="edit-icon" onClick={() => console.log('Edit clicked')}>
          <img src={editIcon} alt="Edit" />
        </div>
</div>
      <div className={`flashcard-content ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        {flipped ? currentDescription : currentTerm}
      </div>
      <div className="flashcard-controls">
        <button onClick={handlePrevCard}>Previous</button>
        <span>{currentIndex + 1}/{currentFlashcardSet.terms.length}</span>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  )
}

export default StudyFlashCardPage