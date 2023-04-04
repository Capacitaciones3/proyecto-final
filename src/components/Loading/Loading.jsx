import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';

const Loading = () => {
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
export default Loading;