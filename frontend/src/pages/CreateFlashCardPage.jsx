import React, { useState } from 'react';

const CreateFlashCardPage = () => {
  const [quizData, setQuizData] = useState({
    title: '',
    subjectArea: '',
    description: '',
    flashcards: [
      {
        term: 'Term 1',
        definition: '',
      },
    ],
  });

  const handleInputChange = (field, value) => {
    setQuizData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFlashCardInputChange = (index, field, value) => {
    setQuizData((prevData) => {
      const updatedFlashcards = [...prevData.flashcards];
      updatedFlashcards[index] = {
        ...updatedFlashcards[index],
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

  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mt-20'>
      <h2 className='text-2xl font-semibold'>Create flashcard set</h2>
      {/* ... (existing code) */}
      <div className='mt-10'>
        {quizData.flashcards.map((flashcard, index) => (
          <div className='mb-5' key={index}>
            <label className='block mb-1'>{`Flashcard ${index + 1}`}</label>
            <input
              type='text'
              placeholder='Term'
              className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400'
              value={flashcard.term}
              onChange={(e) => handleFlashCardInputChange(index, 'term', e.target.value)}
            />
            <label className='block mt-2 mb-1'>Definition</label>
            <textarea
              placeholder='Definition'
              className='w-full h-[130px] bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400'
              value={flashcard.definition}
              onChange={(e) => handleFlashCardInputChange(index, 'definition', e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className='block bg-[#BFA7A7] mx-auto p-3 rounded-md my-4 text-sm' onClick={addFlashCard}>
        Add Flashcard
      </button>
      <button className='bg-[#533B4D] text-white p-3 rounded-md my-4 text-sm'>Create Flashcard Set</button>
    </div>
  );
};

export default CreateFlashCardPage;
