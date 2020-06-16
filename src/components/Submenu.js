import React from 'react';

import imgmultibene from '../images/Productos/Multibeneficios/Submenu/Multibeneficios.png'
import botonselectmultibene from '../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-1.png'
import botonmultibene from '../images/Productos/Multibeneficios/Submenu/Boton-1.png'
import background_ from '../images/Fondo-white.png';
//---- ----//
import imgBlank from '../images/Productos/Multibeneficios/Submenu/Blanqueamiento.png'
import botonselectBlank from '../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-2.png'
import botonimgBlank from '../images/Productos/Multibeneficios/Submenu/Boton-2.png'
//--- ----//
import imgSaludNatural from '../images/Productos/Multibeneficios/Submenu/SaludNatural.png'
import botonselectSaludNatural from '../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-3.png'
import botonSaludNatural from '../images/Productos/Multibeneficios/Submenu/Boton-3.png'
//--- ---//
import imgCuidadoFamiliar from '../images/Productos/Multibeneficios/Submenu/CuidadoFamiliar.png'
import botonselectCuidadoFamiliar from  '../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-4.png'
import botonCuidadoFamiliar from '../images/Productos/Multibeneficios/Submenu/Boton-4.png'
//--- ---//
import imgSensibilidad from '../images/Productos/Multibeneficios/Submenu/Sensibilidad.png'
import botonselectSensibilidad from '../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-5.png'
import botonSensibilidad from '../images/Productos/Multibeneficios/Submenu/Boton-5.png'

import imgCuidadochicos from '../images/Productos/Multibeneficios/Submenu/Cuidadochicos.png'
import botonselectCuidadochicos from '../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-6.png'
import botonCuidadochicos from '../images/Productos/Multibeneficios/Submenu/Boton-6.png'

import {
 Link
} from  'react-router-dom';
export default class Submenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
     document.body.style.backgroundImage = `url(${background_})`;
     document.body.style.backgroundSize = "cover";
     document.body.style.backgroundColor = "white";
  }


  render(){
    const { _path_, currentScreen } = this.props;
    let _styles_ = {borderBottomColor: 'red', borderBottomWidth: 4};
    return(
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center" style={{position:'relative',top:'15px'}}>
          <Link to="/multibeneficios/" className={"bg-transparent botonCircle "+(currentScreen == "Multibeneficios" ? "active" : "")}>
                {currentScreen == "Multibeneficios"
                ? <img src={imgmultibene} className="circleimage" />
                : null}
                <img
                src={currentScreen == "Multibeneficios" ? botonselectmultibene : botonmultibene }
                className="semicircle"
                 />
          </Link>
          <Link to="/luminouswhite" className={"bg-transparent botonCircle "+(currentScreen == "Blanqueamiento" ? "active" : "")}>
                {currentScreen == "Blanqueamiento"
                ? <img src={imgBlank} className="circleimage" />
                : null}
                <img
                src={currentScreen == "Blanqueamiento" ? botonselectBlank : botonimgBlank }
                className="semicircle"
                 />
          </Link>
          <Link to="/saludnatural" className={"bg-transparent botonCircle "+(currentScreen == "SaludNatural" ? "active" : "")}>
                {currentScreen == "SaludNatural"
                ? <img src={imgSaludNatural} className="circleimage" />
                : null}
                <img
                src={currentScreen == "SaludNatural" ? botonselectSaludNatural : botonSaludNatural }
                className="semicircle"
                 />
          </Link>
          <Link to="/cuidadofamiliar" className={"bg-transparent botonCircle "+(currentScreen == "CuidadoFamiliar" ? "active" : "")}>
                {currentScreen == "CuidadoFamiliar"
                ? <img src={imgCuidadoFamiliar} className="circleimage" />
                : null}
                <img
                src={currentScreen == "CuidadoFamiliar" ? botonselectCuidadoFamiliar : botonCuidadoFamiliar }
                className="semicircle"
                 />
          </Link>
         <Link to="/sensibilidad" className={"bg-transparent botonCircle "+(currentScreen == "Sensibilidad" ? "active" : "")}>
                {currentScreen == "Sensibilidad"
                ? <img src={imgSensibilidad} className="circleimage" />
                : null}
                <img
                src={currentScreen == "Sensibilidad" ? botonselectSensibilidad : botonSensibilidad }
                className="semicircle"
                 />
          </Link>
          <Link to="/cuidadodelosmaspeques/" className={"bg-transparent botonCircle "+(currentScreen == "Cuidadochicos" ? "active" : "")}>
                {currentScreen == "Cuidadochicos"
                ? <img src={imgCuidadochicos} className="circleimage" />
                : null}
                <img
                src={currentScreen == "Cuidadochicos" ? botonselectCuidadochicos : botonCuidadochicos }
                className="semicircle"
                 />
          </Link>
        </div>
      </div>
    )
  }

}
