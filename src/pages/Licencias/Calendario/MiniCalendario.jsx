import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
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
          aria-label='close'
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const MiniCalendario = ({ handleFecha, name }) => {
  const initData = {
    dia: "Día",
    mes: "Mes",
    numDia: "",
  };
  const [value, setValue] = useState(initData);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDate = (newValue, name) => {
    console.log(newValue);
    const dia = newValue.$d.toString().split(" ")[0];
    const mes = newValue.$d.toString().split(" ")[1];
    const diaNum = newValue.$D;
    setValue({ dia: dia, mes: mes, diaNum: diaNum });
    console.log(dia, mes, diaNum);
    handleFecha({ dia: dia, mes: mes, diaNum: diaNum }, name);
  };

  return (
    <div>
      <div
        className='imagenCalendario'
        style={{ cursor: "pointer" }}
        onClick={handleClickOpen}>
        <div
          className='imgRoja'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography variant='subtitle2' sx={{ color: "white" }}>
            {value.mes}
          </Typography>
        </div>
        <div
          className='imgBlanca'
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography variant='subtitle2'>{value.diaNum}</Typography>
          <Typography variant='subtitle2'>{value.dia}</Typography>
        </div>
      </div>
      <div>
        <BootstrapDialog aria-labelledby='customized-dialog-title' open={open}>
          <BootstrapDialogTitle
            id='customized-dialog-title'
            onClose={handleClose}>
            Calendario
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                value={value}
                disablePast
                onChange={(date) => handleDate(date, name)}
                renderInput={(params) => <TextField {...params} />}
                onClose={handleClose}
              />
            </LocalizationProvider>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </div>
  );
};

export default MiniCalendario;
