import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "../css/flashcard.css"

const StudyFlashCardPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const { id } = useParams()

  // fake data:
  const flashcards = [
    { id: 1, topic: 'Topic 1', terms: ['Term 1', 'Term 2', 'Term 3'], descriptions: ['Description 1', 'Description 2', 'Description 3'] },
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
      <h1> Topic: {currentFlashcardSet.topic}</h1>
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