import React from 'react';
import background_ from '../../images/Fondo-white.png';
import titulo from '../../images/MejoraTuSonrisa/CambiadeCepillo/Titulo-04.png';
import subtitulo from '../../images/MejoraTuSonrisa/UsaEnjuagueBucal/barra-arriba.png';
import Header from '../../components/Header';
import img from '../../images/MejoraTuSonrisa/CambiadeCepillo/Imagen.png';
import Footer from '../../components/Footer'
import video from '../../images/MejoraTuSonrisa/video/Coaching.mp4';

export default class CambiaTuCepilladeDientes extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${img})`;
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
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px',marginTop:'85px'}}>Cambia tu cepillo cuando sus</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>filamentos estén deformados,</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>de esta manera lograrás un</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>mejor control de la placa</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>bacteriana y al mismo tiempo</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>evitarás la contaminación de tu</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>cepillo por uso prolongado en el</p>
                    <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>tiempo.</p>
               </div>
              </div>
              <div className="column pl-5 pt-4">
                <p className="small text-muted text-normal " style={{position:'relative',left:'225px',fontSize:'25px',marginTop:'135px'}}>Estudios han demostrado que después de 3</p>
                    <p className="small text-muted text-normal " style={{position:'relative',left:'225px',fontSize:'25px'}}>meses de uso regular, un cepillo es menos</p>
                    <p className="small text-muted text-normal " style={{position:'relative',left:'225px',fontSize:'25px'}}>efectivo para remover la placa de los dientes</p>
                    <p className="small text-muted text-normal " style={{position:'relative',left:'225px',fontSize:'25px'}}>y de las encías, en comparación con un</p>
                    <p className="small text-muted text-normal " style={{position:'relative',left:'225px',fontSize:'25px'}}>cepillo nuevo.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="consejosparaunabocasana" screenPrev="visitaldentista" currentScreen="Blanqueamiento" history={this.props.history} top="456px" />
        </div>
      </div>
    );
  }
}