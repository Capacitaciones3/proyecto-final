import { PhotoCamera } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'

const DescargarArchivo = ({ file }) => {

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = file;
        link.href = file;
        link.click();
    };
    const handleMessage = () => {

    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Typography variant="subtitle1">ARCHIVO ADJUNTO</Typography>
            {
                file ?
                    <div>
                        <Button component="label" sx={{ width: '40%', width: "fit-content" }} color='success' variant='contained' onClick={() => onDownload()} >
                            DESCARGAR ARCHIVOS
                        </Button>
                    </div> : <p>No hay archivos</p>
            }
        </Box>
    )
}

export default DescargarArchivo