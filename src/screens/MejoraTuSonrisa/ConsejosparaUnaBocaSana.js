import React from 'react';
import background_ from '../../images/MejoraTuSonrisa/ConsejosparaUnaBocaSana/Fondo.jpg';
import titulo from '../../images/MejoraTuSonrisa/ConsejosparaUnaBocaSana/Titulo-05.png';
import subtitulo from '../../images/MejoraTuSonrisa/UsaEnjuagueBucal/barra-arriba.png';
import Header from '../../components/Header';
import img from '../../images/MejoraTuSonrisa/CambiadeCepillo/Imagen.png';
import Footer from '../../components/Footer'
import video from '../../images/MejoraTuSonrisa/video/Coaching.mp4';
import numerosuno from '../../images/MejoraTuSonrisa/ConsejosparaUnaBocaSana/Numeros-1-2.png';
import numerosdos from '../../images/MejoraTuSonrisa/ConsejosparaUnaBocaSana/Numeros-3-4.png';
import imagenuno from '../../images/MejoraTuSonrisa/ConsejosparaUnaBocaSana/Imagen-01.png';
import imagendos from '../../images/MejoraTuSonrisa/ConsejosparaUnaBocaSana/Imagen-02.png';
import imagentres from '../../images/MejoraTuSonrisa/ConsejosparaUnaBocaSana/Imagen-03.png';
export default class CambiaTuCepilladeDientes extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundRepeat  = "no-repeat";
    document.body.style.backgroundPosition = "0px 230px"
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px', height:'80px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{marginTop:'90px'}}>
              <div className="column pr-4" style={{position:'relative',right:'130px'}}>
               <div style={{display:'column'}}>
                   <img src={numerosuno} style={{position:'absolute',width:'45px',height:'170px',left:'-45px',marginTop:'52px'}} />
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px',marginTop:'85px'}}>Usar el cepillo dental adecuado para la</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>necesidad de tu boca. Cepíllate 3 veces al</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>día por al menos 2 minutos, especialmente</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>al levantarse por la mañana y antes de</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>acostarse.</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px',marginTop:'55px'}}>Elige la crema dental adecuada</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>mantener tu boca sana.</p>
               </div>
              </div>
              <div className="column pl-5 pt-4">
                    <img src={numerosdos} style={{position:'absolute',width:'40px',height:'150px',right:'605px',marginTop:'137px'}} />
                    <p className="small text-muted text-normal " style={{position:'relative',left:'225px',fontSize:'25px',marginTop:'135px'}}>Finaliza tu higiene bucal con un enjuague</p>
                    <p className="small text-muted text-normal " style={{position:'relative',left:'225px',fontSize:'25px'}}>bucal que potencie la acción de tu crema</p>
                    <p className="small text-muted text-normal " style={{position:'relative',left:'225px',fontSize:'25px'}}>dental.</p>
                    <p className="small text-muted text-normal " style={{position:'relative',left:'225px',fontSize:'25px',marginTop:'55px'}}>Usa hilo dental una vez al día.</p>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="column mr-5 ml-5">
                  <div className="d-flex">
                    <img src={imagenuno} style={{position:'relative',width:'150px',height:'150px',marginTop:'137px'}} />
                    <div className="column">
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginTop:'170px',marginLeft:'15px'}}>Saque de 45 a 60 cm</p>
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginLeft:'15px'}}>de hilo dental</p>
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginLeft:'15px'}}>del dispensador.</p>
                    </div>
                  </div>
              </div>
              <div className="column mr-5 ml-5">
                 <div className="d-flex">
                    <img src={imagendos} style={{position:'relative',width:'150px',height:'150px',marginTop:'137px'}} />
                    <div className="column">
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginTop:'170px',marginLeft:'15px'}}>Enrolle los extremos</p>
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginLeft:'15px'}}>del hilo en sus</p>
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginLeft:'15px'}}>dedos índice y medio.</p>
                    </div>
                 </div>
              </div>
              <div className="column ml-5">
                  <div className="d-flex">
                    <img src={imagentres} style={{position:'relative',width:'150px',height:'150px',marginTop:'137px'}} />
                    <div className="column">
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginTop:'120px',marginLeft:'15px'}}>Sujete el hilo con firmeza alrededor</p>
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginLeft:'15px'}}>de cada diente formando una C;</p>
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginLeft:'15px'}}>mueva el hilo hacia adelante y</p>
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginLeft:'15px'}}>hacia atrás jalando y empujando,</p>
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginLeft:'15px'}}>de arriba hacia abajo contra el lado</p>
                      <p className="small text-muted text-normal " style={{fontSize:'25px',marginLeft:'15px'}}>de cada diente.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <Footer screenNext="mejoratusonrisa" screenPrev="cambiatucepillodedientes" currentScreen="Blanqueamiento" history={this.props.history} top="176px" />
        </div>
      </div>
    );
  }
}