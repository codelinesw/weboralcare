import React from 'react';
import {
  Link,
} from 'react-router-dom';
import background_ from '../../images/Productos/Multibeneficios/Menu/Fondo.png';
import imgOne from '../../images/Productos/SaludNatural/Menu/01.png';
import imgTwo from '../../images/Productos/SaludNatural/Menu/02.png';
import imgThree from '../../images/Productos/SaludNatural/Menu/03.png';
import imgFour from '../../images/Productos/SaludNatural/Menu/04.png';
import ImgTouch from '../../images/toca-para-elegir.png'
import Header from '../../components/Header';
import Footer from '../../components/Footer'

export default class SaludNaturalMenu extends React.Component {


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
                <Link to="/saludnaturaldetox/"><img src={imgTwo} className="boxImage boxTopTwo" style={{ position: 'relative', top: '300px' }} /></Link>
              </div>
              <div className="column">
                <Link to="/saludnaturaldefensareforzada/"><img src={imgOne} className="boxImage" style={{ position: 'relative', top: '40px',right:'400px' }} /></Link>
              </div>
            </div>
            <div className="w-75 d-flex justify-content-center m-auto">
              <div className="column">
                <img src={ImgTouch} className="imgTouch_" style={{ position: 'relative', marginTop: '50px', top: '55px' }} />
              </div>
            </div>
            <div className="w-50 d-flex justify-content-between m-auto">
              <div className="column col-sm-7 mr-5 boxBottomTwo" style={{ position: 'relative' }}>
                <Link to="/saludnaturalpurificante/"><img src={imgThree} className="boxImage" style={{ position: 'relative', top: '70px', right:'-560px' }} /></Link>
              </div>
              <div className="column col-sm-12 ml-5 boxBottomThree">
                <Link to="/saludnaturalbamboo/"><img src={imgFour} className="boxImage" style={{ position: 'relative', top: '-190px', right:'-500px' }} /></Link>
              </div>
            </div>
          </div>
          <Footer screenNext="saludnaturaldefensareforzada" screenPrev="saludnatural" history={this.props.history} top="95px" />
        </div>
      </div>
    );
  }
}