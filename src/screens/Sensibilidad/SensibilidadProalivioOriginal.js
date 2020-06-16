import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Sensibilidad/ProAlivio/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Sensibilidad/ProAlivio/Imagen.png';
import Footer from '../../components/Footer'


export default class SensibilidadProalivioOriginal extends React.Component {


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
            <div className="card-header bg-transparent border-0 d-flex">
              <img src={titulo} alt="error" width="500" style={{ position: 'relative', right:'-460px', top:'50px'}} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="Pro Alivio" className="" style={{ position: 'relative', height: '670px', top:'-30px',right:'255px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>Alivio instantáneo* y duradero** de la sensibilidad</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '123px', left: '-100px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Exclusiva fórmula exclusiva Pro-Argin<span>&trade;</span></p>
                </div>
                <div className="mt-5" style={{ position: 'relative', top: '80px', right: '35px' }}>
                <p className="small text-muted .text-inferior" style={{ position: 'relative', top: '0px', left: '-100px', }}><strong className="mr-2">*</strong>Con aplicación directa</p>
                <p className="small text-muted .text-inferior" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="mr-2">**</strong>Con un cepillado diario</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadblanqueamiento" screenPrev="sensibilidadreparacioncompleta" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}