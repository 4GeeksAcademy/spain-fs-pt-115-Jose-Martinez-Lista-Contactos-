import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const AddContact = () => {
    const navegar = useNavigate();
    const { dispatch } = useGlobalReducer();
    const [datos, setDatos] = useState({ name: "", email: "", phone: "", address: "" });
    const miAgenda = "josemartinez";

    const manejarCambio = (evento) => {
        setDatos({ ...datos, [evento.target.name]: evento.target.value });
    };

    async function enviarFormulario(evento) {
        evento.preventDefault();
        try {
            const respuesta = await fetch(`https://playground.4geeks.com/contact/agendas/${miAgenda}/contacts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });
            const nuevoContacto = await respuesta.json();
            dispatch({ type: 'agregar_contacto', payload: nuevoContacto });
            navegar('/');
        } catch (error) {
            console.log("Error al guardar:", error);
        }
    };

    return (
        <div className="form-container">
            <h1 className="text-center mb-4">Añadir Contacto</h1>
            <form onSubmit={enviarFormulario}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={manejarCambio} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={manejarCambio} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="phone" name="phone" onChange={manejarCambio} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="address" name="address" onChange={manejarCambio} required />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Guardar</button>
            </form>
        </div>
    );
};
