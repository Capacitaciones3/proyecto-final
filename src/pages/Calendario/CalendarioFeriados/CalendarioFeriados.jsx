import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { getFeriados } from "../../../services/feriadosServices";

const CalendarioFeriados = () => {
  const [feriados, setFeriados] = useState(null);

  useEffect(() => {
    getFeriados().then((data) => {
      console.log(data);
      setFeriados(data);
    });
  }, []);

  return (
    <ReactDatePicker
      minDate={new Date("01-01-2023")}
      maxDate={new Date("12-12-2023")}
      withPortal
      inline
      readOnly
      locale='es'
    />
  );
};

export default CalendarioFeriados;
