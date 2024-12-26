import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { heroone, shape, lineshape, product1,banner1,banner2,banner3 } from '../../assets'; // Ensure the correct import path for heroone and shape images
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const SliderContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '88vh',
  backgroundColor: '#f9f9f9', // Light background color
});

const SliderItem = styled(Box)(({ theme }) => ({
  display: 'flex', // Flex layout for content and image
  flexDirection: 'row', // Row layout for content and image
  alignItems: 'center',
  justifyContent: 'space-between', // Space between text and image
  padding: theme.spacing(5),
  height: '100vh',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack vertically on smaller screens
    textAlign: 'center',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1, // Text takes up half the width
  padding: theme.spacing(3),
}));

const HeroImageWrapper = styled(Box)({
  flex: 1,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ShapeBackground = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '40%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1, // Behind the hero image
  img: {
    width: '106%',
  },
});

const HeroImage = styled(Box)({
  zIndex: 2, // On top of the shape background
  img: {
    width: '80%',
    borderRadius: '20px',
  },
});

const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#0F63A5',
  color: '#fff',
  padding: '10px 30px',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#0F63A5',
  },
}));

const AnimatedText = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#ff4081',
  animation: 'fadeIn 2s infinite alternate',
  '@keyframes fadeIn': {
    from: {
      opacity: 0.5,
    },
    to: {
      opacity: 1,
    },
  },
});

interface CustomArrowProps {
  direction: 'left' | 'right';
  onClick?: () => void;
}

const CustomArrow = styled(Box)<CustomArrowProps>(({ direction }) => ({
  position: 'absolute',
  top: '40%',
  [direction]: '10px',
  zIndex: 3,
  backgroundColor: '#95b0c4',
  color: '#fff',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  transform: 'translateY(-50%)',
}));

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <CustomArrow direction="right" onClick={onClick}>
      {'>'}
    </CustomArrow>
  );
};

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <CustomArrow direction="left" onClick={onClick}>
      {'<'}
    </CustomArrow>
  );
};

const HeroSlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    nextArrow: <NextArrow direction={'right'} />,
    prevArrow: <PrevArrow direction={'left'} />,
  };

  // Array of slides data
  const slides = [
    {
      title: 'Best for your categories',
      heading: 'Level up your realestate game',
      description: 'Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won\'t find anywhere else.',
      price: '140.00',
      image: banner1,
    },
    {
      title: 'Best for your categories',
      heading: 'Custom merchandising with your name',
      description: 'Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won\'t find anywhere else.',
      price: '140.00',
      image: banner2,
    },
    {
      title: 'Best for your categories',
      heading: "If you're a professional realtor, we've got you covered",
      description: 'Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won\'t find anywhere else.',
      price: '140.00',
      image: banner3,
    },
  ];

  return (
    <Box sx={{ pt: 10 }}>
      <SliderContainer>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <SliderItem key={index}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', textAlign: 'start', gap: 2 }}>
                <ContentBox>
                  <Typography variant="h6" gutterBottom color="#0F63A5" sx={{ fontWeight: 600 }}>
                    {slide.title}
                  </Typography>
                  <Typography variant="h3" paragraph sx={{ fontWeight: 600 }}>
                    {slide.heading}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {slide.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mt: 2, justifyContent: 'start', textAlign: 'start' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                      <Box>
                        <CurrencyRupeeIcon sx={{ fontSize: '40px' }} />
                      </Box>
                      <Box>
                        <AnimatedText>Discount Price</AnimatedText>
                        <Typography variant="h5">{slide.price}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <img src={lineshape} alt="Line Shape" style={{ height: 'auto' }} />
                    </Box>
                    <HeroButton variant="contained" size="large">
                      Shop Now
                    </HeroButton>
                  </Box>
                </ContentBox>
                <HeroImageWrapper>
                  <ShapeBackground>
                    <img src={shape} alt="Shape Background"
                    style={{
                      filter: 'opacity(0.9) drop-shadow(0 0 0 rgb(4, 36, 61))'
                    }} 
                     />
                  </ShapeBackground>
                  <HeroImage>
                    <img src={slide.image} alt="Fashion Trends" />
                  </HeroImage>
                </HeroImageWrapper>
              </Box>
            </SliderItem>
          ))}
        </Slider>
      </SliderContainer>
    </Box>
  );
};

export default HeroSlider;
