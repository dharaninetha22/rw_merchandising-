import React, { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, Slider, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface FiltersProps {
  onFilterChange: (filters: { category?: string; priceRange?: [number, number] }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    onFilterChange({ category: event.target.value, priceRange });
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
    onFilterChange({ category, priceRange: newValue as [number, number] });
  };

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleCategoryChange} label="Category">
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Caps">Caps</MenuItem>
          <MenuItem value="4 in 1 kits">4 in 1 kits</MenuItem>
          <MenuItem value="2 in 1 kits">2 in 1 kits</MenuItem>
          <MenuItem value="bags">Bags</MenuItem>
          <MenuItem value="Jute Bags">Jute Bags</MenuItem>
          <MenuItem value="Safety Helmet">Safety Helmet</MenuItem>
          <MenuItem value="Tape">Tape</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ width: "250px" }}>
        <Typography>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `₹${value}`}
          min={0}
          max={200}
        />
      </Box>
    </Box>
  );
};

export default Filters;
