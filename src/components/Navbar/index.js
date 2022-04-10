import React from "react";
//import { Nav, NavLink, NavMenu, NavLogo } from "./NavbarElements";
import logo from "../../images/notas-musicais.png"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

function Navbar () {
  return (
      
      <nav class="navbar navbar-expand-sm navbar-dark fixed-top">

        <div class="container-fluid">  

            <img src={logo} style={{ width: "50px", height: "auto", paddingRight: "10px" }} alt="Generify Music Logo"/>
            <Link class="nav-link" to="/">
                <b class="main-font" style={{fontFamily: "Sofia, sans-serif", fontSize: "20pt", color: "#9d4edd"}} >  Generify  </b>    
            </Link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar" >
            <ul class="navbar-nav ms-auto"  >

            <li class="" >
                <Link class="nav-link2" to="/">Home</Link>
            </li>

            <li class="" >
                <Link class="nav-link2" to="/playlists">Playlists</Link>
            </li>
            
            <li class="" >
                <Link class="nav-link2" to="/">Cadastro</Link>
            </li>

            <li class="">
                <Link class="nav-link2" to="/">Login</Link>
            </li>

            <li class="">
                <Link class="nav-link2" to="/faq">FAQ</Link>
                {/* <a class="nav-link" href="./faq.html">FAQ</a> */}
            </li>
            </ul>
        </div>

        </div>  

      </nav>
      
  );
}

export default Navbar;