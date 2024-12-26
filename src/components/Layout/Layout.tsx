// src/components/Layout.tsx
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

import { Box, LinearProgress } from '@mui/material';
import Footer from '../../pages/Footer';
// import { getUserProfile } from '../api/services';
// import Cookies from 'js-cookie';
// import { useQuery } from 'react-query';
import './Layout.css';
import ScrollToTop from './ScrollToTop';


const Layout = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname); // Default to current path

  // Update selected tab based on the current location
  useEffect(() => {
    setSelectedTab(location.pathname);
  }, [location]);

  return (
    <Box className="layout-container">
      <Header  />

      {/* <Menu/> */}
      <Box className="content-container">
        <Outlet />
        <ScrollToTop />
      </Box>
      <Box>
        <Footer/>
      </Box>
    </Box>
  );
};

export default Layout;
