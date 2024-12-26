import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import {white} from '../assets'

// Animation for fading in the image after it is loaded
const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

// Styled component for the preloading image with animation
const PreloadImage = styled('img')`
  max-width: 100%;
  max-height: 100%;
  animation: ${fadeInAnimation} 1s ease-in-out forwards;
`;

const Preloader: React.FC = () => {
  // State to track whether the image has loaded
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Function to handle image loading
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    // Set the image to be loaded after a delay if needed
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#0F63A5"
    >
      {/* Show a loading message or spinner while the image is loading */}
      {!isImageLoaded && (
        <Box display="flex" justifyContent="center" alignItems="center" fontSize="20px">
          Loading...
        </Box>
      )}

      {/* Display the image when it is loaded */}
      <PreloadImage
        src={white} // Replace with your image path
        alt="Preloaded Image"
        onLoad={handleImageLoad}
        style={{ display: isImageLoaded ? 'block' : 'none' }} // Hide the image until it's fully loaded
      />
    </Box>
  );
};

export default Preloader;
