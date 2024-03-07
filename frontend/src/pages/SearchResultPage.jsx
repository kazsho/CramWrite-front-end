import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import '../css/search.css'

const SearchResultItem = ({ result }) => {
  const cardClass = result.type === 'quiz' ? 'quiz-card' : 'flashcard-card';
  const backgroundColor = result.type === 'flashcardSet' ? { backgroundColor: result.colour } : {};

  return (
    <Link to={result.type === 'quiz' ? `/quiz/play/${result.id}` : `/flashcard/study/${result.id}`} className={cardClass} style={backgroundColor}>
      <div className="result-info">
        <p>{result.name}</p>
        {result.type === 'flashcardSet' && <p>{result.set}</p>}
      </div>
    </Link>
  )
}

const SearchResultPage = () => {
  const [allQuizzes, setAllQuizzes] = useState([])
  const [allFlashcardSets, setAllFlashcardSets] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const [searchParams] = useSearchParams()
  const term = searchParams.get('term')

  useEffect(() => {
    setSearchTerm(term)
  }, [term])

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const url = 'http://localhost:3000/quiz/';
        const options = {
          method: 'GET',
          headers: {
            Authorization: 'b0036e07-d0b4-4a34-8b32-58f889d75598'
          }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setAllQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    const fetchFlashcardSets = async () => {
      try {
        const url = 'http://localhost:3000/set';
        const options = {
          method: 'GET',
          headers: {
            Authorization: 'b0036e07-d0b4-4a34-8b32-58f889d75598'
          }
        }
        const response = await fetch(url, options)
        const data = await response.json()
        setAllFlashcardSets(data)
      } catch (error) {
        console.error('Error fetching flashcard sets:', error)
      }
    };

    fetchQuizzes()
    fetchFlashcardSets()
  }, [])

  useEffect(() => {
    const filteredQuizzes = allQuizzes.filter(item =>
      item && item.name && item.name.toLowerCase().includes(term.toLowerCase())
    ).map(quiz => ({ ...quiz, type: 'quiz' }))
    const filteredFlashcardSets = allFlashcardSets.filter(item =>
      item && item.set && item.set.toLowerCase().includes(term.toLowerCase())
    ).map(set => ({ ...set, type: 'flashcardSet' }))
    const filteredData = [...filteredQuizzes, ...filteredFlashcardSets]
    setSearchResults(filteredData)
  }, [term, allQuizzes, allFlashcardSets])

  const quizzes = searchResults.filter(result => result.type === 'quiz');
  const flashcardSets = searchResults.filter(result => result.type === 'flashcardSet')

  return (
    <div className="search-page">
      <h1>Search Results for "{searchTerm}"</h1>
      <div className="quizzes-section">
        <h2 className="section-title">Quizzes</h2>
        <div className="quizzes-grid">
          {quizzes.map((result, index) => (
            <SearchResultItem key={index} result={result} />
          ))}
        </div>
      </div>
      <div className="flashcard-sets-section">
        <h2 className="section-title">Flashcard Sets</h2>
        <div className="flashcard-sets-grid">
          {flashcardSets.map((result, index) => (
            <SearchResultItem key={index} result={result} />
          ))}
        </div>
      </div>
    </div>
  )
}


export default SearchResultPage