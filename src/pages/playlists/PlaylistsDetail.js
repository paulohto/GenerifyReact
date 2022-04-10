import React from "react";
import { Link, useParams } from 'react-router-dom';
import playlistsMock from './playlistsMock';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import PlaylistList from "./PlaylistList";

function PlaylistsDetail () {     
    const { id } = useParams();   
    //const params = useParams();
   // const playlistCapas = PlaylistList().find( (p) => p.id == params.id);   

   const lista_det = playlistsMock[id-1]
   const lista_sessao = <ul>
                <Link to=""><li>{ lista_det.musicas[ 0 ].artista } - {lista_det.musicas[ 0 ].nome} </li></Link>
                <li>{ lista_det.musicas[ 1 ].artista } - {lista_det.musicas[ 1 ].nome} </li>
                <li>{ lista_det.musicas[ 2 ].artista } - {lista_det.musicas[ 2 ].nome} </li>
                <li>{ lista_det.musicas[ 3 ].artista } - {lista_det.musicas[ 3 ].nome} </li>
                <li>{ lista_det.musicas[ 4 ].artista } - {lista_det.musicas[ 4 ].nome} </li>
            </ul>
    
    const capa = lista_det.capa
    
    
    return (
        <div className="container" style={{ paddingTop:"110px", width: "auto"}} > 
            <div className="row" >

            <div class="" style={{width: "40%"}}> <img className="capa" src={ `../${ capa } `}></img>   </div>

            <div class="" style={{width: "60%"}}> 
                <div style={{padding: "0px 0px 40px 0px", margin: "0px 0px 0px 0px"}}>
                    <b  className="" style={{color:"#10002b"}}> Generi - { lista_det.nome } </b>
                </div>

                <table class="table table-striped">
                <tbody>
                    <tr>
                    
                        <td>
                            { lista_sessao }  
                        </td>
                        
                    </tr>
                    </tbody>
                </table>

            </div>

            </div>
        </div>
    )

}

export default PlaylistsDetail;
