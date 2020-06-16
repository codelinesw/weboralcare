import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Sensibilidad/ReparacionCompleta/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Sensibilidad/ReparacionCompleta/Imagen.png';
import Footer from '../../components/Footer'


export default class SensibilidadReparacionCompleta extends React.Component {


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
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="700" style={{ position: 'relative', top:'50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" style={{ position: 'relative', width: '870px', top: '160px', right: '200px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <div className="mt-5" style={{ position: 'relative', top: '70px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '-100px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Fórmula exclusiva Pro-Argin<span>&trade;</span></p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Su fórmula sella los túbulos</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">&nbsp;&nbsp;</strong>expuestos para el alivio</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">&nbsp;&nbsp;</strong>instantáneo y duradero de la</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">&nbsp;&nbsp;</strong>sensibilidad</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Con el uso regular, el zinc ayuda a fortalecer la encía para</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">&nbsp;&nbsp;</strong>reducir la recesión que exponen los túbulos de los dientes</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">&nbsp;&nbsp;</strong>que generan la sensibilidad.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Clínicamente comprobado</p>
                </div>
                <div className="mt-5" style={{ position: 'relative', top: '70px', right: '35px' }}>
                  <p className="small text-muted .text-inferior" style={{ position: 'relative', top: '0px', left: '-100px', }}><strong className="text-danger mr-2">*</strong>Con aplicación directa, masajeando cada diente sensible durante 1 minuto.</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadproaliviooriginal" screenPrev="sensibilidadrealwhite" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}