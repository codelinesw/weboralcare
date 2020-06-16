import React from 'react';
import { Link } from 'react-router-dom';
import background_ from '../../images/Productos/Multibeneficios/Menu/Fondo.png';
import imgOne from '../../images/Productos/Multibeneficios/Menu/01.png';
import imgTwo from '../../images/Productos/Multibeneficios/Menu/02.png';
import imgThree from '../../images/Productos/Multibeneficios/Menu/03.png';
import imgFour from '../../images/Productos/Multibeneficios/Menu/04.png';
import imgFive from '../../images/Productos/Multibeneficios/Menu/05.png';
import imgSix from '../../images/Productos/Multibeneficios/Menu/06.png';
import Header from '../../components/Header';
import ImgTouch from '../../images/toca-para-elegir.png'
import Footer from '../../components/Footer'

export default class MultiBeneficiosMenu extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
  }



  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '50px', width: '90%' }}>
          <div className="row w-100 m-auto mb-0 container-box" style={{ position: 'relative', top: '20px' }}>
            <div className="w-75 d-flex justify-content-between m-auto">
              <div className="column">
                <Link to="/totalcleanmint/"><img src={imgOne} className="boxImage boxTopOne" style={{ position: 'relative', top: '50px' }} /></Link>
              </div>
              <div className="column">
                <Link to="/ultrasoft/"><img src={imgSix} className="boxImage boxTopTwo" style={{ position: 'relative', top: '0px' }} /></Link>
              </div>
              <div className="column">
                <Link to="/advancedtotal/"><img src={imgFive} className="boxImage boxTopThree" style={{ position: 'relative', top: '50px' }} /></Link>
              </div>
            </div>
            <div className="w-75 d-flex justify-content-center m-auto">
              <div className="column">
                <img src={ImgTouch} className="imgTouch_" style={{ position: 'relative', marginTop: '50px' }} />
              </div>
            </div>
            <div className="w-50 d-flex justify-content-between m-auto">
              <div className="column col-sm-7 mr-5 boxBottomOne" style={{ position: 'relative' }}>
                <Link to="/saludvisible/"><img src={imgTwo} className="boxImage" style={{ position: 'relative', top: '-30px' }} /></Link>
              </div>
              <div className="column col-sm-7 mr-5 boxBottomTwo" style={{ position: 'relative' }}>
                <Link to="/enciasaludables/"><img src={imgThree} className="boxImage" style={{ position: 'relative', top: '70px' }} /></Link>
              </div>
              <div className="column col-sm-12 ml-5 boxBottomThree">
                <Link to="/alientosaludable/"><img src={imgFour} className="boxImage" style={{ position: 'relative', top: '-30px' }} /></Link>
              </div>
            </div>
          </div>
          <Footer screenNext="totalcleanmint" screenPrev="multibeneficios" history={this.props.history} top="97px" />
        </div>
      </div>
    );
  }
}