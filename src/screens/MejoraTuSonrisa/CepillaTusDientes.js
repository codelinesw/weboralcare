import React from 'react';
import background_ from '../../images/Fondo-white.png';
import titulo from '../../images/MejoraTuSonrisa/CepillaTusDientes/Titulo-01.png';
import Header from '../../components/Header';
import img from '../../images/MejoraTuSonrisa/CepillaTusDientes/Imagen.png';
import Footer from '../../components/Footer'
import video from '../../images/MejoraTuSonrisa/video/Coaching.mp4';

export default class CepillaTusDientes extends React.Component {


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
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="productCarbon" style={{ position: 'relative', top: '-120px', width:'500px',right:'80px',height:'500px' }} />
                <p className="small text-muted text-normal " style={{position:'relative',marginTop:'-80px',right:'25px'}}>Cepillando tus dientes 3 veces al día durante</p>
                <p className="small text-muted text-normal" style={{position:'relative',right:'40px'}}>2 minutos lograrás controlar la placa bacteriana</p>
                <p className="small text-muted text-normal" style={{position:'relative',left:'25px'}}>y mantener una sonrisa sana.</p>
              </div>
              <div className="column pl-5 pt-4">
                <video src={video} width="730" height="550" controls autoPlay></video>
              </div>
            </div>
          </div>
          <Footer screenNext="usaenjuaguebucal" screenPrev="mejoratusonrisa" currentScreen="Blanqueamiento" history={this.props.history} top="136px" />
        </div>
      </div>
    );
  }
}