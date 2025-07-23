import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ estaAbierto, alCerrar, alConfirmar, titulo, children }) => {
    if (!estaAbierto) return null;

    return (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{titulo}</h5>
                        <button type="button" className="close" onClick={alCerrar}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={alCerrar}>Cancelar</button>
                        <button type="button" className="btn btn-danger" onClick={alConfirmar}>Confirmar Borrado</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    estaAbierto: PropTypes.bool.isRequired,
    alCerrar: PropTypes.func.isRequired,
    alConfirmar: PropTypes.func.isRequired,
    titulo: PropTypes.string,
    children: PropTypes.node
};