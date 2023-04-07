import { Stack, TextField } from '@mui/material'
import React from 'react'

const CardApi = () => {
  return (
    <Stack>
      <TextField
      sx={{ width:'100%'}}
      id="api"
      multiline
      rows={8}
      placeholder='API del clima' 
      />
    </Stack>
  )
}

export default CardApi