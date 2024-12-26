import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { Container, styled } from '@mui/system';
import { TbShoppingCartSearch } from 'react-icons/tb';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TbReorder } from 'react-icons/tb';
import { TbTruckDelivery } from 'react-icons/tb';

// Styled component for the number indicator on the card
const StyledNumber = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  right: '24px',
  width: '40px',
  height: '56px',
  borderRadius: '0 0 100px 100px',
  fontSize: '20px',
  fontWeight: 'bold',
}));

// Styled component for the icons with hover animation
const StyledIcon = styled(Avatar)(({ theme }) => ({
  width: '60px',
  height: '60px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '50%',
  fontSize: '30px',
  marginBottom: '12px',
  transition: 'transform 0.3s ease', // Icon scaling effect on hover
  '&:hover': {
    transform: 'scale(1.2)', // Icon scaling effect on hover
  }
}));

// Styled card with hover animation for the whole card and text elements
const AnimatedCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  '&:hover .card-title': {
    transform: 'scale(1.1)', // Animate title on card hover
    color: theme.palette.primary.main, // Change title color on hover
  },
  '&:hover .card-description': {
    opacity: 0.8, // Slight fade of description on hover
    transform: 'translateY(-5px)', // Slight upwards movement of description
  },
  '&:hover .number-indicator': {
    backgroundColor: theme.palette.secondary.main, // Change background color of number on hover
  },
}));

const WorkProcessing: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <TbShoppingCartSearch />,
      title: 'Browsing & Choosing',
      description: 'Customers visit your online store, browse your products and choose the ones they like.',
    },
    {
      number: '02',
      icon: <RiSecurePaymentLine />,
      title: 'Checkout & Payment',
      description: 'After selecting items, customers proceed to checkout and complete the payment securely.',
    },
    {
      number: '03',
      icon: <TbReorder />,
      title: 'Order Fulfillment',
      description: 'Once the order is placed, the fulfillment team gets to work on preparing the items for shipment.',
    },
    {
      number: '04',
      icon: <TbTruckDelivery />,
      title: 'Delivery to Customer',
      description: 'The order is shipped out with a trusted delivery partner and reaches the customer.',
    },
  ];

  return (
    <Container>
      <Box component="section" sx={{ pt: 4, pb: 12 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h6"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}
          >
            <span>✨</span>
            <span>Work Processing</span>
            <span>✨</span>
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
              color: 'primary.main',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            How It Works
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AnimatedCard>
                <StyledNumber className="number-indicator">{step.number}</StyledNumber>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'start',
                      flexDirection: 'column',
                      textAlign: 'justify',
                      mb: 2,
                    }}
                  >
                    <StyledIcon>{step.icon}</StyledIcon>
                    <Typography
                      variant="body1"
                      className="card-title"
                      sx={{
                        fontWeight: 'bold',
                        mt: 1,
                        fontSize: '16px',
                        color: 'text.primary',
                        transition: 'transform 0.3s ease', // Added transition for text
                      }}
                    >
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    className="card-description"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      transition: 'opacity 0.3s ease, transform 0.3s ease', // Added transition for description
                      textAlign:'justify'
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WorkProcessing;
