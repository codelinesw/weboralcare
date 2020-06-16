import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/AlientoSaludable/Fondo.jpg';
import titulo from '../../images/Productos/Multibeneficios/AlientoSaludable/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/AlientoSaludable/Imagen.png';
import Footer from '../../components/Footer'


export default class AlientoSaludable extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block container-box" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_cleanmint" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5 mr-5">
                <img src={img} alt="error" className="productFour mr-5" style={{ position: 'relative', top: '-0px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="text-muted text-normal" style={{ position: 'relative', right: '35px', top: '10px',marginTop:'110px' }}>Adicionada con tecnología Neutro-Odor<small className="text-danger">*</small> que ayuda</p>
                <p className="text-muted text-normal" style={{ position: 'relative', right: '35px', top: '3px' }}> a neutralizar el mal aliento causado por bacterias,</p>
                <p className="text-muted text-normal" style={{ position: 'relative', right: '35px', top: '-2px' }}>para brindarte una salud bucal completa</p>
                <p className="small mt-5 text-muted text-normal" style={{ position: 'relative', top: '10px', right: '35px' }}><small className="text-danger">*</small>Tecnologia Eutro-Odor es parte del sabor.</p>
                <p className="small mt-2 text-muted text-normal" style={{ position: 'relative', top: '20px', right: '35px' }}><small className="text-danger">**</small>Reduce bacterias en dientes, lengua, mejilla y encías, ayuda a</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '12px', right: '35px' }}>reducir la placa que causa problemas en las encías, fortalece</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '6px', right: '35px' }}>  el esmalte y ayuda a aliviar la sensibilidad con el uso continuo.</p>
                <p className="small mt-1 text-muted text-normal" style={{ position: 'relative', top: '11px', right: '35px', width: '410px' }}><small className="text-danger">**</small>Vs Total Whitening.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="advancedtotal" screenPrev="enciasaludables" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="105px" />
        </div>
      </div>
    );
  }
}