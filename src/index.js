import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Main} from "./Pages";
import Teas_menu from "./Pages/teas_menu/teas_menu";
import Dishes_menu from './Pages/Dishes-menu/dishes_menu';
import SelectedMenu from './Pages/Selected/selected';
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
    {
        path: "/dishes-menu",
        element: <Dishes_menu/>
    },
    {
        path: "/selected",
        element: <SelectedMenu/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
