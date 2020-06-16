import React from 'react';
import {
  Link,
} from 'react-router-dom';
import background_ from '../../images/Productos/Multibeneficios/Menu/Fondo.png';
import imgOne from '../../images/Productos/Sensibilidad/Menu/01.png';
import imgTwo from '../../images/Productos/Sensibilidad/Menu/02.png';
import imgThree from '../../images/Productos/Sensibilidad/Menu/03.png';
import imgFour from '../../images/Productos/Sensibilidad/Menu/04.png';
import imgFive from '../../images/Productos/Sensibilidad/Menu/05.png';
import imgSix from '../../images/Productos/Sensibilidad/Menu/06.png';
import imgSeven from '../../images/Productos/Sensibilidad/Menu/07.png';
import ImgTouch from '../../images/toca-para-elegir.png'
import Header from '../../components/Header';
import Footer from '../../components/Footer'

export default class SensibilidadMenu extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
  }



  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="row w-100 m-auto mb-0 container-box" style={{ position: 'relative', top: '20px' }}>
            <div className="w-75 d-flex justify-content-between m-auto">
              <div className="column">
                <Link to="/sensibilidadrealwhite/"><img src={imgOne} className="boxImage" style={{ position: 'relative', top: '70px', right: '0px' }} /></Link>
              </div>
              <div className="column">
                <Link to="/sensibilidadenjuague/"><img src={imgSeven} className="boxImage boxTopTwo" style={{ position: 'relative', top: '0px', right: '-40px' }} /></Link>
              </div>
              <div className="column">
                <Link to="/sensibilidadcepillos/"><img src={imgSix} className="boxImage boxTopTwo" style={{ position: 'relative', top: '70px' }} /></Link>
              </div>
            </div>
            <div className="w-75 d-flex justify-content-center m-auto">
              <div className="column">
                <img src={ImgTouch} className="imgTouch_" style={{ position: 'relative', marginTop: '50px', top: '55px' }} />
              </div>
            </div>
            <div className="w-50 d-flex justify-content-between m-auto">
              <div className="column col-sm-12 ml-5">
                <Link to="/sensibilidadreparacioncompleta/"><img src={imgTwo} className="boxImage" style={{ position: 'relative', top: '-120px', right: '400px' }} /></Link>
              </div>
              <div className="column col-sm-7 mr-5" style={{ position: 'relative' }}>
                <Link to="/sensibilidadproaliviooriginal/"><img src={imgThree} className="boxImage" style={{ position: 'relative', top: '130px', right: '850px' }} /></Link>
              </div>
              <div className="column col-sm-12 ml-5">
                <Link to="/sensibilidadblanqueamiento/"><img src={imgFour} className="boxImage" style={{ position: 'relative', top: '130px', right: '1000px' }} /></Link>
              </div>
              <div className="column col-sm-12 ml-5">
                <Link to="/sensibilidadproalivioinmediato/"><img src={imgFive} className="boxImage" style={{ position: 'relative', top: '-120px', right: '1500px' }} /></Link>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadrealwhite" screenPrev="sensibilidad" history={this.props.history} top="147px" />
        </div>
      </div>
    );
  }
}