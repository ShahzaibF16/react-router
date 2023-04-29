import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";

function Navigation(){
    return(
    
        <Routes>
            <Route path="/" element={<Login/>}>

            </Route>
        </Routes>
    )
}

export default Navigation;