import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './index.css';
import $ from 'jquery';
import 'bootstrap';
import MangaList from './components/mangaList'
import WizardLayout from './layouts/wizardLayout'
import SignUp from './components/signUp'
import Login from './components/login'
import MangaShow from './components/mangaShow'
import Chapter from './components/chapters'
import Bookmark from './components/bookmark'
import Blog from './components/blog'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './user_auths/store';
import PrivateRoute from './components/privateRoute';
import CreateCompany from './admin/createCompany'
import CompanySelection from './admin/companySelection'
import Dashboard from './admin/company/dashboard'
import AdminMangas from './admin/company/mangas/mangas'
import AdminChapters from './admin/company/chapters/chapters'
import AddManga from './admin/company/mangas/addManga'
import AddChapter from './admin/company/chapters/addChapter'
import EditChapter from './admin/company/chapters/editChapter'
import EditManga from './admin/company/mangas/editManga'
import AdminUsers from './admin/company/users/users'
import Role from './admin/company/role'
import BaseLayout from './admin/layouts/baseLayout'
import CreateCompanyLayout from './admin/layouts/createCompanyLayout'
import NoSidebarLayout from './admin/layouts/noSidebarLayout'
import Error404 from './errors/error404'


const root = ReactDOM.createRoot(document.getElementById('root'));
function RootApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<MangaList products='all'/>} />
          <Route path= '/mangas/' element={<MangaList />} />
          <Route path="/bookmark" element={<PrivateRoute><Bookmark /></PrivateRoute>}/>
          {/* <Route path= '/bookmark' element={<Bookmark />} /> */}
          <Route path= '/blog' element={<Blog />} />
          <Route path= '/mangas/:id' element={<MangaShow />} />
          <Route path= '/mangas/:manga_id/chapters/:id' element={<Chapter />} />
          <Route path= '/signup' element={<SignUp />}/>
          <Route path= '/login' element={<Login />}/>
        </Route>
        <Route path='/admin'>
          <Route element={<BaseLayout />}>
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
            <Route path="mangas" >
              <Route index element={<PrivateRoute><AdminMangas /></PrivateRoute>} />
              <Route path="add" element={<PrivateRoute><AddManga /></PrivateRoute>} />
              <Route path="edit/:id" element={<PrivateRoute><EditManga /></PrivateRoute>} />
              <Route path=":id/chapters">
                <Route index element={<PrivateRoute><AdminChapters /></PrivateRoute>} />
                <Route path="add" element={<PrivateRoute><AddChapter /></PrivateRoute>} />
                <Route path=":chapter_id/edit" element={<PrivateRoute><EditChapter /></PrivateRoute>} />
              </Route>
            </Route>
            <Route path="users" element={<PrivateRoute><AdminUsers /></PrivateRoute>} />
            <Route path="role" element={<PrivateRoute><Role /></PrivateRoute>} />
          </Route>
          <Route element={<CreateCompanyLayout />} >
            <Route path="new" element={<PrivateRoute><CreateCompany /></PrivateRoute>}/>
          </Route>
          <Route element={<NoSidebarLayout />} >
            <Route path="companies" element={<PrivateRoute><CompanySelection /></PrivateRoute>}/>
          </Route>
        </Route>
        <Route path= "/admin/error" element={<Error404 />} />
        <Route path= "/error" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    )
}

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RootApp />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
