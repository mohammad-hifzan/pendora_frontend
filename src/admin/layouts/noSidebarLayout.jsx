import { Outlet, useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { fetchCurrentUser } from '../../user_auths/authenticationSlice';
import Preloader  from '../preloader'
import ContentBgWrapper from '../contentBgWrapper'
import AdminHeader from '../header'
import ChatPopup from '../chatPopup'
import BackToTop from '../backToTop'
function NoSidebarLayout() {
	const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
	return (
      <>
        <Preloader />
        <AdminHeader />
        <ContentBgWrapper />
        <Outlet />
        <BackToTop />
        <ChatPopup />
      </>
		)
}

export default NoSidebarLayout;