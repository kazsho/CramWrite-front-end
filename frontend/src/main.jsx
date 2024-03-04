import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
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
 
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Homepage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path="/flashcard/create" element={<CreateFlashCardPage />} />
        <Route path="/quiz/create" element={<CreateQuizPage />} />
        <Route path="/quiz/play/:id" element={<PlayQuizPage />} />
        <Route path="/flashcard/study/:id" element={<PlayQuizPage />} />
      </Route>  
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);