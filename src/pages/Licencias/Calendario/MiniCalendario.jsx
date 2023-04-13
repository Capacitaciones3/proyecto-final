import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const MiniCalendario = () => {
  const [value, setValue] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDate = (newValue) => {
    console.log(newValue)
    const day = newValue.$d.split("")[0];
  }


  return (
    <div>
      <div className='imagenCalendario' onClick={handleClickOpen}>
      <div className='imgRoja' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Typography variant="subtitle2" sx={{color: 'white'}}>mes</Typography>
      </div>
      <div className='imgBlanca' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <Typography variant="subtitle2">num</Typography>
        <Typography variant="subtitle2">dia</Typography>
      </div>
      </div>
      <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Calendario
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker 
            value={value}
            minDate={dayjs('today')}
            onChange={(newValue) => handleDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
            onClose={handleClose}
            />
          </LocalizationProvider>
        </DialogContent>
      </BootstrapDialog>
    </div>
    </div>
  
  );
}

export default MiniCalendario;