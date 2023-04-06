import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const Loading = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleToggle}></Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}


export default Loading;

/* const Loading = () => {
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
      setLoading(true);
    }
    <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={handleClick}
          loading={loading}
          variant="outlined"
          disabled
        >
          <span>Cargando</span>
        </LoadingButton>
    </Box>

}
export default Loading; */
