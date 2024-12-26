import React, { useRef } from 'react';
import { Box, Container, Typography, Button, Divider } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper'; // Correct import for Swiper 8+
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import the Autoplay styles
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import MUI icons
import { product7, product8, line, product1, product3, product9, product10, product2, product14 } from '../../assets';

const categories = [
  { name: 'Caps', image: product3 },
  { name: '4 in 1 kits', image: product7 },
  { name: '2 in 1 kits', image: product8 },
  { name: 'bags', image: product9 },
  { name: 'Jute Bags', image: product2 },
  { name: 'Safety Helmet', image: product10 },
  { name: 'Tape', image: product14 },
];

const Categories: React.FC = () => {
  const swiperRef = useRef<any>(null); // Create a reference for the Swiper instance

  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, rgba(15, 25, 38, 1) 0%, rgba(15, 99, 165, 1) 100%)',
        padding: '40px 0',
      }}
    >
      <Container>
        <Box mb={4}>
          <Typography variant="body2" fontWeight="medium" sx={{ textAlign: 'start', color: '#fff' }}>
            Categories
          </Typography>
          <Typography
            variant="h5"
            fontWeight="700"
            sx={{ textAlign: 'start', color: '#fff', mt: 1 }}
          >
            Browse Top Categories
          </Typography>
        </Box>

        <Box position="relative">
          <Swiper
            ref={swiperRef} // Attach the swiperRef to the Swiper instance
            modules={[Navigation, Autoplay]} // Enable both Navigation and Autoplay modules
            spaceBetween={20}
            slidesPerView={5}
           
            autoplay={{
              delay: 2500, // Time between slides in milliseconds
              disableOnInteraction: false, // Allow autoplay to continue after interaction
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              960: { slidesPerView: 2 },
              1200: { slidesPerView: 5 },
            }}
            style={{ padding: '20px 0' }}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    <Box
                      component="img"
                      src={category.image}
                      alt={category.name}
                      sx={{
                        width: 200,
                        height: 200,
                        borderRadius: 5,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: 'none',
                          borderRadius: 4,
                          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                          whiteSpace: 'nowrap',
                          padding: '4px 12px',
                          background: 'white',
                          color: 'black',
                        }}
                      >
                        {category.name}
                      </Button>
                    </Box>
                  </Box>
                  <Box>
                    {index !== categories.length - 1 && (
                      <Divider
                        sx={{
                          '&::before, &::after': {
                            borderColor: 'transparent', // Remove default border lines
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={line}
                          alt="divider"
                          sx={{
                            height: 'auto',
                            maxWidth: '100px', // Adjust size as needed
                            filter: 'invert(100%)', // Adjust for visibility if needed
                          }}
                        />
                      </Divider>
                    )}
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <Box
            sx={{
              position: 'absolute',
              top: '-7%',
              right: 0,
              display: 'flex',
              gap: 2,
              zIndex: 10,
              transform: 'translateY(-50%)', // Centers the arrows vertically
            }}
          >
            {/* Previous Button */}
            <Button
              sx={{
                width: 50,
                height: 50,
                minWidth:'0',
                backgroundColor: '#fff',
                color: '#30779d',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: '#30779d',
                  color:'white'
                },
              }}
              onClick={() => swiperRef.current.swiper.slidePrev()} // Go to previous slide
            >
              <ArrowBack />
            </Button>

            {/* Next Button */}
            <Button
              sx={{
                width: 50,
                height: 50,
                minWidth:'0',
                backgroundColor: '#fff',
                color: '#30779d',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: '#30779d',
                   color:'white'
                },
              }}
              onClick={() => swiperRef.current.swiper.slideNext()} // Go to next slide
            >
              <ArrowForward />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
