import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './routes.jsx';
import { StoreProvider } from './hooks/useGlobalReducer.jsx';

const container = document.getElementById('root');

const root = createRoot(container);


root.render(
    <React.StrictMode>
        <StoreProvider>
            <RouterProvider router={router} />
        </StoreProvider>
    </React.StrictMode>
)
