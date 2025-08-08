// import logo from './logo.svg';
// import './App.css';
import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom"
import Mangas from './components/mangaList'
import Header from './common/header'
import Footer from './common/footer'
import SearchModel from './common/searchModel'
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './user_auths/authenticationSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {

        <div>
          <div id="preloder">
            <div className="loader"></div>
          </div>
          <div style={{minHeight: '100vh'}}>        
            <Header />
            <ToastContainer />
            <Outlet />
          </div>
          <Footer />
          <SearchModel />
        </div>

      }
    </>
  );
}


export default App;
