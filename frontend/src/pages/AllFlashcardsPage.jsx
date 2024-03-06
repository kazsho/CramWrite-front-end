import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/allFlashcardsPage.css";

const AllFlashcardsPage = () => {
  const { id } = useParams();
  const [folders, setFolders] = useState([]);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const url = `http://localhost:3000/folder/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setFolders([data]);
      } catch (error) {
        console.error("Error fetching folders", error);
        setFolders([]);
      }
    };

    const fetchFlashcards = async () => {
      try {
        const url = `http://localhost:3000/flashcards/`;
        const response = await fetch(url);
        const data = await response.json();
        setFlashcards([data]);
      } catch (error) {
        console.error("Error fetching folders", error);
        setFlashcards([]);
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
          {flashcards.map(
            (
              flashcard,
              index 
            ) => (
              <div
                key={flashcard.id || index} 
                className="flashcard-item"
                style={{ backgroundColor: flashcard.color }}
              >
                {flashcard.title}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFlashcardsPage;
