import { Box, Typography, Avatar, Select, MenuItem } from '@mui/material'
import React, {useState} from 'react'

  // prop que diferencia/ filtrar si es usuario (false) o es usuario admin (true) (rol)

const Usuario = ({handleData, rol}) => {

  const [value, setValue] = useState('jennifer')

  const handleValue = (e) =>{
    setValue(e.target.value)
  }

  return (
    <Select
    sx={{display:'flex', flexDirection:'row', p:0}}
    id="usuario"
    value={value}
    name='usuario'
    onChange={(e)=>{handleData(e); handleValue(e)}} 
  >
    <MenuItem value={'jennifer'} sx={{display:'flex', flexDirection:'row'}}>
      <Box sx={{display:'flex', flexDirection:'row'}}>
      <Avatar alt="User"  sx={{ width: 56, height: 56}} src="/static/images/avatar/1.jpg" />
      <Typography sx={{m:2}} component="span">{rol ? 'JenniferAdmin': 'JenniferUsser'}</Typography>
      </Box>
    </MenuItem>
    <MenuItem value={'jennifer1'} sx={{display:'flex'}}>
      <Box sx={{display:'flex', flexDirection:'row'}}>
      <Avatar alt="User"  sx={{ width: 56, height: 56}} src="/static/images/avatar/1.jpg" />
      <Typography sx={{m:2}} component="span">{rol ? 'JenniferAdmin': 'JenniferUsser'}</Typography>
      </Box>
    </MenuItem>
    <MenuItem value={'jennifer2'} sx={{display:'flex'}}>
      <Box sx={{display:'flex', flexDirection:'row'}}>
      <Avatar alt="User"  sx={{ width: 56, height: 56}} src="/static/images/avatar/1.jpg" />
      <Typography sx={{m:2}} component="span">{rol ? 'JenniferAdmin': 'JenniferUsser'}</Typography>
      </Box>
    </MenuItem>
  </Select>
  )
}

export default Usuario
