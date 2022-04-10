import React from "react";
import { Link } from 'react-router-dom';
import playlistsMock from './playlistsMock';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

function PlaylistList () {        
    const result = playlistsMock.map( 
        (p) => {
            return (                    
                <Link   to={ `/playlists/${p.id}` }>
                    <img className="capas" src={p.capa}></img>
                </Link>             
            )
    })

    return (
        <div className="container mt-4 " style={{paddingBottom: "20px", paddingTop:"50px"}} >

            <div style={{padding: "25px 0px 0px 30px", margin: "0px 0px 0px 0px"}}>
                <b  className="main-font" style={{color:"#10002b"}}>Generi - Lists</b>
            </div>

            <div className="" style={{marginBottom:"35px", marginTop:"0px"}}>
                <div className="">
                    {result}
                </div>
            </div>
        </div>
    )

}

export default PlaylistList;
