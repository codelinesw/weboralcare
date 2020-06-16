import React from 'react';
import { Link } from 'react-router-dom';
import background_ from '../../images/Productos/Multibeneficios/Menu/Fondo.png';
import imgOne from '../../images/Productos/Blanqueamiento/Menu/01.png';
import imgTwo from '../../images/Productos/Blanqueamiento/Menu/02.png';
import imgThree from '../../images/Productos/Blanqueamiento/Menu/03.png';
import imgFour from '../../images/Productos/Blanqueamiento/Menu/04.png';
import imgFive from '../../images/Productos/Blanqueamiento/Menu/05.png';
import imgSix from '../../images/Productos/Blanqueamiento/Menu/06.png';
import imgSeven from '../../images/Productos/Blanqueamiento/Menu/07.png';
import Header from '../../components/Header';
import ImgTouch from '../../images/toca-para-elegir.png'
import Footer from '../../components/Footer'

export default class BlanqueamientoMenu extends React.Component {


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
                <Link to="/luminouswhiteinstant/"><img src={imgTwo} className="boxImage boxTopOne" style={{ position: 'relative', top: '50px' }} /></Link>
              </div>
              <div className="column">
                <Link to="/luminouswhitenormal/"><img src={imgOne} className="boxImage boxTopTwo" style={{ position: 'relative', top: '0px' }} /></Link>
              </div>
              <div className="column">
                <Link to="/enjuagueLuminousWhite/"><img src={imgSeven} className="boxImage boxTopThree" style={{ position: 'relative', top: '50px' }} /></Link>
              </div>
            </div>
            <div className="w-75 d-flex justify-content-center m-auto">
              <div className="column">
                <img src={ImgTouch} className="imgTouch_" style={{ position: 'relative', marginTop: '50px', top: '55px' }} />
              </div>
            </div>
            <div className="w-50 d-flex justify-content-between m-auto">
              <div className="column col-sm-7 mr-5 boxBottomOne rmore" style={{ position: 'relative' }}>
                <Link to="/carbonactivado/"><img src={imgThree} className="boxImage" style={{ position: 'relative', top: '-30px' }} /></Link>
              </div>
              <div className="column col-sm-7 mr-5 boxBottomTwo rmore" style={{ position: 'relative' }}>
                <Link to="/maxwhite/"><img src={imgFour} className="boxImage" style={{ position: 'relative', top: '70px' }} /></Link>
              </div>
              <div className="column col-sm-7 mr-5 boxBottomSeven" style={{ position: 'relative' }}>
                <Link to="/advancedluminouswhite/"><img src={imgFive} className="boxImage" style={{ position: 'relative', top: '70px' }} /></Link>
              </div>
              <div className="column col-sm-12 ml-5 boxBottomThree rmore">
                <Link to="/luminouswhite360/"><img src={imgSix} className="boxImage" style={{ position: 'relative', top: '-30px' }} /></Link>
              </div>
            </div>
          </div>
          <Footer screenNext="luminouswhitenormal" screenPrev="luminouswhite" history={this.props.history} top="97px" />
        </div>
      </div>
    );
  }
}