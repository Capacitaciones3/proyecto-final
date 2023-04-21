import { MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react'

const TipodeLicencia = ({ handleData }) => {

  const [value, setValue] = useState('defecto')

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <Typography variant="subtitle1">TIPO DE LICENCIA</Typography>
      <Select
        labelId="tipodeLicencia"
        id="tipodeLicencia"
        value={value}
        name='tipo'
        onChange={(e) => { handleData(e); handleValue(e) }}
      >
        <MenuItem value={'defecto'} disabled>Tipo de licencia</MenuItem>
        <MenuItem value={'vacaciones'}>Vacaciones</MenuItem>
        <MenuItem value={'enfermedad'}>Licencia médica</MenuItem>
        <MenuItem value={'examen'}>Exámen</MenuItem>
        <MenuItem value={'examen'}>Día de estudio</MenuItem>
        <MenuItem value={'tramites'}>Trámites</MenuItem>
      </Select>
    </>
  );
}

export default TipodeLicencia