import { Outlet, useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { fetchCurrentUser } from '../../user_auths/authenticationSlice';
import { fetchCurrentCompany, setCompany } from '../../company/companySlice'
import Preloader  from '../preloader'
import ContentBgWrapper from '../contentBgWrapper'
import LeftSidebar from '../leftSidebar'
import RightSidebar from '../rightSidebar'
import AdminHeader from '../header'
import ChatPopup from '../chatPopup'
import BackToTop from '../backToTop'
function BaseLayout() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);


	return (
      <>
        <Preloader />
        <LeftSidebar />
        <RightSidebar />
        <AdminHeader />
        <ContentBgWrapper />
        <Outlet />
        <BackToTop />
        <ChatPopup />
      </>
		)
}

export default BaseLayout;