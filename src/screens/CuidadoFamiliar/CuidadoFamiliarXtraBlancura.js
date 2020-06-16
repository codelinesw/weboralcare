import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/CuidadoFamiliar/XtraBlancura/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/CuidadoFamiliar/XtraBlancura/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoFamiliarXtraBlancura extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -12px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="700" style={{ position: 'relative', top:'50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" style={{ position: 'relative', width: '970px', top:'130px', right:'200px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{position:"relative", top:'50px'}}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>Triple Acción* Xtra Blancura con micro-partículas</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>pulidoras para dientes blancos.</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '-100px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Remueve manchas</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Funciona desde el primer cepillado</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Blancura Natural</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliarxtrafrescura" screenPrev="cuidadofamiliarmentaoriginal" currentScreen="CuidadoFamiliar" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}