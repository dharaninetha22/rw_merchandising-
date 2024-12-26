// SearchBar.tsx
import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <TextField
      value={searchText}
      onChange={handleSearchChange}
      label="Search"
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleSearch}>
            <Search />
          </IconButton>
        ),
      }}
    />
  );
};

export default SearchBar;
