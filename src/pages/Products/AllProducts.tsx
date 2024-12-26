import React, { useEffect, useState } from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, IconButton, Container, TextField } from "@mui/material";
import { Favorite, Visibility, ShoppingCart, Star, Search } from "@mui/icons-material";
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15 } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Addcart/CartContext";
import Filters from "./Filters";  // Import Filters component

interface Product {
  id: number;
  image: string;
  hoverImage: string;
  title: string;
  prevPrice: number;
  newPrice: number;
  discount: string;
  rating: number;
  name: string;
  price: number;
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    image: product1,
    hoverImage: product2,
    title: "Jute Bag with Logo",
    prevPrice: 80,
    newPrice: 40,
    discount: "10% Off",
    rating: 5,
    name: "Product 1",
    price: 40,
    quantity: 100,
  },
  {
    id: 2,
    image: product3,
    hoverImage: product7,
    title: "Caps with Logo Print",
    prevPrice: 80,
    newPrice: 40,
    discount: "10% Off",
    rating: 5,
    name: "Product 2",
    price: 40,
    quantity: 100,
  },
  {
    id: 3,
    image: product10,
    hoverImage: product11,
    title: "Safety Helmet",
    prevPrice: 80,
    newPrice: 40,
    discount: "10% Off",
    rating: 5,
    name: "Product 4",
    price: 40,
    quantity: 100,
  },
  {
    id: 4,
    image: product4,
    hoverImage: product5,
    title: "ID Cards",
    prevPrice: 80,
    newPrice: 40,
    discount: "10% Off",
    rating: 5,
    name: "Product 9",
    price: 40,
    quantity: 100,
  },
  {
    id: 5,
    image: product11,
    hoverImage: product10,
    title: "Safety Helmet",
    prevPrice: 80,
    newPrice: 40,
    discount: "10% Off",
    rating: 5,
    name: "Product 10",
    price: 40,
    quantity: 100,
  },
  // Add more products as needed
];

const Collection = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [favorite, setFavorite] = useState<{ [productId: string]: boolean }>({});
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const toggleFavorite = (productId: string) => {
    setFavorite((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleMouseEnter = (id: string) => {
    setHoveredProductId(id);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleNavigate = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      id: product.id.toString(),
      image: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
    };

    addToCart(cartItem);
  };

  const handleFilterChange = (filters: { category?: string; priceRange?: [number, number] }) => {
    const filtered = products.filter((product) => {
      let isValid = true;
      if (filters.category && filters.category !== "" && product.name !== filters.category) {
        isValid = false;
      }
      if (filters.priceRange) {
        const [minPrice, maxPrice] = filters.priceRange;
        if (product.price < minPrice || product.price > maxPrice) {
          isValid = false;
        }
      }
      return isValid;
    });
    setFilteredProducts(filtered);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredBySearch = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filteredBySearch);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ padding: "40px 0" }}>
      <Container>
        <Box mb={4}>
          <Typography variant="body2" fontWeight="medium" sx={{ textAlign: "start", color: "#0F63A5" }}>
            Feature Products
          </Typography>
          <Typography variant="h5" fontWeight="700" sx={{ textAlign: "start", mt: 1, color: "#0F63A5" }}>
            Our Collection
          </Typography>
        </Box>

        {/* Filter and Search Section */}
        <Box mb={4} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Filters onFilterChange={handleFilterChange} />
          <TextField
            variant="outlined"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              width: "300px",
              transition: "all 0.3s ease",
              "& input": { padding: "10px" },
              "& .MuiOutlinedInput-root": { borderRadius: "30px" },
              "& .MuiOutlinedInput-input": { paddingLeft: "30px" },
            }}
            InputProps={{
              startAdornment: (
                <IconButton sx={{ position: "absolute", left: 10 }}>
                  <Search />
                </IconButton>
              ),
            }}
          />
        </Box>

        {/* Product List */}
        <Grid container spacing={4} justifyContent="flex-start">
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 10 },
                  "&:hover .hover-icons": { opacity: 1 },
                }}
              >
                <Box
                  sx={{ position: "relative" }}
                  onMouseEnter={() => handleMouseEnter(product.id.toString())}
                  onMouseLeave={handleMouseLeave}
                >
                  <CardMedia
                    component="img"
                    image={hoveredProductId === product.id.toString() ? product.hoverImage : product.image}
                    alt={product.title}
                    sx={{ objectFit: "full" }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      backgroundColor: "primary.main",
                      color: "white",
                      padding: "1px 5px",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  >
                    {product.discount}
                  </Typography>
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      backgroundColor: "primary.main",
                      color: "white",
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart />
                  </IconButton>
                  <Box
                    className="hover-icons"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: "10%",
                      transform: "translateY(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <IconButton sx={{ backgroundColor: "white" }} onClick={() => toggleFavorite(product.id.toString())}>
                      <Favorite color={favorite[product.id.toString()] ? "error" : "warning"} />
                    </IconButton>
                    <IconButton sx={{ backgroundColor: "white" }} onClick={() => handleNavigate(product)}>
                      <Visibility color="primary" />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "start" }}>
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        {Array(Math.floor(product.rating)).fill(null).map((_, index) => (
                          <Star key={index} color="warning" fontSize="small" />
                        ))}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: "bold",
                          mt: 1,
                          fontSize: "14px",
                          color: "text.primary",
                          cursor: "pointer",
                        }}
                        onClick={() => handleNavigate(product)}
                      >
                        {product.title}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="caption" sx={{ color: "text.secondary", textDecoration: "line-through", fontSize: "14px" }}>
                        ₹{product.prevPrice}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "14px" }}>
                        ₹{product.newPrice}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Collection;
