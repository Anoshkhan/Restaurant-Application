import React, { useState } from "react";
import './style.css';
import Menu from './menuApi.js';
import MenuCard from "./MenuCard";
const Restaurant = () =>{
    const[menuData , setMenuData] = useState(Menu);
    return(
        <>
           <MenuCard menuData = {menuData} /> 
        </>
    );
};
export default Restaurant;