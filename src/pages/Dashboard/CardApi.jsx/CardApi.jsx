import { Typography } from "@mui/material";
import React from "react";
import "./cardApi.css";

const CardApi = ({ data }) => {
  return (
    <>
      <div className='contenedorApi'>
        <div className='imagenClima'>
          <img src={data?.current?.condition?.icon} alt='' />
          <Typography fontWeight='400' fontSize={40} component='span'>
            {data?.current?.temp_c}°C
          </Typography>
        </div>
        <div className='dataclima'>
          <Typography fontWeight='500' component='span'>
            {data?.location?.name}
          </Typography>
          <Typography fontWeight='500' component='span'>
            Prob. de precipitaciones: {data?.current?.precip_in}%
          </Typography>
          <Typography fontWeight='500' component='span'>
            Humedad: {data?.current?.humidity}%
          </Typography>
          <Typography fontWeight='500' component='span'>
            Viento: a {data?.current?.wind_kph} km/h
          </Typography>
        </div>
      </div>
    </>
  );
};

export default CardApi;
