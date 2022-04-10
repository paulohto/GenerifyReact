import React from "react";
//import { Nav, NavLink, NavMenu, NavLogo } from "./NavbarElements";
import img1 from "../../images/card1.jpg"
import img2 from "../../images/card2.jpg"
import img3 from "../../images/card3.jpg"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

function Cards (){
    return(

        <div class="container mt-3" style={{paddingBottom: "20px"}}>
        <div class="row">
          
        {/* -- CARD 1 -- */}
            <div class="col-sm-4 text-dark" >
              <div class="card" style={{width: "auto"}} >
                <img src={img1} class="card-img-top" alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Jazz and Soul</h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et massa id purus scelerisque congue. Ut augue lacus, interdum ut elementum ut, tincidunt eu arcu. Integer urna mi, iaculis sed consequat eu, lacinia sed nibh. Praesent faucibus, ex et iaculis efficitur, metus leo scelerisque ex, sed vestibulum lectus urna sed magna.</p>

                </div>
              </div>
            </div>

        {/* -- CARD 2 -- */}
        <div class="col-sm-4 text-dark" >
              <div class="card" style={{width: "auto"}} >
                <img src={img2} class="card-img-top" alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Eletronic Music</h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et massa id purus scelerisque congue. Ut augue lacus, interdum ut elementum ut, tincidunt eu arcu. Integer urna mi, iaculis sed consequat eu, lacinia sed nibh. Praesent faucibus, ex et iaculis efficitur, metus leo scelerisque ex, sed vestibulum lectus urna sed magna.</p>

                </div>
              </div>
            </div>

        {/* -- CARD 3 -- */}
        <div class="col-sm-4 text-dark" >
              <div class="card" style={{width: "auto"}} >
                <img src={img3} class="card-img-top" alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Relax Music</h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et massa id purus scelerisque congue. Ut augue lacus, interdum ut elementum ut, tincidunt eu arcu. Integer urna mi, iaculis sed consequat eu, lacinia sed nibh. Praesent faucibus, ex et iaculis efficitur, metus leo scelerisque ex, sed vestibulum lectus urna sed magna.</p>

                </div>
              </div>
            </div>



          </div>
        </div>

    );
}

export default Cards;