import { TextField } from "@mui/material";
import React from "react";
// import SearchIcon from '@mui/icons-material/Search';

const Busqueda = ({ handleData }) => {
  return (
    <TextField
      id='outlined-search'
      label='Busqueda'
      type='search'
      handleData={handleData}
      fullWidth
    />
  );
};

export default Busqueda;
