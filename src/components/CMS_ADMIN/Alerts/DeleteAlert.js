import React from "react";

export const DeleteAlert = ({ deleteEmprend }) => {
  return (
    <div className="modal-form alertDelete">
      <div className="container">
    
          ¿Estás seguro que quieres eliminar este emprendimiento?
          <div className="botones">
            <span
              className="button buttonError"
              onClick={() => deleteEmprend("si")}
            >
              Sí
            </span>
            <span
              className="button buttonAlert"
              onClick={() => deleteEmprend("no")}
            >
              No
            </span>
          </div>
        
      </div>
    </div>
  );
};
