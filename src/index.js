import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './index.css';
import $ from 'jquery';
import 'bootstrap';
import MangaList from './components/mangaList'
import SignUp from './components/signUp'
import Login from './components/login'
import WorkSpaceRegister from './workspace/auth/register'
import WorkSpaceLogin from './workspace/auth/login'
import MangaShow from './components/mangaShow'
import Chapter from './components/chapters'
import Bookmark from './components/bookmark'
import Blog from './components/blog'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './user_auths/store';
import PrivateRoute from './components/privateRoute';
import CreateCompany from './workspace/createCompany'
import CompanySelection from './workspace/companySelection'
import Dashboard from './workspace/company/dashboard'
import WorkSpaceMangas from './workspace/company/mangas/mangas'
import WorkSpaceChapters from './workspace/company/chapters/chapters'
import AddManga from './workspace/company/mangas/addManga'
import AddChapter from './workspace/company/chapters/addChapter'
import EditChapter from './workspace/company/chapters/editChapter'
import EditManga from './workspace/company/mangas/editManga'
import WorkSpaceUsers from './workspace/company/users/users'
import EditUser from './workspace/company/users/editUser'
import SuperAdminRoles from './super_admin/roles/index'
import BaseLayout from './workspace/layouts/baseLayout'
import NoSidebarLayout from './workspace/layouts/noSidebarLayout'
import AuthLayout from './workspace/layouts/authLayout'
import RootLayout from './workspace/layouts/rootLayout'
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
        <Route path='/workspace' element={<RootLayout />}>
          <Route element={<AuthLayout />}>
            <Route path= 'signup' element={<WorkSpaceRegister />} />
            <Route path= 'login'  element={<WorkSpaceLogin />} />
          </Route>
          <Route element={<BaseLayout />}>
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
            <Route path="mangas" >
              <Route index element={<PrivateRoute><WorkSpaceMangas /></PrivateRoute>} />
              <Route path="add" element={<PrivateRoute><AddManga /></PrivateRoute>} />
              <Route path="edit/:id" element={<PrivateRoute><EditManga /></PrivateRoute>} />
              <Route path=":id/chapters">
                <Route index element={<PrivateRoute><WorkSpaceChapters /></PrivateRoute>} />
                <Route path="add" element={<PrivateRoute><AddChapter /></PrivateRoute>} />
                <Route path=":chapter_id/edit" element={<PrivateRoute><EditChapter /></PrivateRoute>} />
              </Route>
            </Route>
            <Route path="users">
              <Route index element={<PrivateRoute><WorkSpaceUsers /></PrivateRoute>} />
              <Route path=":id/edit" element={<PrivateRoute><EditUser /></PrivateRoute>} />
            </Route>
            <Route path="roles" element={<PrivateRoute><SuperAdminRoles /></PrivateRoute>} />
          </Route>

          <Route path="new" element={<PrivateRoute><CreateCompany /></PrivateRoute>}/>

          <Route element={<NoSidebarLayout />} >
            <Route path="companies" element={<PrivateRoute><CompanySelection /></PrivateRoute>}/>
          </Route>
        </Route>
        <Route path= "/workspace/error" element={<Error404 />} />
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
