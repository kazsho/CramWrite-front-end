import React, { useState, useEffect } from "react";
import "../css/allQuizzes.css";

const AllQuizzesPage = () => {
  // You would replace this with your actual data fetching logic
  const placeholderQuizzes = [
    { id: 1, title: "Redux", category: "Development" },
    { id: 2, title: "Respiratory System", category: "Biology" },
    { id: 3, title: "Health Psychology", category: "Psychology" },
    { id: 1, title: "Redux", category: "Development" },
    { id: 2, title: "Respiratory System", category: "Biology" },
    { id: 3, title: "Health Psychology", category: "Psychology" },
    { id: 1, title: "Redux", category: "Development" },
    { id: 2, title: "Respiratory System", category: "Biology" },
    { id: 3, title: "Health Psychology", category: "Psychology" },
  ];

  const [quizzes, setQuizzes] = useState(placeholderQuizzes);

  useEffect(() => {
    // Fetch quizzes here from your API and update the state
    const fetchQuizzes = async () => {
      try {
        // Replace 'your-endpoint-here' with the actual endpoint
        const response = await fetch('your-endpoint-here');
        const data = await response.json();
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="all-quizzes-page">
      <div className="section">
        <h2 className="section-title">All Quizzes</h2>
        <div className="quizzes-grid">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="quiz-card"
              style={{ backgroundColor: "#FFA07A" }} // Replace with the color logic if necessary
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