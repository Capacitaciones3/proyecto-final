import React, { useEffect, useState } from 'react'
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { getFeriados } from '../../../services/feriadosServices';
registerLocale('es', es);

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
        minDate={new Date('01-01-2023')}
        maxDate={new Date('12-12-2023')}
        withPortal 
        inline
        readOnly
        locale="es"
    />
  )
}

export default CalendarioFeriados