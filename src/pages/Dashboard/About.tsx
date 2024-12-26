import React from 'react';
import { Box, Typography, Grid, Container, Divider } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LockIcon from '@mui/icons-material/Lock';
import { divider } from '../../assets';

const About: React.FC = () => {
  const features = [
    {
      icon: <LocalShippingIcon fontSize="large" color="primary" />,
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders above $50.',
    },
    {
      icon: <SupportAgentIcon fontSize="large" color="primary" />,
      title: 'Great Support 24/7',
      description: 'We are here to help you anytime, anywhere.',
    },
    {
      icon: <AutorenewIcon fontSize="large" color="primary" />,
      title: 'Return Available',
      description: 'Hassle-free returns within 30 days.',
    },
    {
      icon: <LockIcon fontSize="large" color="primary" />,
      title: 'Secure Payment',
      description: 'Your transactions are safe with us.',
    },
  ];

  return (
    <Container sx={{mt:8,mb:9}}>
      <Box sx={{  textAlign: 'center',}}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ border: '2px dashed #0F63A5', py:3,px:2 }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: '8px',
                  transition: '0.3s',
                  gap: 1,
                  position: 'relative',
                 
                }}
              >
                {feature.icon}
                <Box sx={{textAlign:'start'}}>
                  <Typography variant="body2"  fontWeight="medium" sx={{textAlign:'start'}}>
                    {feature.title}
                  </Typography>
                  <Typography variant="caption"  color="textSecondary" sx={{textAlign:'start'}}>
                    {feature.description}
                  </Typography>
                </Box>
                {index !== features.length - 1 && (
                  <Divider>
                    <img src={divider} alt="divider" />
                  </Divider>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
