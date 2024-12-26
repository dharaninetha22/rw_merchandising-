import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { LocalOffer as LocalOfferIcon } from '@mui/icons-material';
import Countdown from 'react-countdown';
import { deal } from '../../assets'; // Import the image


const HurryUp: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, rgba(15, 25, 38, 1) 0%, rgba(15, 99, 165, 1) 100%)',
       
      }}
    >
      <Container>
        <Box>
          <Box sx={{ maxWidth: 1200, width: '100%' ,}}>
            <Grid container spacing={4} pt={4}>
              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={deal} alt="Deal" style={{  height: '440px' }} />
                </Box>
              </Grid>
              {/* Countdown & Offer Section */}
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      fontSize: 20,
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '40px',
                      color: 'white',
                    }}
                  >
                    <LocalOfferIcon sx={{ marginRight: '10px' }} />
                    Deal of the Week
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: 36,
                      lineHeight: '150%',
                    //   marginBottom: '63px',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    <span style={{
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                        // fontWeight: 'bold',
                        position: 'relative',
                        textTransform: 'uppercase',
                        background: 'linear-gradient(90deg, #ff6ec4, #7873f5, #6effd6, #ff6ec4)',
                        backgroundSize: '300% 300%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'gradient-slide 3s infinite',
                        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
                        textAlign: 'start',
                      }}>
                        Hurry Up!
                    </span> Offer ends in. Get{' '}
                    <span
                      style={{
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                        // fontWeight: 'bold',
                        position: 'relative',
                        textTransform: 'uppercase',
                        background: 'linear-gradient(90deg, #ff6ec4, #7873f5, #6effd6, #ff6ec4)',
                        backgroundSize: '300% 300%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'gradient-slide 3s infinite',
                        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
                        textAlign: 'start',
                      }}
                    >
                      UP TO 80% OFF
                    </span>
                  </Typography>
                    <Box
                            sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 5,
                        flexDirection: 'column',
                        '@keyframes scaleUp': {
                        '0%': {
                            transform: 'scale(0.2)',
                        },
                        '100%': {
                            transform: 'scale(1)',
                        },
                        },
                            '@keyframes fadeIn': {
                        '0%': {
                            opacity: 0,
                        },
                        '100%': {
                            opacity: 1,
                        },
                        },
                        '@keyframes pulse': {
                        '0%': {
                            transform: 'scale(1)',
                        },
                        '50%': {
                            transform: 'scale(1.1)',
                        },
                        '100%': {
                            transform: 'scale(1)',
                        },
                        },
                        }}
                        >
                        <Countdown
                            date={Date.now() + 10000000} // Example countdown date
                        renderer={({ days, hours, minutes, seconds }) => (
                        <Grid container spacing={4} justifyContent="center">
                            {/* Day Counter */}
                            <Grid item>
                            <Box
                                sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                border: '5px solid #0F63A5',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#0F63A5',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                                animation: 'scaleUp 0.6s ease-out, pulse 1s infinite',
                                }}
                            >
                                <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: 'white',
                                    animation: 'fadeIn 1.2s ease-out',
                                }}
                                >
                                {days}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontWeight: 600, color: '#fff', marginTop: 1 }}>
                                Days
                            </Typography>
                            </Grid>

                            {/* Hour Counter */}
                            <Grid item>
                            <Box
                                sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                border: '5px solid #0F63A5',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#0F63A5',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                                animation: 'scaleUp 0.6s ease-out, pulse 1s infinite',
                                }}
                            >
                                <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: 'white',
                                    animation: 'fadeIn 1.2s ease-out',
                                }}
                                >
                                {hours}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontWeight: 600, color: '#fff', marginTop: 1 }}>
                                Hours
                            </Typography>
                            </Grid>

                            {/* Minute Counter */}
                            <Grid item>
                            <Box
                                sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                border: '5px solid #0F63A5',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#0F63A5',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                                animation: 'scaleUp 0.6s ease-out, pulse 1s infinite',
                                }}
                            >
                                <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: 'white',
                                    animation: 'fadeIn 1.2s ease-out',
                                }}
                                >
                                {minutes}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontWeight: 600, color: '#fff', marginTop: 1 }}>
                                Minutes
                            </Typography>
                            </Grid>

                            {/* Second Counter */}
                            <Grid item>
                            <Box
                                sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                border: '5px solid #0F63A5',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#0F63A5',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                                animation: 'scaleUp 0.6s ease-out, pulse 1s infinite',
                                }}
                            >
                                <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: 'white',
                                    animation: 'fadeIn 1.2s ease-out',
                                }}
                                >
                                {seconds}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontWeight: 600, color: '#fff', marginTop: 1 }}>
                                Seconds
                            </Typography>
                            </Grid>
                            
                        </Grid>
                        )}
                     />
                     
                    </Box>
                    
                    
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ padding: '16px 32px', lineHeight: '16px', fontSize: '16px' ,mt:3,mb:3}}
                    href="shops.html"
                  >
                    Shop Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HurryUp;
