import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './index.css';
import $ from 'jquery';
import 'bootstrap';
import AddManga from './components/addManga'
import MangaList from './components/mangaList'
import WizardLayout from './layouts/wizardLayout'
import SignUp from './components/signUp'
import Login from './components/login'
import MangaShow from './components/mangaShow'
import Chapter from './components/chapters'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function RootApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<MangaList products='all'/>} />
          <Route path= '/latest' element={<MangaList />} />
          <Route path= '/mangas/:id' element={<MangaShow />} />
          <Route path= '/mangas/:manga_id/chapters/:id' element={<Chapter />} />
          <Route path= '/signup' element={<SignUp />}/>
          <Route path= '/login' element={<Login />}/>
        </Route>
        
        <Route path= '/manga/add' element={<AddManga />}/>
        }
      </Routes>
    </BrowserRouter>
    )
}
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
