import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';

function createData(name, periodo, dias, estado) {
    return { name, periodo, dias, estado };
}



export default function DenseTable({ data }) {

    const rows = data.map((el) => (
        createData(<div style={{ display: "flex", gap: "10px", alignItems: "center" }}><Avatar /> {el.name}
        </div>
            ,
            `${el.startDate} ${el.endDate}`, el.dias, el.estado)
    ))

    return (
        <TableContainer component={Paper} sx={{ maxWidth: "600px", width: "100%" }}>
            <Table sx={{ maxWidth: "600px" }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Periodo</TableCell>
                        <TableCell align="right">Dias</TableCell>
                        <TableCell align="right">Estado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.periodo}</TableCell>
                            <TableCell align="right">{row.dias}</TableCell>
                            <TableCell align="right">{row.estado}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}