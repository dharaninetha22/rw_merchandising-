import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Button, Container, Grid, Typography, Modal, IconButton } from "@mui/material";
import { LocalOffer as LocalOfferIcon, Close as CloseIcon } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import CustomizationProduct from "./Popup"; // Import the CustomizationProduct component

// Replace these with actual image imports or URLs
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
} from "../../assets";

const productData = {
  id: 1,
  name: "Caps with Logo Print",
  images: [product1, product2, product3, product4, product5, product6, product7],
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData;

  const [selectedSize, setSelectedSize] = useState<string>(""); // Track selected size
  const [addedToCart, setAddedToCart] = useState<boolean>(false); // Track if item is added to cart
  const [activeTab, setActiveTab] = useState<number>(0); // Track active tab (0 for Description, 1 for Reviews)
  const [openModal, setOpenModal] = useState<boolean>(false); // Track modal open state

  const handleSizeClick = (size: string) => setSelectedSize(size);
  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => setActiveTab(newValue);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  const thumbnailSettings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // Handle modal open/close
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Container>
      <Box sx={{ mt: 15 }}>
        <Grid container spacing={4}>
          {/* Left Section: Slider */}
          <Grid item lg={6} md={12} sm={12}>
            <Box className="product-gallery-area">
              <Box
                className="product-big-slider mb-30"
                style={{
                  marginBottom: "20px",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                <Slider {...sliderSettings}>
                  {product.images.map((img, index) => (
                    <Box
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "transform 0.5s ease",
                      }}
                    >
                      <img
                        src={img}
                        alt={`Product ${index}`}
                        style={{
                          width: "100%",
                          height: "450px",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                      />
                    </Box>
                  ))}
                </Slider>
              </Box>

              <Box className="product-thumb-slider">
                <Slider {...thumbnailSettings}>
                  {product.images.map((img, index) => (
                    <Box
                      key={index}
                      style={{
                        padding: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index}`}
                        style={{
                          width: "130px",
                          height: "140px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          cursor: "pointer",
                        }}
                      />
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Box>
          </Grid>

          {/* Right Section: Product Info */}
          <Grid item lg={6}>
            <Box className="product-info mb-50" sx={{ textAlign: "justify" }}>
              {[{ type: "sale", content: (<Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, display: "flex", alignItems: "center", marginBottom: "10px", color: "#cc0d39" }}><LocalOfferIcon sx={{ marginRight: "10px", color: "#cc0d39" }} />SALE 10% OFF</Typography>) }, { type: "title", content: (<Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>{product.name}</Typography>) }].map((item, index) => <Box key={index}>{item.content}</Box>)}
            </Box>

            {/* Customize Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
              sx={{
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: 1,
                boxShadow: 2,
                "&:hover": {
                  backgroundColor: "#3b8e4a",
                },
              }}
            >
              Customize Product
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Modal for Customization */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ 
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", 
          width: 600, backgroundColor: "white", padding: 4, borderRadius: 2, 
          display: "flex", flexDirection: "column", alignItems: "center" 
        }}>
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "#000",
            }}
          >
            <CloseIcon />
          </IconButton>
          {/* <CustomizationProduct /> */}
        </Box>
      </Modal>
    </Container>
  );
};

export default ProductDetails;
