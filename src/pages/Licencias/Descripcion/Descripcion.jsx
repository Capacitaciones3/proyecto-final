import React, { useState }  from 'react'

const Descripcion =() => {

  const [textArea, setTextArea] = useState();
  const [textAreaDisabled, setTextAreaDisabled] = useState(false);

  const atextarea = (e) => {
    setTextArea(e.target.value);
    setTextAreaDisabled(true);
  };

  const enableTextArea = () => {
    setTextAreaDisabled(false);
  };

  return (
    <div>
      <form id='descrip'>
        <textarea value={String} onChange={atextarea} disabled={textAreaDisabled} 
        name="descripcionLicencia" form='descrip' placeholder='Ingrese una descripcion de la licencia' required>
        </textarea>
      </form>
      <button onClick={enableTextArea}>enviar</button>
    </div>
  );
}

export default Descripcion;