import { Edit, LocationOn } from '@mui/icons-material'
import { Avatar, Box, Card, Chip, Divider, IconButton, Stack, Switch, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

const CardPrincipal = () => {
  return (
    <Card>
  <Box sx={{ p: 2, display: 'flex' }}>
    <Avatar variant="rounded" src="avatar1.jpg" />
    <Stack spacing={0.5}>
      <Typography fontWeight={700} paddingLeft={'15px'}>Jennifer</Typography>
      <Typography variant="body2" color="text.secondary" paddingLeft={'10px'} >
      <LocationOn sx={{color: grey[500], paddingLeft:'5px'}} /> Scranton, PA
      </Typography>
    </Stack>
    <IconButton>
      <Edit sx={{ fontSize: 14 }}/>
    </IconButton>
  </Box>
  <Divider light />
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
  >
    <Chip>Active account</Chip>
    <Switch/>
  </Stack>
</Card>
  )
}

export default CardPrincipal










