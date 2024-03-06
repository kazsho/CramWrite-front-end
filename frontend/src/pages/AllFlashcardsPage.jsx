import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/allFlashcardsPage.css";

const AllFlashcardsPage = () => {
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
  const [flashcards, setFlashcards] = useState(placeholderFlashcards);

  // If the data is dynamically produced
  useEffect(() => {
    const fetchFolders = async () => {
      try {
        // What is the end point for the response on line 31?
        const response = await fetch;
        const data = await response.json();
        setFolders(data);
      } catch (error) {
        console.error("Error fetching folders", error);
      }
    };

    const fetchFlashcards = async () => {
      try {
        // What is the end point for the response on line 42?
        const response = await fetch;
        const data = await response.json();
        setFlashcards(data);
      } catch (error) {
        console.error("Error fetching flashcards", error);
      }
    };

    fetchFolders();
    fetchFlashcards();
  }, []);

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
          {flashcards.map((flashcard) => (
            <div
              key={flashcard.title}
              className="flashcard-item"
              style={{ backgroundColor: flashcard.color }}
            >
              {flashcard.title}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFlashcardsPage;
