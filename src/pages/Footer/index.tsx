import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { IoLogoTwitter } from 'react-icons/io5';
import { IoIosFlower } from 'react-icons/io';
import InstagramIcon from '@mui/icons-material/Instagram';
import { footerbg, white } from '../../assets';
// import footerbg, white, shirt from "../../assets";

// Styled components
const FooterSection = styled('div')(({ theme }) => ({
  textAlign: 'start',
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  color: 'white',
  textTransform: 'uppercase',
  letterSpacing: '1px',
}));

const FooterItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  color: 'white',
  cursor: 'pointer',
  transition: 'color 0.3s ease, transform 0.3s ease',
  fontWeight: 600,
  fontSize: '15px !important',
  '&:hover': {
    color: '#0F63A5',
    transform: 'translateX(10px)',
  },
  '& svg': {
    marginRight: theme.spacing(1),
    fontSize: '1rem',
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: '#BEBDBD',
  fontSize: '24px',
  margin: theme.spacing(0.5),
  '&:hover': {
    color: '#fff',
    transform: 'scale(1.1)',
    transition: 'all 0.3s ease',
    backgroundColor: '#0F63A5',
  },
}));

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          backgroundImage: `url(${footerbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust opacity for better contrast
          zIndex: -1,
        }}
      />

      <Container>
        <footer>
          <Container sx={{ py: 4 }}>
            <Grid container spacing={{ xs: 2, sm: 10 }}>
              {/* About Section */}
              <Grid item xs={12} sm={6} md={5}>
                <FooterSection>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <img src={white} alt="Logo" style={{ width: '90px' }} />
                  </Box>
                  <Typography
                    variant="caption"
                    paragraph
                    sx={{
                      fontWeight: '600',
                      color: '#fff',
                      textAlign: 'justify',
                      marginTop: 1,
                    }}
                  >
                    Your trusted real estate partner, delivering personalized
                    strategies and proven expertise to ensure project success
                    and help you achieve your goals with confidence.
                  </Typography>
                  <Typography
                    variant="caption"
                    paragraph
                    sx={{
                      fontWeight: '500',
                      color: '#fff',
                      textAlign: 'start',
                    }}
                  >
                    <Phone sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
                    <a
                      href="tel:+91 98854 20885"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      +91 98854 20885
                    </a>
                  </Typography>
                  <Typography
                    variant="caption"
                    paragraph
                    sx={{
                      fontWeight: '500',
                      color: '#fff',
                      textAlign: 'start',
                    }}
                  >
                    <Email sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
                    <a
                      href="mailto:connect@rajivwilliams.com"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      connect@rajivwilliams.com
                    </a>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: '700',
                      color: 'white',
                      marginTop: 2,
                      textAlign: 'start',
                    }}
                    mt={3}
                  >
                    Follow us on social media
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1,
                      marginTop: 1,
                      textAlign: 'center',
                    }}
                  >
                    <SocialIcon onClick={() => window.open('', '_blank')} aria-label="Facebook">
                      <FaFacebookF />
                    </SocialIcon>
                    <SocialIcon onClick={() => window.open('', '_blank')} aria-label="Twitter">
                      <IoLogoTwitter />
                    </SocialIcon>
                    <SocialIcon onClick={() => window.open('', '_blank')} aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </SocialIcon>
                    <SocialIcon onClick={() => window.open('', '_blank')} aria-label="Instagram">
                      <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon onClick={() => window.open('', '_blank')} aria-label="YouTube">
                      <FaYoutube />
                    </SocialIcon>
                  </Box>
                </FooterSection>
              </Grid>

              {/* Quick Links Section */}
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <FooterSection>
                  <FooterTitle sx={{ mb: 3 }}>Quick Links</FooterTitle>
                  <Box>
                    <FooterItem onClick={() => handleNavigation('/')}>
                      <IoIosFlower />
                      Privacy Policy
                    </FooterItem>
                    <FooterItem onClick={() => handleNavigation('/')}>
                      <IoIosFlower />
                      Terms Of Use
                    </FooterItem>
                    <FooterItem>
                      <IoIosFlower />
                      Login / Register
                    </FooterItem>
                    <FooterItem onClick={() => handleNavigation('/')}>
                      <IoIosFlower />
                      Contact
                    </FooterItem>
                  </Box>
                </FooterSection>
              </Grid>

              {/* Customer Services Section */}
              <Grid item xs={12} sm={6} md={3}>
                <FooterSection>
                  <FooterTitle>Customer Services</FooterTitle>
                  <FooterItem onClick={() => handleNavigation('/service')}>
                    <IoIosFlower />
                    Collections & Delivery
                  </FooterItem>
                  <FooterItem>
                    <IoIosFlower />
                    Returns & Refunds
                  </FooterItem>
                  <FooterItem>
                    <IoIosFlower />
                    Terms & Conditions
                  </FooterItem>
                  <FooterItem>
                    <IoIosFlower />
                    FAQs
                  </FooterItem>
                </FooterSection>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </Container>
    </Box>
  );
};

export default Footer;
