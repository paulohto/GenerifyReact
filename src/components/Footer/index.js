import React from "react";
//import { Nav, NavLink, NavMenu, NavLogo } from "./NavbarElements";
import logo from "../../images/notas-musicais.png"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

function Footer (){
    return(

    <footer >
      <div >

        <div class="container mt-3" style={{paddingBottom: "20px"}}>
          <div class="row">

                <div class="col-sm-4">
                  <p class="p-footer" >Generify</p>
                  <ul>
                    <li> <a class="a-footer" href="./index.html">Sobre</a>  </li>
                    <li> <a class="a-footer" href="./index.html">Trabalhe conosco</a>  </li>
                    <li> <a class="a-footer" href="./index.html">Doação</a>  </li>
                    <li> <a class="a-footer" href="./index.html">Contato</a>  </li>
                  </ul> 
                </div>

                <div class="col-sm-4">
                  <p class="p-footer">Links Úteis</p>
                  <ul>
                    <li> <a class="a-footer" href="./index.html">Suporte</a> </li>
                    <li> <a class="a-footer" href="./index.html">Web Player</a> </li>
                    <li> <a class="a-footer" href="./index.html">Aplicativos mobile</a> </li>
                    <li> <a class="a-footer" href="./index.html">Anúncios</a> </li>
                  </ul> 
                </div>

                <div class="col-sm-4">
                  <p style={{fontFamily: 'Sofia, sans-serif', fontSize: "30pt", color: "#9d4edd", letterSpacing: "0px", fontWeight: "normal", marginTop: "30px"}}>Generify</p>
                </div>

          </div>
        </div>

      </div>
    </footer>

    );
}

export default Footer;