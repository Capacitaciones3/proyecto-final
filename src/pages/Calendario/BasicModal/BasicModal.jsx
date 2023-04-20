import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { postFeriados } from "../../../services/feriadosServices";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "100%",
  minHeight: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function BasicModal({
  titulo,
  nombreBtn,
  children,
  open,
  setOpen,
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} color="success">
        {nombreBtn}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
<<<<<<< HEAD
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'

=======
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
>>>>>>> 81fc042d2cfb2cf617c810ca48e7188e78807196
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {titulo}
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
