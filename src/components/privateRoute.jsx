import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrentCompany, setCompany } from '../company/companySlice'
import React, { useState, useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  const { currentCompany, loading: companyLoading, error } = useSelector(state => state.company);
  useEffect(() => {
    dispatch(fetchCurrentCompany());
  }, [dispatch]);
  
  if (loading || companyLoading) return <div>Loading...</div>;
  const authenticated = isAuthenticated && user
  const redirect = window.location.pathname.includes("workspace") ? "/workspace/error" : "/login"
  if (window.location.pathname.includes('workspace')) {   
    if (!user && !loading) {
      return <Navigate to="/workspace/login" />;
    } else if (user?.role !== 'admin' && window.location.pathname !== "/workspace/new") {
      return <Navigate to="/workspace/new" />;
    } else if (user?.role === 'admin' && window.location.pathname == '/workspace/new') {
      return children
    } else if (user?.role === 'admin' && !currentCompany && !window.location.pathname.includes('/workspace/companies')) {
      return <Navigate to="/workspace/companies" />;
    }
  }

  return children;
  };

export default PrivateRoute;
