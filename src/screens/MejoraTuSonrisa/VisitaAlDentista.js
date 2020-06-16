import React from 'react';
import background_ from '../../images/Fondo-white.png';
import titulo from '../../images/MejoraTuSonrisa/VisitaAlDentista/Titulo-03.png';
import subtitulo from '../../images/MejoraTuSonrisa/UsaEnjuagueBucal/barra-arriba.png';
import Header from '../../components/Header';
import img from '../../images/MejoraTuSonrisa/VisitaAlDentista/visita-al-dentista.png';
import Footer from '../../components/Footer'
import video from '../../images/MejoraTuSonrisa/video/Coaching.mp4';

export default class VisitaAlDentista extends React.Component {


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
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px', height:'80px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{marginTop:'90px'}}>
              <div className="column pr-4" style={{position:'relative',right:'130px'}}>
               <div style={{display:'flex'}}>
                    <img src={img} alt="error" style={{ position: 'relative', top: '60px', width:'850px',right:'-30px',height:'510px' }} />
               </div>
              </div>
              <div className="column pl-5 pt-4">
                <h5 className="text-danger title-points font-weight-bold" style={{fontSize:'20px',marginTop:'90px'}}>INFORMACIÓN GENERAL</h5>
                <p className="small text-muted text-normal " style={{position:'relative',marginTop:'20px',right:'-25px',fontSize:'25px'}}>Cuidarse los dientes significa más que cepillarse y usar hilo</p>
                <p className="small text-muted text-normal" style={{position:'relative',right:'-25px',fontSize:'25px'}}>dental. Para cuidarse de forma completa es importante visi-</p>
                <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>tar al dentista cada seis meses para realizarse chequeos y</p>
                <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>limpiezas profesionales. El primer paso del proceso es en-</p>
                <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>contrar un dentista con quien se sienta cómodo, y luego</p>
                <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>concertar una cita.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="cambiatucepillodedientes" screenPrev="usaenjuaguebucal" currentScreen="cambiatucepillodedientes" history={this.props.history} top="296px" />
        </div>
      </div>
    );
  }
}