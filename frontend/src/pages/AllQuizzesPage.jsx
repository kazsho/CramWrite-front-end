import React, { useState, useEffect } from "react";
import "../css/allQuizzes.css";

const AllQuizzesPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const url = `http://localhost:3000/quiz/`;
        const options = {
          method: "GET",
          headers: {
            Authorization: 'b0036e07-d0b4-4a34-8b32-58f889d75598'
          }
        }
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data)
        setQuizzes(data);
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
                {quiz.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllQuizzesPage;
