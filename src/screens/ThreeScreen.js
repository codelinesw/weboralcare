import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import LogoColgate from '../images/Logo-colgate.png'
import ImgpOne from '../images/Producto-ideal.png'
import ImgpTwo from '../images/cuidado-oral.png'
import ImgpThree from '../images/Mejora-tu-sonrisa.png'
import ImgpFour from '../images/Mundo-ninios.png'
import ImgTouch from '../images/toca-para-elegir.png'
import background_ from '../images/Fondo-categorias.png';

class Threescreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
  }


  render() {
    return (
      <div className="container-fluid">
        <header className="main-navigation border-bottom bg-transparent border-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent border-0">
            <Link to="/" className="navbar-brand font-pacifico">
              <img src={LogoColgate} width="200" style={{ position: 'absolute', top: '0px', left: '100px' }} />
            </Link>
          </nav>
        </header>
        <div className="row w-100 m-auto overflow-hidden mb-0 container-items" style={{ position: 'relative', top: '0px' }}>
          <div className="w-75 d-flex justify-content-between m-auto">
            <div className="column">
              <Link to="/imagecarousel"><img src={ImgpOne} width="230" height="220" className="imageScreenThree imgleft" /></Link>
            </div>
            <div className="column">
              <Link to="/questionone/"><img src={ImgpTwo} width="230" height="220" className="imageScreenThree imgright" /></Link>
            </div>
          </div>
          <div className="w-75 d-flex justify-content-center m-auto">
            <div className="column">
              <img src={ImgTouch} width="220" height="90" className="imageScreenTouch" />
            </div>
          </div>
          <div className="w-50 d-flex justify-content-between m-auto">
            <div className="column col-sm-7 mr-5" style={{ position: 'relative', right: '70px' }}>
              <Link to="/mejoratusonrisa/"><img src={ImgpThree} width="230" height="220" className="imageScreenThree imageScreenThreeBottom" /></Link>
            </div>
            <div className="column col-sm-12 ml-5">
              <Link to="/mundodeninios/"><img src={ImgpFour} width="230" height="220" className="imageScreenThree imageScreenThreeBottom" /></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Threescreen;
