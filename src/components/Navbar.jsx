import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand mb-0 h1">
                    Inicio
                </Link>
                <div className="ml-auto">
                    <Link to="/add-contact">
                        <button className="btn btn-success">Añadir Nuevo Contacto</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
