import React from 'react';
import './App.css';
import {createBrowserRouter, Navigate, RouterProvider,} from "react-router-dom";
import {Login} from "./components/login";
import {Tasks} from "./components/tasks";
import {Task} from "./components/task";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/tasks",
        element: <Tasks/>,
    },
    {
        path: "/task/:id",
        element: <Task/>,
    },
    {
        path: "/",
        element: <Navigate to="/login"/>
    }
]);

function App() {

    return (
        <>

            <RouterProvider router={router}/>

        </>
    );
}

export default App;
