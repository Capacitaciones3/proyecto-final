import React from 'react'

const TipodeLicencia = () => {
  return (
    <div>
    <select onChange {...event => console.log (event)}>
        <option selected value="licencia">Licencia</option>
        <option value="vacaciones">Vacaciones</option>
        <option value="enfermedad">Enfermedad</option>
        <option value="examen">Examen</option>
    </select>
    </div>
  )
}   

export default TipodeLicencia