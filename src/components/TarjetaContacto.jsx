import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TarjetaContacto = ({ contacto, alBorrar }) => {
    
    return (
        <li className="tarjeta-contacto">
           
            <div className="info-columna">
                <h2 className="nombre-contacto">{contacto.name}</h2>
                <p className="info-linea">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{contacto.address}</span>
                </p>
                <p className="info-linea">
                    <i className="fas fa-phone"></i>
                    <span>{contacto.phone}</span>
                </p>
                <p className="info-linea">
                    <i className="fas fa-envelope"></i>
                    <span>{contacto.email}</span>
                </p>
            </div>

            
            <div className="acciones-columna">
                <Link to={`/edit-contact/${contacto.id}`} className="btn btn-accion">
                    <i className="fas fa-pencil-alt"></i>
                </Link>
                <button className="btn btn-accion" onClick={alBorrar}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    );
};

TarjetaContacto.propTypes = {
    contacto: PropTypes.object.isRequired,
    alBorrar: PropTypes.func.isRequired
};
