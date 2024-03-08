import { v4 as uuidv4 } from 'uuid';
import { TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const CreateQuizPage = () => {
  const [quizData, setQuizData] = useState({
    title: '',
    subjectArea: '',
    description: '',
    questions: [
      {
        id: uuidv4(),
        question: 'Question 1',
        correctAnswer: '',
        incorrectAnswers: ['', '', ''],
      },
    ],
  });

  const handleInputChange = (field, value) => {
    setQuizData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleQuestionInputChange = (index, field, value) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        [field]: value,
      };
      return {
        ...prevData,
        questions: updatedQuestions,
      };
    });
  };

  const addQuestion = () => {
    setQuizData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        {
          id: uuidv4(),
          question: `Question ${prevData.questions.length + 1}`,
          correctAnswer: '',
          incorrectAnswers: ['', '', ''],
        },
      ],
    }));
  };

  const deleteQuestion = (questionId) => {
    setQuizData((prevData) => {
      const updatedQuestions = prevData.questions.filter(question => question.id !== questionId);
      return {
        ...prevData,
        questions: updatedQuestions,
      };
    });
  };

  const createQuiz = () => {
    const token = localStorage.getItem('token');

  
    fetch('http://localhost:3000/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify({subject: 1, name: quizData.title, description: quizData.description}),
    })
      .then((response) => response.json())
      .then((data) => {
        quizData.questions.forEach((question) => {
          fetch('http://localhost:3000/question', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            },
            body: JSON.stringify({quiz: data.id, question: question.question, good_answer: question.correctAnswer, bad_answer1: question.incorrectAnswers[0], bad_answer2: question.incorrectAnswers[1], bad_answer3: question.incorrectAnswers[2]}),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });

     

 navigate("/");
  };


  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mt-20'>
      <h2 className='text-2xl font-semibold text-[#333]'>Create a Quiz</h2>
      <div className='mt-5 flex gap-20'>
      </div>
      <div>
        <div className='flex-1'>
          <div className='flex-1 mb-5'>
            
            <label className='block mb-1 text-[#333]'>Title</label>
            <input type='text' placeholder='Quiz Title' className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400' value={quizData.title} onChange={e => handleInputChange('title', e.target.value)} />
          </div>
          
        </div>
        <div className='flex-1'>
          <label className='block mb-1 text-[#333]'>Description</label>
          <textarea placeholder='Description' className='w-full h-[130px] bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400' value={quizData.description} onChange={e => handleInputChange('description', e.target.value)} />
        </div>
      </div>
      {/* ... (existing code) */}
      <div className='mt-10'>
        {quizData.questions.map((question, index) => (
          <div className='mb-5' key={index}>
            <div className='flex justify-between items-center'>
            <label className='block mb-1 text-[#333]'>{`Question ${index + 1}`}</label>
            <TrashIcon className='h-5 w-5 text-[#333] mb-3 cursor-pointer'  onClick={() => deleteQuestion(question.id)}   />
            </div>
            <input
              type='text'
              placeholder='Question'
              className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400'
              value={question.question}
              onChange={(e) => handleQuestionInputChange(index, 'question', e.target.value)}
            />
            <label className='block mt-2 mb-1 text-[#333]'>Correct Answer</label>
            <input
              type='text'
              placeholder='Correct Answer'
              className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400 mb-5'
              value={question.correctAnswer}
              onChange={(e) => handleQuestionInputChange(index, 'correctAnswer', e.target.value)}
            />
            <label className='block mt-2 mb-1 text-[#333]'>Incorrect Answers</label>
            {question.incorrectAnswers.map((incorrectAnswer, i) => (
              <input
                key={i}
                type='text'
                placeholder={`Incorrect Answer ${i + 1}`}
                className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md placeholder:text-gray-400 mb-5'
                value={incorrectAnswer}
                onChange={(e) =>
                  handleQuestionInputChange(index, 'incorrectAnswers', [
                    ...question.incorrectAnswers.slice(0, i),
                    e.target.value,
                    ...question.incorrectAnswers.slice(i + 1),
                  ])
                }
              />
            ))}
          </div>
        ))}
      </div>
      <button className='block bg-[#BFA7A7] mx-auto p-3 rounded-md my-4 text-sm' onClick={addQuestion}>
        Add Question
      </button>
      <button className='bg-[#533B4D] text-white p-3 rounded-md my-4 text-sm' onClick={createQuiz}>Create Quiz</button>
    </div>
  );
};

export default CreateQuizPage;
