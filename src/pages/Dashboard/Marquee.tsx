import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import StarIcon from '@mui/icons-material/Star'; // Example star icon

// Styled Components
const MarqueeContainer = styled(Box)({
  width: '100%',
  backgroundColor: '#0F63A5', // Blue background
  padding: '20px 0',
  color: '#fff',
});

const MarqueeContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '50px', // Gap between items
});

// Animation Keyframes
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

// Animated Text Style
const AnimatedText = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  display: 'inline-block',
  animation: `${bounceAnimation} 2s infinite`,
});

// Styled Item Box
const ItemBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px', // Gap between icon and text
});

const IconWrapper = styled(Box)({
  fontSize: '24px',
  color: '#FFD700', // Gold color for the star icon
});

const HeroMarquee = () => {
  const items = ['Jute Bag ', 'Caps', 'Safety Helmet', '2 in 1 Combo kit', 'Bags', 'ID Cards','kits', 'Shirts', 'tape'];

  return (
    <MarqueeContainer>
      <Marquee speed={50} gradient={false}>
        <MarqueeContent>
          {items.map((item, index) => (
            <ItemBox key={index}>
              <IconWrapper>
                <StarIcon /> {/* Replace with a flower icon if needed */}
              </IconWrapper>
              <AnimatedText sx={{color:'white'}}>{item}</AnimatedText>
            </ItemBox>
          ))}
        </MarqueeContent>
      </Marquee>
    </MarqueeContainer>
  );
};

export default HeroMarquee;
