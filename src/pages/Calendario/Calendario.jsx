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
import { getFeriados, postFeriados } from "../../services/feriadosServices";
import CalendarioFeriados from "./CalendarioFeriados/CalendarioFeriados";
import "react-datepicker/dist/react-datepicker.css";

const Calendario = () => {


  const initNuevoFeriado = { fecha: "", motivo: "" };
  const [feriados, setFeriados] = useState(null);
  const { usuario } = useContext(AutenticacionContext);
  const [nuevoFeriado, setNuevoFeriado] = useState(initNuevoFeriado);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getFeriados().then((data) => setFeriados(data));
  }, []);

  const handleChange = (e) => {
    let info = nuevoFeriado;
    info["motivo"] = e.target.value;
    setNuevoFeriado({ ...info });
  };

  const enviarNuevoFeriado = () => {
    if (nuevoFeriado.motivo.length > 0 || nuevoFeriado.fecha !== "") {
      postFeriados(nuevoFeriado);

      setFeriados([...feriados, nuevoFeriado]);
      setOpen(false);
    }
  };

  return (
    <>
      {!feriados ? (
        <Loading />
      ) : (
        <section className="calendar-page">
          <div className="calendar-page-section-container">
            <Typography
              variant="h4"
              sx={{ color: "#FF7B7B", textAlign: "center" }}
            >
              Calendario
            </Typography>
            <CalendarioFeriados />
          </div>
          <div className="calendar-page-section-container list-calendar">
            <div className="calendar-section-title-container">
              <Typography variant="h4" sx={{ color: "#FF7B7B" }}>
                Feriados
              </Typography>
              {usuario.rol === "administrador" && (
                <BasicModal
                  titulo="Crear nuevo Feriado"
                  nombreBtn="Nuevo Feriado"
                  open={open}
                  setOpen={setOpen}
                >
                  <>
                    <div className="modal-input-container">
                      <TextField

                        id="date"
                        label="Fecha"
                        InputLabelProps={{ shrink: true }}
                        type="date"
                        onChange={(e) => {
                          setNuevoFeriado({
                            ...nuevoFeriado,
                            fecha: e.target.value,
                          });
                        }}
                      />
                      <TextField
                        id="motivo"
                        label="Motivo"
                        type="text"
                        InputLabelProps={{ shrink: true }}
                        value={nuevoFeriado.motivo}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="calendar-modal-btn-container">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => setOpen(false)}
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => enviarNuevoFeriado()}
                      >
                        Confirmar
                      </Button>
                    </div>
                  </>
                </BasicModal>
              )}
            </div>
            <div className="contenedorListaFeriados">
              <HolidayList>
                {feriados.map((feriado, index) => (
                  <ListItem key={`feriado-${index}`} divider={true}>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography

                            component="span"
                            variant="subtitle1"
                            color="text.primary"
                          >

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
