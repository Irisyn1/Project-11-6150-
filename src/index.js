import react from "react";
import {createRoot} from "react-dom/client";
import {
    Home,
    Product,
    Account,
} from "./components/index";

import{BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import "./style.css";


const App = () => {
    return <>
         <h1 className="logo">Quick Store</h1>
        <nav>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/Account"> Account</NavLink>
            <NavLink to="/Product"> Product</NavLink>
        </nav>
        <hr></hr>
        <h1>Welcome to Quick Store</h1>
        <h3>Sell, Buy and Trade Some Treasures Here!</h3>
        <Routes>
            <Route path ="/" exaxt element={<Home />} />
            <Route path ="/Account" exaxt element={<Account />} />
            <Route path ="/Product" exaxt element={<Product />} />
        </Routes>
        
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>

)