import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Sensibilidad/Enjuague/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Sensibilidad/Enjuague/Imagen.png';
import Footer from '../../components/Footer'


export default class SensibilidadEnjuague extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -20px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="750" className="lx30" style={{ position: 'relative', top:'50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" className="image-left productEnjuague" style={{position:'relative',right:'260px',top:'-180px'}} />
              </div>
              <div className="column pt-4 mt-0">
                <div className="mt-5" style={{ position: 'relative', top: '100px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', left: '-75px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', left: '-75px', }}><strong className="text-danger mr-2">+</strong>Exclusiva fórmula Pro-Argin<span>&trade;</span></p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '-75px', }}><strong className="text-danger mr-2">+</strong>Clínicamente comprobado</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '-75px', }}><strong className="text-danger mr-2">+</strong>Repara áreas sensibles</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '-75px', }}><strong className="text-danger mr-2">+</strong>Aliento increíble</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '-75px', }}><strong className="text-danger mr-2">+</strong>Cero alcohol</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidad" screenPrev="sensibilidadcepillos" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}