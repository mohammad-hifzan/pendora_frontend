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
  const redirect = window.location.pathname.includes("admin") ? "/admin/error" : "/login"
  if (window.location.pathname.includes('admin')) {    
    if (user?.role !== 'admin' && window.location.pathname !== "/admin/new") {
      return <Navigate to="/admin/new" />;
    }

    if (user?.role === 'admin' && !currentCompany && !window.location.pathname.includes('/admin/companies')) {
      return <Navigate to="/admin/companies" />;
    }
  }

  return children;
  };

export default PrivateRoute;
