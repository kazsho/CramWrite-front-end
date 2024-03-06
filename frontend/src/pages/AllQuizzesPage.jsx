import React, { useState, useEffect } from "react";
import "../css/allQuizzes.css";

const AllQuizzesPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const url = `http://localhost:3000/quiz/`;
        const response = await fetch(url);
        const data = await response.json();
        setQuizzes([data]);
      } catch (error) {
        console.error("Error fetching quizzes", error);
        setQuizzes([]);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="all-quizzes-page">
      <div className="section">
        <h2 className="section-title">All Quizzes</h2>
        <div className="quizzes-grid">
          {Array.isArray(quizzes) &&
            quizzes.map((quiz, index) => (
              <div
                key={`${quiz.id}-${index}`}
                className="quiz-card"
                style={{ backgroundColor: "#FFA07A" }}
              >
                {quiz.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllQuizzesPage;
