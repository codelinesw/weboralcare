import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/Fondo.png';
import titulo from '../../images/Productos/Multibeneficios/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/Imagen-01.png';
import Footer from '../../components/Footer'


export default class MultiBeneficiosMain extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -30px";
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
                <img src={img} alt="error" className="image-left" />
              </div>
              <div className="column pl-5 pt-4">
                <h6 className="text-danger title-red">AYUDA A:</h6>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Prevenir las caries</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Proteger las encías</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Prevenir la formación de sarro</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Prevenir la formación de placa</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Combatir las bacterias</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Combatir el mal aliento</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Remover las mancha de los dientes</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Fortalecer el esmalte dental</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Prevenir las caries en raíces expuestas</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Prevenir la pérdida mineral de los dientes</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Prevenir problemas de encías causados por bacterias</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Limpia aún entre dientes</p>
              </div>
            </div>
          </div>
          <Footer screenNext="multibeneficiosmenu" screenPrev="multibeneficios" top="58px" showButton={true} history={this.props.history} />
        </div>
      </div>
    );
  }
}