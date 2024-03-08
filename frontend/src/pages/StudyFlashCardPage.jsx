import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/flashcard.css';
import editIcon from '../assets/edit.png';

const StudyFlashCardPage = () => {
  const [learnSet, setLearnSet] = useState({});
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3000/set/${id}/flashcard`
        const options = {
          method: 'GET',
          headers: {
            'Authorization': 'b0036e07-d0b4-4a34-8b32-58f889d75598',
          }
        }
        const response = await fetch(url, options)
        const flashData = await response.json()
        setFlashcards(flashData)

        const setId = flashData[0].set
        const learnSetUrl = `http://localhost:3000/set/${setId}`;
        const learnSetResponse = await fetch(learnSetUrl, options);
        const learnSetData = await learnSetResponse.json();
        setLearnSet(learnSetData);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  
    fetchData()
  }, [id])

  const handleNextCard = () => {
    setCurrentIndex(prevIndex => (prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1))
    setFlipped(false)
  }

  const handlePrevCard = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1))
    setFlipped(false)
  }

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div role="flashcard-container" className="flashcard-container">
      <div role="flashcard-topic" className='flashcard-topic'>{learnSet.set}
        <Link to={`/edit/${id}`} className="edit-icon">
          <img src={editIcon} alt="Edit" />
        </Link>
      </div>
      <div role="flipper" className={`flipper ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        <div className="front flashcard-content">
          {currentFlashcard && currentFlashcard.term}
        </div>
        <div className="back flashcard-content">
          {currentFlashcard && currentFlashcard.definition}
        </div>
      </div>
      <div className="flashcard-controls">
        <button onClick={handlePrevCard}>Previous</button>
        <span>{currentIndex + 1}/{flashcards.length}</span>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default StudyFlashCardPage;
