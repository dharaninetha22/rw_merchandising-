import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Box, Button, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, Tab, Tabs, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import { LocalOffer as LocalOfferIcon ,Close as CloseIcon} from "@mui/icons-material";
import Person3Icon from "@mui/icons-material/Person3";
import CustomizationProduct from "./Popup"; // Import the CustomizationProduct component
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";

import { useNavigate, useParams } from "react-router-dom";
import Banner from "../Products/Banner";
import { products } from "./productsData"; 
import { useCart } from "../Addcart/CartContext";

// Define the type for the product structure
interface Product {
  id: string; // Ensure `id` is a string to match `useParams()`
  name: string;
  description: string;
  price: { original: number; discounted: number };
  sizes: string[];
  images: string[];
  additionalInfo: { label: string; value: string }[];
  reviews: { name: string; date: string; rating: number; message: string }[];
  customImage: string;
  logoPosition: { top: string; left: string, width: string  }; // Dynamic logo positioning
  
}

const StyledFeatureIcon = styled(CheckCircleIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  transform: "scale(1)",
  transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
    color: theme.palette.secondary.main,
  },
}));

const ProductDetails: React.FC = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbnailSliderRef = useRef<Slider | null>(null);
   const { addToCart } = useCart(); 
   const navigate = useNavigate(); // Add the navigate hook

  
  const product = products.find((product) => product.id === id);

  // State for selected size
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [addedToCart, setAddedToCart] = useState<boolean>(false); // Track if item is added to cart
  const [activeTab, setActiveTab] = useState<number>(0); // Track active tab (0 for Description, 1 for Reviews)
  const [openModal, setOpenModal] = useState<boolean>(false); // Track modal open state
  
  const handleSizeClick = (size: string) => setSelectedSize(size);


 // Handle Add to Cart action
 const handleAddToCart = () => {
  if (product ) {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price.discounted,
      quantity: 1,
      image: product.images[0],
    });
    setAddedToCart(true); // Set added to cart to true
  } 
};
    // Scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0); // This will scroll to the top of the page
    }, [id]); // The effect runs whenever the `id` changes

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => setActiveTab(newValue);
  
  // Slider settings
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


  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Handle size click
  // const handleSizeClick = (size: string) => {
  //   setSelectedSize(size);
  // };

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index, true);
    }
  };

  // If product not found, return an error message
  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <Box sx={{ mt: 15 }}>
      
    <Container>

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
            {[
              {
                type: "sale",
                content: (
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      color: "#cc0d39",
                    }}
                  >
                    <LocalOfferIcon sx={{ marginRight: "10px", color: "#cc0d39" }} />
                    SALE 10% OFF
                  </Typography>
                ),
              },
              {
                type: "title",
                content: (
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                    {product.name}
                  </Typography>
                ),
              },
              {
                type: "ratings",
                content: (
                  <Box sx={{ display: "flex", marginBottom: "10px" }}>
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} sx={{ color: "#ffc107" }} />
                    ))}
                    <Typography variant="body2">(45 Reviews)</Typography>
                  </Box>
                ),
              },
              {
                type: "description",
                content: (
                  <Typography variant="body2" paragraph>
                    {product.description}
                  </Typography>
                ),
              },
              {
                type: "price",
                content: (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: "line-through", fontSize: "16px" }}
                    >
                      ₹{product.price.original.toFixed(2)}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontSize: "30px", fontWeight: 600, marginLeft: "10px" }}
                    >
                      ₹{product.price.discounted.toFixed(2)}
                    </Typography>
                  </Box>
                ),
              },
            ].map((item, index) => (
              <Box key={index}>{item.content}</Box>
            ))}

            {/* Size Selection */}
            {/* <Box sx={{ marginTop: "20px" }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                Select Size
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                {product.sizes.map((size, index) => (
                  <Button
                    key={index}
                    variant={selectedSize === size ? "contained" : "outlined"}
                    onClick={() => handleSizeClick(size)}
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      borderRadius: "4px",
                      "&:hover": { backgroundColor: "#30779d", color: "white" },
                    }}
                  >
                    {size}
                  </Button>
                ))}
              </Box>
            </Box> */}

            {/* Add to Cart Button */}
            <Box sx={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                onClick={handleAddToCart}
                sx={{
                  textTransform: "capitalize",
                  padding: "10px 20px",
                  "&:hover": { backgroundColor: "#30779d" },
                }}
              >
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </Button>
            </Box>



            
            <Box mt={3}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
      <Box sx={{ padding: 1, background: "#f7f7f7", borderRadius: 2, boxShadow: 3,  }}>
        <Typography
          variant="h6"
          color="primary.main"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}
        >
          Product Features
        </Typography>
        <Box sx={{  display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
             }}>
          {product.features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 1,

              }}
            >
              <StyledFeatureIcon sx={{ mr: 2 }} />
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>

             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Box sx={{ 
      //  background: "rgba(102, 136, 178, 0.1)", 
      // backdropFilter: "blur(1px)",
      mt:15,
      mb:5
      }}>
      <Container>

        {/* Additional Info and Reviews */}
        <Grid container spacing={6} pb={5}
          sx={{ background: "rgba(102, 136, 178, 0.1)", // rgba equivalent of rgb with transparency
            backdropFilter: "blur(1px)",
            paddingRight:5,
            borderRadius: 2, boxShadow: 3,
          }}
        >
          {/* Additional Information */}
          <Grid item lg={5}>
            <Box
              sx={{
                marginTop: "40px",
                padding: "20px",
                border: "2px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                "&:hover": { borderColor: "#007bff", boxShadow: "0 6px 15px rgba(0, 123, 255, 0.2)" },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px", marginBottom: "15px",color:"#30779d" }}>
                Additional Information
              </Typography>
              {product.additionalInfo.map((info, index) => (
               <Grid
               container
               key={index}
               spacing={2}
               alignItems="start"
               sx={{
                 marginBottom: "12px",
                 borderBottom: "1px solid #ddd",
                 paddingBottom: "8px",
               }}
             >
               <Grid
                 item
                 lg={5}
                 md={4}
                 sm={12}
                 xs={12}
                 sx={{
                   display: "flex",
                   justifyContent: "flex-start",
                   alignItems: "start",
                    textAlign:'justify'
                 }}
               >
                 <Typography
                   variant="body1"
                   sx={{
                     fontWeight: 600,
                     color: "#333",
                     whiteSpace: "nowrap",
                     width: "150px",
                   }}
                 >
                   {info.label}:
                 </Typography>
               </Grid>
               <Grid
                 item 
                 lg={7}
                 md={8}
                 sm={12}
                 xs={12}
                 sx={{
                   display: "flex",
                   justifyContent: "flex-start",
                   alignItems: "start",
                   textAlign:'justify'
                 }}
               >
                 <Typography
                   variant="body2"
                   sx={{ fontWeight: 400, color: "#555", lineHeight: "1.6" }}
                 >
                   {info.value}
                 </Typography>
               </Grid>
             </Grid>
              ))}
            </Box>
          </Grid>

          {/* Tabs for Description and Reviews */}
          <Grid item lg={7}>
            <Box sx={{ marginTop: "30px" }}>
              <Tabs value={activeTab} onChange={handleTabChange} centered sx={{ borderBottom: 1, borderColor: "divider" ,}}>
                <Tab label="Description" sx={{fontSize:'16px',fontWeight:600}} />
                <Tab label="Reviews" sx={{fontSize:'16px',fontWeight:600}}/>
              </Tabs>
              {activeTab === 0 && (
                <Box sx={{ paddingTop: "20px",textAlign:'justify' }}>
                  <Typography variant="body2">{product.descriptiontwo}</Typography>
                </Box>
              )}
              {activeTab === 1 && (
                <Box sx={{ paddingTop: "20px" ,}}>
                  {product.reviews.map((review, index) => (
                    <Box
                      key={index}
                      sx={{
                        marginTop: "20px",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "16px",
                        backgroundColor: "#fafafa",
                       
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center",textAlign:'start' , paddingRight:10}}>
                        <Person3Icon sx={{ fontSize: "28px", backgroundColor: "#1976d2", borderRadius: "50%", color: "white", padding: "5px", marginRight: "10px" }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {review.name}
                          </Typography>
                          <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                            {[...Array(review.rating)].map((_, idx) => (
                              <Star key={idx} sx={{ color: "#ffc107", fontSize: "14px" }} />
                            ))}
                            <Typography variant="caption" sx={{ marginLeft: "10px", color: "gray" }}>
                              {review.date}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Typography variant="body2" sx={{ marginTop: "10px" }}>
                        {review.message}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
     {/* Customize Button - Positioned Top Right */}
     <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
              sx={{
                position: "absolute", // Position it at the top right
                top: "16%", 
                right: "5%", 
                padding: "10px 20px", 
                fontSize: "16px", 
                borderRadius: 1, 
                boxShadow: 2, 
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
             Click To Customize 
            </Button>

      {/* Modal for Customization */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ 
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", 
          width: 600, backgroundColor: "white",  borderRadius: 2, 
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
          <CustomizationProduct   
          customImage={product.customImage} 
          logoPosition={product.logoPosition}/>
        </Box>
      </Modal>
  </Box>
  );
};

export default ProductDetails;
