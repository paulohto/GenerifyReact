import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import playlistsMock from './playlistsMock';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import PlaylistList from "./PlaylistList";
import Player from "../../components/Player/Player";
import ReactAudioPlayer from 'react-audio-player';

function PlaylistsDetail () {     
    const { id } = useParams();   


   //const lista_det = playlistsMock[id-1]
   /*const lista_sessao = <ul>
                <Link to=""><li>{ lista_det.musicas[ 0 ].artista } - {lista_det.musicas[ 0 ].nome} </li></Link>
                <li>{ lista_det.musicas[ 1 ].artista } - {lista_det.musicas[ 1 ].nome} </li>
                <li>{ lista_det.musicas[ 2 ].artista } - {lista_det.musicas[ 2 ].nome} </li>
                <li>{ lista_det.musicas[ 3 ].artista } - {lista_det.musicas[ 3 ].nome} </li>
                <li>{ lista_det.musicas[ 4 ].artista } - {lista_det.musicas[ 4 ].nome} </li>
            </ul>*/
    
    const selectedPlaylist = playlistsMock[id - 1];
    const renderSongs = selectedPlaylist.musicas.map
        ((p) => {
            return (
                <tr key={p.id}>
                    <td>
                        <div style={{paddingLeft: "25px", paddingTop: "15px"}}>
                            {p.artista} - {p.nome}
                        </div>
                    </td>
                </tr>
            )
        });

    const play = selectedPlaylist.musicas.map(
        (p) => {
            return(
                <div>
                    <ReactAudioPlayer   src={ `../${p.arquivo}` }  autoPlay  controls />
                </div>
            )
        }
    );
    
    //<ReactAudioPlayer   src={ `../${p.arquivo}` }   autoPlay  controls  />
    const capa = selectedPlaylist.capa

    const [musicas] = useState(selectedPlaylist.musicas);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > musicas.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex, musicas]);
    
    return (
        <div className="container" style={{ paddingTop:"110px", width: "auto"}} > 
            <div className="row" >

            <div class="" style={{width: "35%"}}> <img className="capa" src={ `../${ capa } `}></img>   </div>

            <div class="" style={{width: "65%"}}> 
                <div style={{padding: "0px 0px 0px 0px", margin: "0px 0px 0px 0px"}}>
                    <b  className="" style={{color:"#10002b"}}> Generi - { selectedPlaylist.nome } </b>
                </div>
                
                <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                  {/*    <ReactAudioPlayer  src="../HappyFlutes.mp3"   autoPlay  controls /> */}
              
                  <p > { play } </p>
                 
                  
                </div>

                <table borderless hover size="lg" className="boxsongs">
                    <div style={{paddingBottom: "15px"}} >
                            { renderSongs }  
                            </div>

                </table>

            </div>

            </div>
        </div>
    )

}

export default PlaylistsDetail;
