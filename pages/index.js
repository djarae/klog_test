import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import image1 from './pudin.png'; // Tell Webpack this JS file uses this image
import React, { useState } from 'react';
import image from 'next/image';

const appid='_Jl6gLWuDaAEqEflNWlLMyV2ciicov_SWaZnUdB4lRY'
const endpoint = 'https://api.unsplash.com/search/photos'


export default function Hello(){
  const [query, setQuery] = useState('');
  const [jsonPics, setJsonPics] = useState([]);


function constructor(){

  setQuery('')
  this.trackQueryValue=this.trackQueryValue.bind(this);
 this.buscar = this.search.bind(this)

}


 function  search(){
    console.log("Entro a search")

    fetch(`${endpoint}?query=${query}&client_id=${appid}`)
    // fetch(`https://api.unsplash.com/search/photos?query=laptop&client_id=0BLshedrvRegOba2vyMWUuW3wrqMdWjCubQWpvMWgWI`)
    .then(response=>{
      return response.json()
    }).then(jsonResponse=>{
      console.log(jsonResponse)
           //Renderizamos:
           let itemsPics = []
          for (let i=0;i<jsonResponse.results.length;i++) {
           console.log("entro al renderizadod")
            itemsPics.push(
           <table>
                    <tr>
                        <td>
                              <img src={jsonResponse.results[i].urls.thumb}/>
                        </td>
                    </tr>
           </table>
            )

          }
          setJsonPics(itemsPics)
    })

    



  }

  function trackQueryValue(ev){
     console.log("entro a trackQueryValue ")
     setQuery(ev.target.value)  
    console.log(query)
  }




    return(<div>
        <input className="txtCambio" type="text" onChange={(e) => trackQueryValue(e)} />
        <button className="btnBuscar" onClick={()=>search()}> Buscar </button>
        <form>
          {jsonPics}
        </form>



      </div>
      
      )

     







  }
