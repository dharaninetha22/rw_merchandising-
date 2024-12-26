import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Card,
  CardMedia,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { Close, Add, Remove, DeleteOutline } from "@mui/icons-material";
import { useCart } from "../../pages/Addcart/CartContext";
import { useNavigate } from "react-router-dom";

// Define CartItem interface with a title property
interface CartItem {
  id: string;
  title: string; // Ensure the item has a title property
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// CartDialogProps interface
interface CartDialogProps {
  open: boolean;
  onClose: () => void;
}

const DELIVERY_CHARGE = 79; // Define delivery charge as a constant

const CartDialog: React.FC<CartDialogProps> = ({ open, onClose }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  // Calculate the subtotal price of all items in the cart
  const subtotal = cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  // Calculate the total price including delivery charge
  const totalPrice = subtotal > 0 ? subtotal + DELIVERY_CHARGE : 0;

  // Function to navigate to the product details page and close the dialog
  const handleProductClick = (productId: string) => {
    onClose(); // Close the dialog
    navigate(`/product/${productId}`); // Navigate to the product details page
    window.scrollTo(0, 0);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          position: "fixed",
          top: "10%",
          right: "10px",
          margin: 0,
          width: "400px",
          height: "calc(100vh - 20%)",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          overflowY: "auto",
        },
      }}
    >
      <DialogTitle>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Your Cart
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {cartItems.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center", marginTop: "20px" }}>
            Your cart is empty.
          </Typography>
        ) : (
          <>
            {cartItems.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  cursor: "pointer", // Add cursor pointer to indicate it's clickable
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  onClick={() => handleProductClick(item.id)}
                />
                <Box sx={{ flex: 1, marginLeft: "15px" }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: <strong>₹{item.price && !isNaN(item.price) ? item.price.toFixed(2) : "0.00"}</strong>
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                    <IconButton
                      onClick={() => decrementQuantity(item.id)}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "50%",
                        padding: "5px",
                        color: "#555",
                      }}
                    >
                      <Remove />
                    </IconButton>
                    <Typography
                      variant="body2"
                      sx={{
                        margin: "0 10px",
                        fontWeight: 600,
                        fontSize: "16px",
                      }}
                    >
                      {item.quantity}
                    </Typography>
                    <IconButton
                      onClick={() => incrementQuantity(item.id)}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "50%",
                        padding: "5px",
                        color: "#555",
                      }}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ marginTop: "5px", fontWeight: 600, color: "#1976d2" }}
                  >
                    Total: ₹{(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => removeFromCart(item.id)}
                  sx={{
                    alignSelf: "center",
                    backgroundColor: "#f8d7da",
                    color: "#d32f2f",
                    borderRadius: "50%",
                    padding: "8px",
                    "&:hover": { backgroundColor: "#f5c6cb" },
                  }}
                >
                  <DeleteOutline />
                </IconButton>
              </Card>
            ))}
            <Box
              sx={{
                marginTop: "20px",
                padding: "10px",
                borderTop: "1px solid #ddd",
              }}
            >
              <Typography variant="body1" sx={{ display: "flex", justifyContent: "space-between" }}>
                Subtotal: <strong>₹{subtotal.toFixed(2)}</strong>
              </Typography>
              <Typography variant="body1" sx={{ display: "flex", justifyContent: "space-between" }}>
                Delivery Charge: <strong>₹{DELIVERY_CHARGE.toFixed(2)}</strong>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  fontWeight: 600,
                }}
              >
                Total: <strong>₹{totalPrice.toFixed(2)}</strong>
              </Typography>
            </Box>
            <Button
              color="primary"
              fullWidth
              sx={{
                marginTop: "20px",
                padding: "7px 6px",
                fontWeight: 600,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Proceed to Checkout
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;
