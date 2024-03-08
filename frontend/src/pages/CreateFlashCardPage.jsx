import { TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateFlashCardPage = () => {
  const [quizData, setQuizData] = useState({
   set: '',
    flashcards: [
      {
        term: 'Term 1',
        definition: '',
      },
    ],
  });

  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setQuizData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFlashcardInputChange = (flashcardIndex, field, value) => {
    setQuizData((prevData) => {
      const updatedFlashcards = [...prevData.flashcards];
      updatedFlashcards[flashcardIndex] = {
        ...updatedFlashcards[flashcardIndex],
        [field]: value,
      };

      return {
        ...prevData,
        flashcards: updatedFlashcards,
      };
    });
  };

  const addFlashCard = () => {
    setQuizData((prevData) => ({
      ...prevData,
      flashcards: [
        ...prevData.flashcards,
        {
          term: `Term ${prevData.flashcards.length + 1}`,
          definition: '',
        },
      ],
    }));
  };

  const deleteFlashCard = (flashcardIndex) => {
    setQuizData((prevData) => {
      const updatedFlashcards = prevData.flashcards.filter((flashcard, index) => index !== flashcardIndex);
      return {
        ...prevData,
        flashcards: updatedFlashcards,
      };
    });
  };

  const createFlashCard = () => {
    fetch('http://localhost:3000/set', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify({set: quizData.set, subject: 1}),
    })
      .then((res) => res.json())
      .then((data) => {
        quizData.flashcards.forEach((flashcard) => {
          fetch('http://localhost:3000/flashcards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify({set: data.id, client: 1, subject: 1, term: flashcard.term, definition: flashcard.definition}),
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        });
      });
      navigate("/")
  } 

  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mt-20'>
      <h2 className='text-2xl font-semibold text-[#333]'>Create Flashcard Set</h2>
      <div className='mt-10'>
        <div className='mb-5'>
          <div className='flex-1 mb-5'>
            <label className='block mb-1 text-[#333]'>Title</label>
            <input
              type='text'
              placeholder='Title'
              className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400'
              value={quizData.set}
              onChange={(e) => handleInputChange('set', e.target.value)}
            />
          </div>

        </div>
        {quizData.flashcards.map((flashcard, index) => (
          <div className='mb-5' key={index}>
            <div className='flex justify-between items-center'>
              <label className='block mb-1'>{`Flashcard ${index + 1}`}</label>
              <TrashIcon
                className='h-5 w-5 text-[#333] mb-3 cursor-pointer'
                onClick={() => deleteFlashCard(index)}
              />
            </div>
            <input
              type='text'
              placeholder='Term'
              className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400'
              value={flashcard.term}
              onChange={(e) => handleFlashcardInputChange(index, 'term', e.target.value)}
            />
            <label className='block mt-2 mb-1'>Definition</label>
            <textarea
              placeholder='Definition'
              className='w-full h-[130px] bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400'
              value={flashcard.definition}
              onChange={(e) => handleFlashcardInputChange(index, 'definition', e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className='block bg-[#BFA7A7] mx-auto p-3 rounded-md my-4 text-sm' onClick={addFlashCard}>
        Add Flashcard
      </button>
      <button className='bg-[#533B4D] text-white p-3 rounded-md my-4 text-sm' onClick={createFlashCard}>Create Flashcard Set</button>
    </div>
  );
};

export default CreateFlashCardPage;
