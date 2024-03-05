import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import CreateFlashCardPage from './pages/CreateFlashCardPage.jsx';
import CreateQuizPage from './pages/CreateQuizPage.jsx';
import PlayQuizPage from './pages/PlayQuizPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AllFlashcardsPage from './pages/AllFlashcardsPage.jsx'
import AllQuizzesPage from './pages/AllQuizzesPage.jsx';
import StudyFlashCardPage from './pages/StudyFlashCardPage.jsx';
 
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Homepage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/flashcards' element={<AllFlashcardsPage/>}/>
        <Route path="/flashcard/create" element={<CreateFlashCardPage />} />
        <Route path='/quizzes' element={<AllQuizzesPage/>}/>
        <Route path="/quiz/create" element={<CreateQuizPage />} />
        <Route path="/quiz/play/:id" element={<PlayQuizPage />} />
        <Route path="/flashcard/study/:id" element={<StudyFlashCardPage />} />
      </Route>  
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);