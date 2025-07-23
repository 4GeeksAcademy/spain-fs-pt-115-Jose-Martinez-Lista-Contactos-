import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import '../styles/index.css'; 

export const Layout = () => {
    const { dispatch } = useGlobalReducer();
    const miAgenda = "josemartinez";

    useEffect(() => {
        async function cargarDatos() {
            try {
                const url = `https://playground.4geeks.com/contact/agendas/${miAgenda}`;
                const respuesta = await fetch(url);
                if (respuesta.status === 404) {
                    await fetch(url, { method: "POST" });
                }
                const respuestaContactos = await fetch(`${url}/contacts`);
                const datos = await respuestaContactos.json();
                dispatch({ type: 'establecer_contactos', payload: datos.contacts || [] });
            } catch (error) {
                console.log("Error cargando datos:", error);
            }
        }
        cargarDatos();
    }, []);

    return (
        <div>
            <Navbar />
            <main className="container py-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};