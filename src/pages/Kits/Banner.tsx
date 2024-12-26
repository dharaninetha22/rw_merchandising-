import React, { useEffect, useRef } from "react";
import { Box, Button, Typography, Grid, Container } from "@mui/material";
import { styled } from "@mui/system";
import gsap from "gsap";
import TopHeader from "../../components/Top/TopHeader";
import { productbanner, starss } from "../../assets";

// Styled components for the banner
const StyledBanner = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(90deg, rgba(15, 25, 38, 1) 0%, rgba(15, 99, 165, 1) 100%)',
  color: "#fff",
  position: "relative",
  overflow: "hidden",
  height: "400px", // Set height for the banner
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffd700",
  color: "#000",
  padding: theme.spacing(1.5, 4),
  fontWeight: "bold",
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: "#ffc107",
  },
}));

// Banner component with GSAP animation for EMI Pulse
const Banner: React.FC = () => {
  const starRef = useRef(null); // Reference for the star image

  useEffect(() => {
    // GSAP animation for sparkle effect on the star
    const sparkleAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    
    sparkleAnimation.to(starRef.current, {
      duration: 1.5,
      opacity: 0.5,
      scale: 1.2,
      ease: "power1.inOut",
    })
    .to(starRef.current, {
      duration: 1.5,
      opacity: 1,
      scale: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <StyledBanner mt={7}>
      <Container maxWidth="lg">
        <Grid container>
          {/* Product Details Section */}
          <Grid item xs={12} md={6} alignItems="center" justifyContent="flex-start" display='flex'>
            <TopHeader value="Kits" />
          </Grid>

          {/* Product Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={productbanner}
              alt="Product"
              sx={{
                width: "100%",
              }}
            />
            <Box
              component="img"
              src={starss}  // Ensure you have the star image in the assets
              alt="Star"
              ref={starRef}
              sx={{
                position: "absolute",
                top: 40, // Adjust the top margin as needed
                right: "18%", // Adjust the right margin as needed
                pointerEvents: "none", // Prevent interaction with the image
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledBanner>
  );
};

export default Banner;
