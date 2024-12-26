import React, { useState } from "react";
import { Button, Box, Typography, Input, Container } from "@mui/material";

interface CustomizationProductProps {
  customImage: string; // Base image
  logoPosition: { top: string; left: string; width: string }; // Logo position
}

const CustomizationProduct: React.FC<CustomizationProductProps> = ({ customImage, logoPosition }) => {
  const [logo, setLogo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 10 * 1024) { // Check if file is larger than 10KB
        setError("The file size exceeds 10KB. Please upload a smaller file.");
        setLogo(null);
      } else {
        setError(null);
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogo(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", padding: 2 }}>
        <Typography variant="h4" color="primary.main" fontWeight={600}>
          Customize Your Product
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 2 }}>
          <Box sx={{ position: "relative" }}>
            {/* Base Product Image */}
            <img
              src={customImage}
              alt="Customizable Product"
              style={{
                width: "300px",
                objectFit: "contain",
              }}
            />
            {/* Logo Overlay */}
            {logo && (
              <img
                src={logo}
                alt="Logo"
                style={{
                  position: "absolute",
                  top: logoPosition.top,
                  left: logoPosition.left,
                  transform: "translate(-50%, -50%)",
                  width: logoPosition.width,
                  objectFit: "contain",
                }}
              />
            )}
          </Box>
        </Box>

        {/* Upload Logo Section */}
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" color="primary.main" fontWeight={600}>
            Upload Your Logo
          </Typography>

          {/* Note Before File Upload */}
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              marginTop: 1,
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Note: Please upload a logo image. The file size should not exceed 10KB.
          </Typography>

          <Input
            type="file"
            inputProps={{
              accept: "image/*",
            }}
            onChange={handleImageChange}
            sx={{
              marginTop: 1,
              width: "300px",
              display: "block",
              margin: "0 auto",
              padding: 1,
              border: "1px solid #ddd",
              borderRadius: 1,
            }}
          />

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                marginTop: 1,
                textAlign: "center",
                fontWeight: 600,
                color: "#d32f2f",
              }}
            >
              {error}
            </Typography>
          )}
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: 1,
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CustomizationProduct;
