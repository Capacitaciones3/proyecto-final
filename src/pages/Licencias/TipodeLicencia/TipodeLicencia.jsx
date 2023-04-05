import { Autocomplete, TextField } from '@mui/material';
import React, { useState }  from 'react'

const TipodeLicencia =() => {

  const [select, setSelect] = useState();
  const [selectDisabled, setSelectDisabled] = useState(false);

  const elselect = (e) => {
    setSelect(e.target.value);
    setSelectDisabled(true);
  };

  const enableSelect = () => {
    setSelectDisabled(false);
  };

  const options = ['Vacaciones', 'Enfermedad', 'Examen'];

  return (
    <div>
      <Autocomplete
        controlled
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tipo de licencia" />}
        onChange={elselect} disabled={selectDisabled}
      />
    </div>
  );
}

export default TipodeLicencia