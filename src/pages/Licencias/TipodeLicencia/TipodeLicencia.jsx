import React, { useState }  from 'react'

const TipodeLicencia =() => {

  const [select, setSelect] = useState();
  const [selectDisabled, setSelectDisabled] = useState(false);

  const elselect = (e) => {
    setSelect(e.target.value);
    setSelectDisabled(true);
  };

  const enableSelect = () => {
    setSelectDisabled(false);
  };

  return (
    <div>
      <form>
        <select onChange={elselect} disabled={selectDisabled}>
        <option selected value ="licencia">Licencia</option>
        <option value="vacaciones">Vacaciones</option>
        <option value="enfermedad">Enfermedad</option>
        <option value="examen">Examen</option>
        </select>
      </form>
      <button onClick={enableSelect}>activar</button>
    </div>
  );
}

export default TipodeLicencia