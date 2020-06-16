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
import Hammer from 'hammerjs';
import LogoColgate from '../images/Logo-colgate.png'
import background_ from '../images/FONDO.jpg';
import imgOne from '../images/screen-four/01.png';
import imgTwo from '../images/screen-four/02.png';
import imgThree from '../images/screen-four/03.png';
import imgFour from '../images/screen-four/04.png';
import imgFive from '../images/screen-four/05.png';
import imgSix from '../images/screen-four/06.png';
import Header from '../components/Header';

export default class ImageCarousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: '0'
    }

    this.hammer = '';
  }

  next() {

    let count = parseInt(this.state.count);
    let sizeElements = document.querySelectorAll('._item_').length;
    let direction = "right";
    count = (direction == "right") ? count + 1 : count - 1;
    count = (count >= sizeElements) ? 0 : count;
    count = (count < 0) ? sizeElements - 1 : count;
    console.log(count);
    this.setState({ count: count });

  }

  prev() {

    let count = parseInt(this.state.count);
    let sizeElements = document.querySelectorAll('._item_').length;
    let direction = "left";
    count = (direction == "right") ? count + 1 : count - 1;
    count = (count >= sizeElements) ? count - 1 : count;
    count = (count < 0) ? sizeElements - 1 : count;
    console.log(count);
    this.setState({ count: count });


  }

  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    this.hammer = Hammer(document.querySelector('.carousel-inner'));
    this.hammer.on('swipeleft', () => this.next());
    this.hammer.on('swiperight', () => this.prev());

  }
  render() {
    const { count } = this.state;
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row w-100 m-auto mb-0 align-items-center overflow-hidden" style={{ position: 'relative', top: '320px' }}>
          <div id="carouselExampleControls" className="w-100 carousel slide m-auto" data-ride="carousel" style={{ position: 'relative', marginTop: '80px' }}>
            <div className="carousel-inner d-flex" style={{ width: '100%', marginLeft: `-${count}00%` }}>
              <div className="_item_ w-100 d-flex justify-content-center">
                <div className="w-100 d-flex justify-content-center content-carousel">
                  <li style={{ listStyle: 'none', marginRight: '40px', marginTop: '25px' }}>
                    <Link to="/multibeneficios/"><img src={imgOne} className="image-carousel" style={{ transform: 'scale(1.2)' }} /></Link>
                  </li>
                  <li style={{ listStyle: 'none', marginRight: '40px', marginTop: '25px' }}>
                    <Link to="/luminouswhite/"><img src={imgTwo} className="image-carousel" style={{ transform: 'scale(1.2)' }} /></Link>
                  </li>
                  <li style={{ listStyle: 'none', marginRight: '40px', marginTop: '25px' }}>
                    <Link to="/saludnatural/"><img src={imgThree} className="image-carousel" style={{ transform: 'scale(1.2)' }} /></Link>
                  </li>
                  <li style={{ listStyle: 'none', marginRight: '40px', marginTop: '30px' }}>
                    <Link to="/cuidadofamiliar/"><img src={imgFour} className="image-carousel" style={{ transform: 'scale(1.2)' }} /></Link>
                  </li>
                  <li style={{ listStyle: 'none', marginRight: '40px', marginTop: '25px' }}>
                    <Link to="/sensibilidad/"><img src={imgFive} className="image-carousel" style={{ transform: 'scale(1.1)' }} /></Link>
                  </li>
                   <li style={{ listStyle: 'none', marginRight: '0px', marginTop: '25px' }}>
                    <Link to="/cuidadodelosmaspeques/"><img src={imgSix} className="image-carousel" style={{ transform: 'scale(1.2)' }} /></Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
