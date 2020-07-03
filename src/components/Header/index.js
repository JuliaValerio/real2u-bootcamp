import React from 'react';
import logo from './logo.png';
import './index.css'

export default function Header (){
    return(
        <div id='header'>
            <img src={logo} alt='logo github'></img>
            <h2>Pesquise por um usuario do GitHub</h2>
        </div>
    )
}