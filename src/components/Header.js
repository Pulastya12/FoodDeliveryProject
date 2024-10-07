import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{
    const[buttonName,setbuttonName]=useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
               <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link>Cart</Link></li>
                <button className="login" onClick={()=>{buttonName==="Login"? setbuttonName("Logout"): setbuttonName("Login");}}>{buttonName}</button>
               </ul>
            </div>

        </div>
    );
};

export default Header