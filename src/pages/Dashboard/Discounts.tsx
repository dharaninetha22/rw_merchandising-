import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { discountbanner, discount, curve } from "../../assets";
import zIndex from "@mui/material/styles/zIndex";

interface BannerContent {
  discount: string;
  title: string;
  buttonText: string;
  link: string;
}

interface BannerItemProps {
  content: BannerContent;
}

const BannerItem: React.FC<BannerItemProps> = ({ content }) => {
  const styles = {
    bannerItem: {
      padding: "48px 8px 50px",
      position: "relative",
      border: "2px solid #123456",
      borderRadius: "20px",
      overflow: "hidden",
      zIndex: 1,
      backgroundColor: "#f8f9fa",
    },
    shapeOne: {
      position: "absolute",
      top: "45px",
      left: "45%",
      zIndex: -1,
    },
    shapeTwo: {
      position: "absolute",
      top: 0,
      right: -85,
      zIndex: -1,
    },
    bannerImage: {
      position: "absolute",
      bottom: 0,
      right: "35px",
      zIndex:-2
    },
    bannerContent: {
      maxWidth: "270px",
      textAlign:'start'
    },
    offText: {
      color: "#ff0000",
      fontWeight: "bold",
    },
    button: {
      marginTop: "16px",
      textTransform: "none",
    },
  };

  return (
    <Box sx={styles.bannerItem} data-aos="fade-up" data-aos-delay="10" data-aos-duration="900">
      {/* Shape One */}
     
      <Box sx={styles.shapeOne}>
        <img src={discount} alt="shape one" />
      </Box>

      {/* Shape Two */}
      <Box sx={styles.shapeTwo}>
        <img src={discountbanner} alt="shape two" />
      </Box>

      {/* Banner Image */}
      <Box sx={styles.bannerImage}>
        <img src={curve} alt="banner" />
      </Box>

      {/* Banner Content */}
      <Box sx={styles.bannerContent}>
        <Typography variant="body1">
          UP TO <span style={styles.offText}>{content.discount}</span>
        </Typography>
        <Typography variant="h4" gutterBottom>
          {content.title}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={content.link}
          sx={styles.button}
        >
          {content.buttonText}
        </Button>
      </Box>
    </Box>
  );
};

const Discounts: React.FC = () => {
  const banners: BannerContent[] = [
    {
      discount: "50%",
      title: "Exclusive Kids & Adults Summer Outfits",
      buttonText: "Shop Now",
      link: "shops.html",
    },
    {
      discount: "40%",
      title: "Trending Accessories & Footwear",
      buttonText: "Discover More",
      link: "accessories.html",
    },
  ];

  return (
    <Container  sx={{mt:10,mb:10}}>
      <Grid container spacing={4} justifyContent="center">
        {banners.map((content, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <BannerItem content={content} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Discounts;
