import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Blanqueamiento/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Blanqueamiento/Imagen-01.png';
import Footer from '../../components/Footer'


export default class LuminousWhite extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -115px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="image-left" />
              </div>
              <div className="column pl-5 pt-4">
                <h6 className="text-danger title-red">BENEFICIOS:</h6>
                <p className="small text-muted text-normal"><b className="text-danger">+</b>Sus microcristales aceleradores de blanqueamiento contienen</p>
                <p className="small text-muted text-normal">ingredientes similares a los usados por los dentistas.</p>
                <p className="small text-muted text-normal mt-4"><b className="text-danger">+</b> Combina abrillantadores ópticos para blanquear los dientes</p>
                <p className="small text-muted text-normal">instantáneamente.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="blanqueamientomenu" screenPrev="luminouswhite" top="58px" showButton={true} history={this.props.history} />
        </div>
      </div>
    );
  }
}