import React from 'react';
import background_ from '../../images/Fondo-white.png';
import titulo from '../../images/Productos/Cuidadodelosmaspeques/Cepillos/Titulo.png';
import Header from '../../components/Header';
import img1 from '../../images/Productos/Cuidadodelosmaspeques/Cepillos/01.png';
import img2 from '../../images/Productos/Cuidadodelosmaspeques/Cepillos/02.png';
import img3 from '../../images/Productos/Cuidadodelosmaspeques/Cepillos/03.png';
import img4 from '../../images/Productos/Cuidadodelosmaspeques/Cepillos/04.png';
import Footer from '../../components/Footer'


export default class CuidadoDeLosMasPequesCepillos extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -110px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="Título" width="700" className="lx30" style={{ position: 'relative', top:'50px', left: '0px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{position:'relative',top:'50px'}}>
              <div className="column">
                <img src={img1} alt="error" style={{ position: 'relative', width: '240px', left: '-250px' }} />
              </div>
              <div className="column">
                <img src={img2} alt="error" style={{ position: 'relative', width: '290px', left: '-70px' }} />
              </div>
              <div className="column">
                <img src={img3} alt="error" style={{ position: 'relative', width: '312px', left: '50px' }} />
              </div>
              <div className="column">
                <img src={img4} alt="error" style={{ position: 'relative', width: '250px', left: '200px' }} />
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadodelosmaspequesenjuague" screenPrev="cuidadodelosmaspequesligadelajusticia" currentScreen="Cuidadochicos" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}