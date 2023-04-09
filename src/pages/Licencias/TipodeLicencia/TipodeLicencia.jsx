import {MenuItem, Select, Typography} from '@mui/material';
import React, { useState } from 'react'

const TipodeLicencia =({handleData}) => {

  const [value, setValue] = useState('vacaciones')

  const handleValue = (e) =>{
    setValue(e.target.value)
  }

  return (
    <>
      <Typography variant="subtitle1">TIPO DE LICENCIA</Typography>
      <Select
        labelId="tipodeLicencia"
        id="tipodeLicencia"
        value={value}
        name='tipodeLicencia'
        onChange={(e)=>{handleData(e); handleValue(e)}} 
      >
        <MenuItem value={'vacaciones'}>Vacaciones</MenuItem>
        <MenuItem value={'enfermedad'}>Enfermedad</MenuItem>
        <MenuItem value={'examen'}>Examen</MenuItem>
      </Select>
      </>
  );
}

export default TipodeLicencia