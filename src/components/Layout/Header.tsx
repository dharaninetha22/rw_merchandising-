import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  Container,
  Modal,
} from "@mui/material";
import { Search, ShoppingCart, Menu as MenuIcon, Person ,Close as CloseIcon} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { shirt, white ,  headercat1,headercat2,headercat3,headercat4,headercat5,headercat6,headercat7,} from "../../assets"; // Replace with your actual path to the logo
import { useCart } from "../../pages/Addcart/CartContext";
import CartDialog from "../../pages/Addcart/AddtoCart";
import Login from "../../pages/Login";
import SignUpForm from "../../pages/SignUpForm";

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const [dialogOpen, setDialogOpen] = useState(false); // Dialog state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false); // State for login modal
  const [openSignup, setOpenSignup] = useState(false);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [activeTab, setActiveTab] = useState<string>(""); // New state for active tab


  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const handleOpenLogin = () => setOpenLogin(true); // Open login modal
  const handleCloseLogin = () => setOpenLogin(false); // Close login modal

  const menuItems = [
    { label: "Caps", img: headercat1, path: "/man-shirts" },
    { label: "4 in 1 kits", img: headercat2, path: "/denim-jeans" },
    { label: "2 in 1 kits", img: headercat3, path: "/casual-suit" },
    { label: "Bags", img: headercat4, path: "/summer-dress" },
    { label: "Jute Bags", img: headercat5, path: "/sweaters" },
    { label: "Safety Helmet", img: headercat6, path: "/jackets" },
    { label: "Tape", img: headercat7, path: "/jackets" },
  ];
  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Set active tab on click
    if (tab === "products") navigate("/products");
    if (tab === "kits") navigate("/kits");
  };
  return (
    <Container>

      <AppBar position="fixed" sx={{ bgcolor: "#0F63A5" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          {/* Logo */}
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={white} alt="Logo" style={{ height: "70px" }} />
          </Link>

          {/* Categories Dropdown */}
          <Box
            sx={{ ml: 2 }}
            onMouseLeave={handleMenuClose} // Close the menu when leaving the Box
          >
            <Button
              color="inherit"
              onMouseEnter={handleMenuOpen} // Open the menu when hovering over the button
              startIcon={<MenuIcon />}
              sx={{
                fontWeight: "bold",
                color: "white",
                textTransform: "none",
              }}
            >
              Products Category
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose} // Close the menu when clicking outside
              MenuListProps={{
                onMouseEnter: () => setAnchorEl(anchorEl), // Keep menu open on hover
                onMouseLeave: handleMenuClose, // Close menu when leaving the menu area
              }}
              sx={{
                mt: 2,
                "& .MuiPaper-root": {
                  width: "200px",
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  px: 2,
                },
              }}
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    navigate(item.path); // Navigate to the corresponding page
                    handleMenuClose();
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    py: 1,
                    mb: 1,
                    borderRadius: "8px",
                    background: "#fff",
                    boxShadow:
                      "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
                      boxShadow:
                        "inset 0px 0px 0px 2px #0F63A5, 0px 5px 15px rgba(0, 0, 0, 0.2)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    style={{ width: "30px", marginRight: "10px" }}
                  />
                  <Typography variant="caption">{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Other Components */}
          {/* Search Bar */}
          <Box
            sx={{
              width: "350px",
              mx: 2,
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: 1,
              pl: 1,
              pr: 1,
            }}
          >
            <InputBase
              placeholder="Search for products..."
              sx={{
                flexGrow: 1,
                px: 1,
                fontSize: 14,
              }}
            />
            <IconButton type="submit" sx={{ p: 1, color: "#232f3e" }}>
              <Search />
            </IconButton>
          </Box>

          {/* Links */}
          <Typography
            variant="body2"
            sx={{
              mx: 1,
              textAlign: "center",
              color: activeTab === "products" ? "transparent" : "white", // Text transparent on active tab
              fontWeight: activeTab === "products" ? "bold" : 600,
              cursor: "pointer",
              background: activeTab === "products" ? "linear-gradient(90deg, rgb(255, 110, 196), rgb(120, 115, 245), rgb(110, 255, 214), rgb(255, 110, 196)) 0% 0% / 300% 300% text" : "none",
              WebkitTextFillColor: activeTab === "products" ? "transparent" : "inherit", // Set text color to transparent for gradient
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#f50057", // Hover color
                textDecoration: "underline", // Hover underline
              },
            }}
            onClick={() => handleTabClick("products")}
          >
          
            Products
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mx: 1,
              textAlign: "center",
              color: activeTab === "kits" ? "transparent" : "white", // Text transparent on active tab
              fontWeight: activeTab === "kits" ? "bold" : 600,
              cursor: "pointer",
              background: activeTab === "kits" ? "linear-gradient(90deg, rgb(255, 110, 196), rgb(120, 115, 245), rgb(110, 255, 214), rgb(255, 110, 196)) 0% 0% / 300% 300% text" : "none",
              WebkitTextFillColor: activeTab === "kits" ? "transparent" : "inherit", // Set text color to transparent for gradient
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#f50057", // Hover color
                textDecoration: "underline", // Hover underline
              },
            }}
            onClick={() => handleTabClick("kits")}
          >
            Kits
          </Typography>

          {/* Account Links */}
          <Box sx={{  }}>
           
           {/* Login / SignUp */}
           <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              onClick={handleOpenLogin} 
              sx={{
                bgcolor: "#FFFFFF",
                color: "#0F63A5",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#0F63A5",
                },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={handleOpenSignup}
              sx={{
                // borderColor: "#FFFFFF",
                bgcolor: "#FFFFFF",
                color: "#0F63A5",
                textTransform: "none",
                "&:hover": {
                  // borderColor: "#D9EFFF",
                  bgcolor: "#0F63A5",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
          </Box>

          {/* Cart */}
          <IconButton color="inherit" onClick={handleDialogOpen}>
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
        {/* Dialog */}
        <CartDialog open={dialogOpen} onClose={handleDialogClose} />
      </AppBar>


 {/* Login Modal */}
 <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the modal
            width: 400, // Modal size
            height: 400,
            backgroundColor: "#fff",
            borderRadius: 2,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3, 
          }}
        >
          <IconButton
           onClick={handleCloseLogin}
           sx={{
             position: "absolute",
             top: "10px",
             right: "10px",
             color: "#fff",
             backgroundColor: "#0F63A5", // Background color for the icon
             borderRadius: "50%",
             padding: "8px",
             transition: "background-color 0.3s ease, transform 0.2s ease",
             "&:hover": {
               backgroundColor: "#f50057", // Hover background color
               transform: "scale(1.1)", // Slightly increase size on hover
             },
             "&:active": {
               transform: "scale(0.95)", // Shrink when clicked
             },
           }}
          >
            <CloseIcon />
          </IconButton>
          <Login onClose={handleCloseLogin}/>
        </Box>
      </Modal>

      {/* Signup Modal */}
      <Modal open={openSignup} onClose={handleCloseSignup}>
        <Box
           sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the modal
            width: 400, // Modal size
            height: 500,
            backgroundColor: "#fff",
            borderRadius: 2,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3, 
          }}
        >
          <IconButton
            onClick={handleCloseSignup}
            sx={{
              position: "absolute",
              top: "2%",
              right: "5%",
              color: "#fff", // Icon color
              backgroundColor: "#0F63A5", // Background color for the icon
              borderRadius: "50%", // Rounded corners
              padding: "5px", // Padding inside the icon button
              transition: "background-color 0.3s ease, transform 0.2s ease", // Smooth transition for background color and scale
              "&:hover": {
                backgroundColor: "#f50057", // Change background color on hover
                transform: "scale(1.1)", // Slightly increase the size when hovered
              },
              "&:active": {
                transform: "scale(0.95)", // Shrink a little when clicked
              },
              
            }}
          >
            <CloseIcon />
          </IconButton>
          <SignUpForm  onClose={handleCloseSignup}/>
        </Box>
      </Modal>
    </Container>
  );
};

export default Header;
