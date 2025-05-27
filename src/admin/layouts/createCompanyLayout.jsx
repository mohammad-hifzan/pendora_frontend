import { Outlet, useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { fetchCurrentUser } from '../../user_auths/authenticationSlice';
import Preloader  from '../preloader'
import ContentBgWrapper from '../contentBgWrapper'
import BackToTop from '../backToTop'
function CreateCompanyLayout() {
	const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
	return (
      <>
        <Preloader />
        <ContentBgWrapper />
        <Outlet />
        <BackToTop />
      </>
		)
}

export default CreateCompanyLayout;