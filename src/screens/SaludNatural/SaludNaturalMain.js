import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/SaludNatural/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/SaludNatural/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludNaturalMain extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -25px";
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
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-10px' }}>Te sorprenderá con las propiedades de sus ingredientes</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-10px' }}>de origen natural. Te da una explosión de sabor para el cuidado</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-10px' }}>de tu sonrisa en tres presentaciones: “Cítricos y Eucalipto”</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-10px' }}>“Coco y Jengibre” y “Carbón Activado y Menta”.</p>
                <h6 className="text-danger title-red">AYUDA A:</h6>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Remover las bacterias que pueden causar mal aliento,</p>
                <p className="small text-muted text-normal ml-3">caries o problemas de encías con el cepillado regular.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="saludnaturalmenu" screenPrev="saludnatural" top="50px" showButton={true} history={this.props.history} />
        </div>
      </div>
    );
  }
}