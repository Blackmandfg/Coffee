import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Main} from "./Pages";
import Teas_menu from "./Pages/teas_menu/teas_menu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "*",
        element: <p>404</p>
    },
    {
        path: "/teas-menu",
        element: <Teas_menu/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
