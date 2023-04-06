import { Box, Typography, Avatar } from '@mui/material'
import React from 'react'

const Usuario = ({user}) => {
  return (
    <Box sx={{display:"flex", m:3}}>
    <Avatar alt="User"  sx={{ width: 56, height: 56}} src="/static/images/avatar/1.jpg" />
    <Typography sx={{m:2}} component="span">{user}</Typography>
    </Box>
  )
}

export default Usuario
