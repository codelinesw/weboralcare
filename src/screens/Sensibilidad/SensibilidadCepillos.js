import React from 'react';
import background_ from '../../images/Fondo-white.png';
import titulo from '../../images/Productos/Sensibilidad/ProAlivioInmediato/Titulo.png';
import Header from '../../components/Header';
import img1 from '../../images/Productos/Sensibilidad/Cepillos/01.png';
import img2 from '../../images/Productos/Sensibilidad/Cepillos/02.png';
import img3 from '../../images/Productos/Sensibilidad/Cepillos/03.png';
import Footer from '../../components/Footer'


export default class SensibilidadCepillos extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -150px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-body d-flex justify-content-center w-100" style={{position:'relative',top:'80px'}}>
              <div className="column">
                <img src={img1} alt="error" style={{ position: 'relative', width: '370px', left:'-270px'}} />
              </div>
              <div className="column">
                <img src={img2} alt="error" style={{ position: 'relative', width: '230px', left:'10px'}} />
              </div>
              <div className="column">
                <img src={img3} alt="error" style={{ position: 'relative', width: '285px',left:'300px'}} />
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadenjuague" screenPrev="sensibilidadproalivioinmediato" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}