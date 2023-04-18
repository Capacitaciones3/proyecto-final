import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Busqueda = ({ handleData }) => {
  return (
    <TextField
    InputProps={{
      startAdornment: (
        <InputAdornment position="end">
          <SearchIcon/>
        </InputAdornment>)}}
      id='outlined-search'
      label='Busqueda'
      type='search'
      handleData={handleData}
      fullWidth
    />
  );
};

export default Busqueda;
