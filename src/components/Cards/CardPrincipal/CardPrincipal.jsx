import { Edit, LocationOn } from '@mui/icons-material'
import { Avatar, Box, Card, Chip, Divider, IconButton, Stack, Switch, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

const CardPrincipal = () => {
  return (
<Card sx={{borderRadius: 0}}>
  <Box sx={{ p: 2, display: 'flex'}}>
    <Avatar variant="rounded" src="avatar1.jpg" />
    <Stack>
      <Typography fontWeight={700} paddingLeft={'20px'}>Jennifer</Typography>
      <div style={{display: 'flex', alignItems: 'center', paddingLeft: '15px'}}>
          <LocationOn sx={{color: grey[500]}}/>
          <Typography variant="body2" color="text.secondary" paddingLeft={'5px'}>
            Scranton, PA
          </Typography>
          <IconButton>
          <Edit sx={{ fontSize: 20}}/>
          </IconButton>
      </div>
    </Stack>
  </Box>
  <Divider light />
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}>
    <Chip label='Active account'></Chip>
    <Switch/>
  </Stack>
</Card>
  )
}

export default CardPrincipal










