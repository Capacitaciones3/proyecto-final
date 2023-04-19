import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Busqueda = ({ handleData }) => {
  return (
    <TextField
      id='outlined-search'
      label='Busqueda'
      type='search'
      handleData={handleData}
      sx={{ backgroundColor: "white", width: "100%" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='end'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Busqueda;
