import React, { useState } from "react";
import { addBulkEmpren } from "../../lib/api";

export const AddBulkEmpren = ({ perfiles, setPerfilesBulk, showModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(false);

  const fileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const submitDocument = async () => {
    if (selectedFile !== null) {
      const resultado = await addBulkEmpren(generateForm());
      console.log(resultado.data.perfiles, perfiles);
      if (resultado.status === 200) {
        setPerfilesBulk(resultado.data.perfiles);
        showModal("addBulkEmpren");
      }
    }

    setError(true);
    return setTimeout(() => {
      setError(false);
    }, 2000);
  };

  const generateForm = () => {
    const formData = new FormData();
    formData.append("archivo", selectedFile, selectedFile.name);
    return formData;
  };

  return (
    <div className="modal-form addBulkEmpren">
      <div className="container">
        <div className="cerrar" onClick={() => showModal("addBulkEmpren")}>
          X
        </div>
        {error && <p className="error">Debes llenar todos los campos</p>}
        <form>
          <p>A continuación sube el archivo CSV de lista de emprendimientos</p>
          <br/>
          <div className="input-container">
            <input
              placeholder="Escribe el nombre"
              name="archivo"
              type="file"
              accept=".csv"
              onChange={fileChange}
            />
          </div>

          <div onClick={submitDocument} className="submit-button">
            Enviar
          </div>
        </form>
      </div>
    </div>
  );
};
