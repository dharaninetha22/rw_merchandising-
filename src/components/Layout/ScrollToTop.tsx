import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styled } from '@mui/system';

// Styled Fab component for custom animation
const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '30px',
  zIndex: 999,
  width: '50px',
  height: '50px',
  color: '#0F63A5', // Icon color
  fontSize: '30px',
  backgroundColor: '#fff',
  padding: 0,
  borderRadius: '50%',
  transition: 'ease-out 200ms',
  transform: 'translateY(100%)',
  animation: 'none',

  // Apply pulse animation when the button is visible
  '&.visible': {
    transform: 'translateY(0%)',
    animation: 'animate-pulse 3s linear infinite',
  },

  '@keyframes animate-pulse': {
    '0%': {
      transform: 'translateY(-15%)',
      boxShadow: '0 0 10px 5px rgba(0, 112, 255, 0.5)', // Light blue shadow at start
    },
    '50%': {
      transform: 'translateY(0%)',
      boxShadow: '0 0 15px 10px rgba(0, 112, 255, 0.7)', // Light blue shadow at peak
    },
    '100%': {
      transform: 'translateY(-15%)',
      boxShadow: '0 0 10px 5px rgba(0, 112, 255, 0.5)', // Light blue shadow at end
    },
  },
}));

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Handle visibility of the button on scroll
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledFab
      className={visible ? 'visible' : ''}
      onClick={scrollToTop}
      aria-label="scroll to top"
    >
      <ArrowUpwardIcon />
    </StyledFab>
  );
};

export default ScrollToTop;
