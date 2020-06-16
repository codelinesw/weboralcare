import React from 'react';
import { Link } from 'react-router-dom';
import titulo from '../../images/MejoraTuSonrisa/Titulo.png';
import background_ from '../../images/Fondo-white.png';
import imgOne from '../../images/MejoraTuSonrisa/Menu/boton-menu-01.png';
import imgTwo from '../../images/MejoraTuSonrisa/Menu/boton-menu-02.png';
import imgThree from '../../images/MejoraTuSonrisa/Menu/boton-menu-03.png';
import imgFour from '../../images/MejoraTuSonrisa/Menu/boton-menu-04.png';
import imgFive from '../../images/MejoraTuSonrisa/Menu/boton-menu-05.png';
import Header from '../../components/Header';
import ImgTouch from '../../images/toca-para-elegir.png'
import Footer from '../../components/Footer'

export default class MejoraTuSonrisa extends React.Component {


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
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px',width:'800px',height:'80px',marginTop:80 }} />
            </div>
            <div className="card-body d-flex justify-content-center align-items-center w-100" style={{position:'relative',marginTop:150}}>
              <div className="w-100 d-flex justify-content-between">
                <div className="column">
                  <Link to="/cepillatusdientes/"><img src={imgOne} className="boxImage" style={{ position: 'relative', top: '0px' }} /></Link>
                </div>
                <div className="column">
                  <Link to="/visitaldentista/"><img src={imgTwo} className="boxImage " style={{ position: 'relative', top: '0px' }} /></Link>
                </div>
                <div className="column">
                  <Link to="/usaenjuaguebucal/"><img src={imgThree} className="boxImage" style={{ position: 'relative', top: '0px' }} /></Link>
                </div>
                <div className="column">
                  <Link to="/cambiatucepillodedientes/"><img src={imgFour} className="boxImage" style={{ position: 'relative', top: '0px' }} /></Link>
                </div>
                <div className="column">
                  <Link to="/consejosparaunabocasana/"><img src={imgFive} className="boxImage" style={{ position: 'relative', top: '0px' }} /></Link>
                </div>
            </div>
            </div>
          </div>
          <Footer screenNext="cepillatusdientes" screenPrev="mejoratusonrisa" currentScreen="Blanqueamiento"  history={this.props.history} top="316px" />
        </div>
      </div>

    );
  }
}