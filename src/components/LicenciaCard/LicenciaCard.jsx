import { Avatar, Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Licencias from '../../pages/Licencias/Licencias';

const LicenciaCard = () => {

  const { idLicencia } = useParams();
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 40px' }}>
        <Avatar sx={{ backgroundColor: 'orange' }}>OP</Avatar>
        <Button variant='contained' onClick={() => navigate("/dashboard")} sx={{ 
          backgroundColor: '#FFA1A1', 
          minWidth: '50px', 
          width: '50px', 
          borderRadius: '15px', 
          fontWeight: 'bold', 
          fontSize: '20px',
          "&:hover": {
            backgroundColor: '#FF4545'
          }
          }}>X</Button>
      </Stack>
      <Licencias/>
    </Box>
  )
}

export default LicenciaCard