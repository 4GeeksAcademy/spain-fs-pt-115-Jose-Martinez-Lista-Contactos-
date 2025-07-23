import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { TarjetaContacto } from "../components/TarjetaContacto.jsx";
import { Modal } from "../components/Modal.jsx";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();
    const miAgenda = "josemartinez";

    const [mostrarModal, setMostrarModal] = useState(false);
    const [idParaBorrar, setIdParaBorrar] = useState(null);

    async function confirmarBorrado() {
        try {
            const respuesta = await fetch(`https://playground.4geeks.com/contact/agendas/${miAgenda}/contacts/${idParaBorrar}`, { method: 'DELETE' });
            if (respuesta.status === 204) {
                dispatch({ type: 'eliminar_contacto', payload: { id: idParaBorrar } });
                setMostrarModal(false);
            }
        } catch (error) {
            console.log("Error al borrar:", error);
        }
    }

    function manejarClickBorrar(id) {
        setIdParaBorrar(id);
        setMostrarModal(true);
    }

    return (
        <div>
            <ul className="list-group">
                {store.contactos.map(contacto => (
                    <TarjetaContacto key={contacto.id} contacto={contacto} alBorrar={() => manejarClickBorrar(contacto.id)} />
                ))}
            </ul>
            {mostrarModal && (
                <Modal estaAbierto={mostrarModal} alCerrar={() => setMostrarModal(false)} alConfirmar={confirmarBorrado} titulo="Confirmar">
                    <p>¿Seguro que quieres borrar este contacto?</p>
                </Modal>
            )}
        </div>
    );
};