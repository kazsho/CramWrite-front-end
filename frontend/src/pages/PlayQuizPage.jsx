import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/quiz.css'

const PlayQuizPage = () => {
  const [questions, setQuestions] = useState([
    {
      question_id: 1,
      quiz_id: 1,
      question: 'What is an isotope?',
      good_answer: 'Same number of protons, different number of neutrons',
      bad_answer1: 'Same number of protons and different number of electrons',
      bad_answer2: 'Same number of neutrons, different number of electrons',
      bad_answer3: 'Same number of protons and neutrons'
    },
    {
      question_id: 2,
      quiz_id: 1,
      question: 'What is the capital of France?',
      good_answer: 'Paris',
      bad_answer1: 'London',
      bad_answer2: 'Berlin',
      bad_answer3: 'Madrid'
    },
    {
      question_id: 3,
      quiz_id: 1,
      question: 'What is the largest planet in our solar system?',
      good_answer: 'Jupiter',
      bad_answer1: 'Mars',
      bad_answer2: 'Earth',
      bad_answer3: 'Venus'
    }
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [shuffledOptions, setShuffledOptions] = useState([])
  const [showSubmitButton, setShowSubmitButton] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set())

   // useEffect(() => {
  //   // const fetchQuestions = async () => {
  //   //   try {
  //   //     const response = await fetch('http://localhost:3000/questions');
  //   //     const data = await response.json();
  //   //     setQuestions(data);
  //   //   } catch (error) {
  //   //     console.error('Error fetching questions:', error);
  //   //   }
  //   // };

  //   // fetchQuestions();
  // }, []);

  useEffect(() => {
    shuffleOptions()
  }, [currentIndex])

  useEffect(() => {
    setShowSubmitButton(currentIndex === questions.length - 1)
  }, [currentIndex, questions])

  const shuffleOptions = () => {
    const { good_answer, bad_answer1, bad_answer2, bad_answer3 } = questions[currentIndex] || {}
    const options = [good_answer, bad_answer1, bad_answer2, bad_answer3].filter(Boolean)
    const shuffledOptions = options.sort(() => Math.random() - 0.5)
    setShuffledOptions(shuffledOptions)
  }
  

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
  }

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentIndex].good_answer && !answeredQuestions.has(currentIndex)) {
      setScore(score + 1)
      setAnsweredQuestions(new Set(answeredQuestions.add(currentIndex)))
    }

    setCurrentIndex(currentIndex + 1)
    setSelectedAnswer('')
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== '') {
      if (selectedAnswer === questions[currentIndex].good_answer && !answeredQuestions.has(currentIndex)) {
        setScore(score + 1)
        setAnsweredQuestions(new Set(answeredQuestions.add(currentIndex)))
      }
      setSelectedAnswer('')
    }
  
    setCurrentIndex(currentIndex + 1)
  }

  const handlePrevQuestion = () => {
    setCurrentIndex(currentIndex - 1)
    setSelectedAnswer('')
  }
  
  return (
  <>
  <div className="quiz-container">
    {currentIndex < questions.length ? (
    <div>
      <div className='quiz-question'>{questions[currentIndex].question}</div>
      <div className="quiz-options">
        {shuffledOptions.map((option, index) => (
        <div 
        key={index} 
        className={`quiz-option ${option === selectedAnswer ? 'selected' : ''}`} 
        onClick={() => handleAnswerSelect(option)}>
          {option}
          </div>
          ))}
          </div>
          <div className="quiz-footer">
            <button className="quiz-nav-btn" disabled={currentIndex === 0} onClick={handlePrevQuestion}>Previous</button>
            <span className="quiz-count">{currentIndex + 1}/{questions.length}</span>
            <button className="quiz-nav-btn" disabled={currentIndex === questions.length - 1} onClick={handleNextQuestion}>Next</button>
          </div>
        </div>
      ) : (
        <div className="quiz-result">
          <div>Your final score: {score}/{questions.length}</div>
          <Link to="/" className="quiz-link">Back to Home</Link>
        </div>
      )}
    </div>
    {showSubmitButton && (
        <div className="submit-container">
          <button className="quiz-submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </>
  )
}


export default PlayQuizPage
