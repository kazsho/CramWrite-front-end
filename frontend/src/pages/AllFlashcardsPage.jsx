import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../css/allFlashcardsPage.css";

const AllFlashcardsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [flashcards, setFlashcards] = useState([]);

  const placeholderFolders = [
    { id: 1, name: "Coding", color: "#E9DBDB" },
    { id: 2, name: "Project Management", color: "#CCDCE8" },
  ];

  const placeholderFlashcards = [
    { title: "Redux", color: "#C8E6C9" },
    { title: "Redux", color: "#C8E6C9" },
    { title: "Redux", color: "#C8E6C9" },
    { title: "Stakeholder Analysis", color: "#FFCDD2" },
    { title: "Stakeholder Analysis", color: "#FFCDD2" },
    { title: "Stakeholder Analysis", color: "#FFCDD2" },
    { title: "Agile", color: "#E1BEE7" },
    { title: "Agile", color: "#E1BEE7" },
    { title: "Agile", color: "#E1BEE7" },
  ];

  const [folders, setFolders] = useState(placeholderFolders);


  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const url = `http://localhost:3000/set`;
        const options = {
          method: "GET",
          headers: {
            Authorization: 'b0036e07-d0b4-4a34-8b32-58f889d75598'
          }
        }
        const response = await fetch(url, options);
        const data = await response.json();
        setFlashcards(data);
      } catch (error) {
        console.error("Error fetching folders", error);
        setFlashcards([]);
      }
    };
    
    fetchFlashcards();
  }, []);

  const onFlashcardClick = (flashcardId) => {
    navigate(`./pages/StudyFlashCardPage/${flashcardId}`); 
  };

  return (
    <div className="dashboard">
      <div className="section">
        <h2 className="section-title">Your Folders</h2>
        <div className="folder-grid">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="folder-card"
              style={{ backgroundColor: folder.color }}
            >
              {folder.name}
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">Your Flashcards</h2>
        <div className="flashcard-grid">
          {flashcards.map(
            (
              flashcard,
              index 
            ) => (
              <div
                key={flashcard.id || index} 
                className="flashcard-item"
                onClick={() => onFlashcardClick(flashcard.id)}
                // style={{ backgroundColor: flashcard.color }}
              >
                {flashcard.set}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFlashcardsPage;
