import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import {newsletter,patternone,pattertwo,star} from '../../assets'

const NewsletterSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#0F63A5',
  padding: '60px',
  borderRadius: '10px',
  overflow: 'hidden',
  zIndex: 1,
}));

const NewsletterShape = styled('span')({
  position: 'absolute',
  zIndex: -1,
  img: {
    opacity: 0.4,
  },
});

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '10px',
  backgroundColor: theme.palette.primary.main,
  padding: '16px 24px',
  borderRadius: '50px',
  color: '#fff',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor:'white',
    color:'primary.main'
  },
}));

const NewsletterImage = styled('img')({
  width: '100%',
  maxWidth: '400px',
  position: 'absolute',
  bottom: 0,
  right: '60px',
  textAlign: 'right',
});

const OurNewsletter: React.FC = () => {
  return (
    <Box sx={{ pb: 12, mt:10 }}>
      <Container>
        <NewsletterSection>
          {/* Patterns */}
          <NewsletterShape style={{ top: 0, left: 0 }}>
            <img src={patternone} alt="Pattern Shape" />
          </NewsletterShape>
          <NewsletterShape style={{ top: 0, right: 0 }}>
            <img src={pattertwo} alt="Pattern Shape" />
          </NewsletterShape>
          <NewsletterShape style={{ top: '28%', right: '40%' }}>
            <img src={star} alt="Shape" />
          </NewsletterShape>

          <Grid container spacing={10} >
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" color="primary" gutterBottom sx={{
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
                      textShadow: '2px 2px 10px rgba(0, 0, 0, )',
                      textAlign: 'justify',
                }}>
                  Our Newsletter
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 ,color:'white',mt:2,textAlign:'justify'}}>
                  Get weekly updates. Sign up and get up to{' '}
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
                                // borderBottom: '2px solid',
                                // borderImage: 'linear-gradient(90deg, #ff6ec4, #7873f5, #6effd6, #ff6ec4) 1',
                            }}
                        >
                            20% off
                        </span>

                    {' '}
                  your first purchase.
                </Typography>
                <Box sx={{ position: 'relative', maxWidth: '500px' }}>
                  <StyledInput
                    fullWidth
                    placeholder="Write your Email Address"
                    variant="outlined"
                
                  />
                  <StyledButton>Subscribe</StyledButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
              <NewsletterImage src={newsletter} alt="Newsletter" />
            </Grid>
          </Grid>
        </NewsletterSection>
      </Container>
    </Box>
  );
};

export default OurNewsletter;
