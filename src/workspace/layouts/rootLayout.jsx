import { Outlet } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../../user_auths/authenticationSlice';
import Preloader  from '../preloader'
import { ToastContainer } from 'react-toastify';
import BackToTop from '../backToTop'
import ContentBgWrapper from '../contentBgWrapper'
function BaseLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);


  return (
      <>
        <Preloader />
        <ContentBgWrapper />
        <ToastContainer />
        <Outlet />
        <BackToTop />
      </>
    )
}

export default BaseLayout;