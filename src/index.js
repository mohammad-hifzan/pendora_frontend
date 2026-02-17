import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './index.css';
import $ from 'jquery';
import 'bootstrap';
import MangaList from './components/mangaList'
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
// route imports
import PrivateRoute from './components/privateRoute';
// workspace imports
// auth imports
import WorkSpaceRegister from './workspace/auth/register'
import WorkSpaceLogin from './workspace/auth/login'
// company imports
import CreateCompany from './workspace/createCompany'
import CompanySelection from './workspace/companySelection'
// dashboard imports
import Dashboard from './workspace/company/dashboard'
// chapter imports
import WorkSpaceChapters from './workspace/company/chapters/chapters'
import AddChapter from './workspace/company/chapters/addChapter'
import EditChapter from './workspace/company/chapters/editChapter'
// manga imports
import WorkSpaceMangas from './workspace/company/mangas/mangas'
import AddManga from './workspace/company/mangas/addManga'
import EditManga from './workspace/company/mangas/editManga'
// novel imports
import AdminNovels from './workspace/company/novels/novels'
import AddNovel from './workspace/company/novels/addNovel'
import EditNovel from './workspace/company/novels/editNovel'
// user imports
import WorkSpaceUsers from './workspace/company/users/users'
import EditUser from './workspace/company/users/editUser'
// layout imports
import BaseLayout from './workspace/layouts/baseLayout'
import NoSidebarLayout from './workspace/layouts/noSidebarLayout'
import AuthLayout from './workspace/layouts/authLayout'
import RootLayout from './workspace/layouts/rootLayout'
// super admin imports
import AdminRoles from './admin/roles/index'
import AdminChapters from './admin/chapters';
import AdminEditChapter from './admin/chapters/edit';
import AdminMangas from './admin/mangas';
import AdminEditManga from './admin/mangas/edit';
import AdminUsers from './admin/users';
import AdminEditUser from './admin/users/edit';
import AdminCategories from './admin/categories'; 
import AdminCompanies from './admin/companies/index';

// admin imports --- IGNORE ---
import Error404 from './errors/error404'
import ErrorBoundary from './components/errorBoundary';


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
            <Route path="novels" >
              <Route index element={<PrivateRoute><AdminNovels /></PrivateRoute>} />
              <Route path="add" element={<PrivateRoute><AddNovel /></PrivateRoute>} />
              <Route path="edit/:id" element={<PrivateRoute><EditNovel /></PrivateRoute>} />
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
            {/* <Route path="roles" element={<PrivateRoute><AdminRoles /></PrivateRoute>} /> */}
          </Route>

          <Route path="new" element={<PrivateRoute><CreateCompany /></PrivateRoute>}/>

          <Route element={<NoSidebarLayout />} >
            <Route path="companies" element={<PrivateRoute><CompanySelection /></PrivateRoute>}/>
          </Route>
        </Route>
        <Route path="/admin" element={<RootLayout />}>
          <Route element={<BaseLayout />}>
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
            <Route path="companies" element={<PrivateRoute><AdminCompanies /></PrivateRoute>} />
            <Route path="mangas" >
              <Route index element={<AdminMangas />} />
              {/* <Route path="add" element={<AddManga />} /> */}
              <Route path="edit/:id" element={<AdminEditManga />} />
              <Route path=":id/chapters">
                <Route index element={<AdminChapters />} />
                {/* <Route path="add" element={<AddChapter />} /> */}
                <Route path=":chapter_id/edit" element={<AdminEditChapter />} />
              </Route>
            </Route>
            <Route path="users">
              <Route index element={<AdminUsers />} />
              <Route path=":id/edit" element={<AdminEditUser />} />
            </Route>
            <Route path="roles" element={<AdminRoles />} />
            <Route path="categories" element={<AdminCategories />} />
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
    <ErrorBoundary>
      <Provider store={store}>
        <RootApp />
      </Provider>
    </ErrorBoundary>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
