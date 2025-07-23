import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const EditContact = () => {
    const navegar = useNavigate();
    const parametros = useParams();
    
    const { store, dispatch } = useGlobalReducer();
    const [datos, setDatos] = useState({ name: "", email: "", phone: "", address: "" });
    const miAgenda = "josemartinez";

    
    useEffect(() => {
        const contactoAEditar = store.contactos.find(c => c.id == parametros.contactId);
        if (contactoAEditar) {
            setDatos(contactoAEditar);
        }
    }, [parametros.contactId, store.contactos]);

    const manejarCambio = (evento) => {
        setDatos({ ...datos, [evento.target.name]: evento.target.value });
    };

   
    async function guardarCambios(evento) {
        evento.preventDefault();
        try {
            const respuesta = await fetch(`https://playground.4geeks.com/contact/agendas/${miAgenda}/contacts/${parametros.contactId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });
            const datosActualizados = await respuesta.json();
            
            
            dispatch({ type: 'actualizar_contacto', payload: datosActualizados });
            navegar('/');
        } catch (error) {
            console.log("Error al actualizar:", error);
        }
    };

    return (
        <div className="form-container">
            <h1 className="text-center mb-4">Editar Contacto</h1>
            <form onSubmit={guardarCambios}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" value={datos.name} onChange={manejarCambio} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={datos.email} onChange={manejarCambio} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={datos.phone} onChange={manejarCambio} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="address" name="address" value={datos.address} onChange={manejarCambio} required />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Guardar Cambios</button>
            </form>
        </div>
    );
};