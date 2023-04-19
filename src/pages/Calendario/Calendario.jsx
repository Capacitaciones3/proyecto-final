import React, { useEffect, useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import HolidayList from "./HolidayList/HolidayList";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Calendario.css";
import { Button, TextField } from "@mui/material";
import BasicModal from "./BasicModal/BasicModal";
import Loading from "../../components/Loading/Loading";
import { AutenticacionContext } from "../../contexts/Autenticacion";
import { getFeriados } from "../../services/feriadosServices";
import CalendarioFeriados from "./CalendarioFeriados/CalendarioFeriados";
import "react-datepicker/dist/react-datepicker.css";

const Calendario = () => {
  const initNuevoFeridado = { fecha: "", motivo: "Hola" }


  const [feriados, setFeriados] = useState(null);
  const { usuario } = useContext(AutenticacionContext);
  const [nuevoFeriado, setNuevoFeriado] = useState(initNuevoFeridado)

  useEffect(() => {
    getFeriados().then((data) => setFeriados(data));
  }, []);

  const handleChange = (e) => {
    console.log("falopa")

  }

  return (
    <>
      {!feriados ? (
        <Loading />
      ) : (
        <section className='calendar-page'>
          <div className='calendar-page-section-container'>
            <Typography
              variant='h4'
              sx={{ color: "#FF7B7B", textAlign: "center" }}>
              Calendario
            </Typography>
            <CalendarioFeriados />
          </div>
          <div className='calendar-page-section-container list-calendar'>
            <div className='calendar-section-title-container'>
              <Typography variant='h4' sx={{ color: "#FF7B7B" }}>
                Feriados
              </Typography>
              {usuario.rol === "administrador" && (
                <BasicModal
                  titulo='Crear nuevo Feriado'
                  nombreBtn='Nuevo Feriado'

                >
                  <>
                    <div className='modal-input-container'>
                      <TextField
                        id='date'
                        label='Fecha'
                        defaultValue='2023-02-18'
                        type='date'
                        InputLabelProps={{ shrink: true }}

                      />


                      <input
                        id='motivo'

                        label='Motivo'
                        InputLabelProps={{ shrink: true }}
                        onChange={() => handleChange()}

                      />
                    </div>
                    <div className='calendar-modal-btn-container'>
                      <Button variant='contained' color='error'>
                        Cancelar
                      </Button>
                      <Button variant='contained' color='success'>
                        Confirmar
                      </Button>
                    </div>
                  </>
                </BasicModal>
              )}
            </div>
            <div className='contenedorListaFeriados'>
              <HolidayList>
                {feriados.map((feriado, index) => (
                  <ListItem key={`feriado-${index}`} divider={true}>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            component='span'
                            variant='subtitle1'
                            color='text.primary'>
                            {feriado.fecha} - {feriado.motivo}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </HolidayList>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Calendario;
