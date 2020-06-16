import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/SaludNatural/Bamboo/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/SaludNatural/Bamboo/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludNaturalBamboo extends React.Component {


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
              <img src={titulo} alt="error" width="700" className="lx30" style={{ position: 'relative' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" style={{ position: 'relative', top: '-295px', height: '770px', right: '-50px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', left: '200px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', left: '200px', }}><strong className="text-danger mr-2">+</strong>Mango elaborado con bambú 100% natural - 100% Biodegradable</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '200px', }}><strong className="text-danger mr-2">+</strong>El bambú que usamos es elaborado de forma responsable, usando métodos de cultivos sostenibles</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '200px', }}><strong className="text-danger mr-2">+</strong>Empaque de cartón reciclable</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '200px', }}><strong className="text-danger mr-2">+</strong>Mango cubierto con ingredientes naturales para prevenir humedad</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '200px', }}><strong className="text-danger mr-2">+</strong>Las cerdas son suaves, con infusión de carbón y sales de bambú* para una limpieza efectiva</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="saludnatural" screenPrev="saludnaturalpurificante" currentScreen="SaludNatural" showsubmenu={true} history={this.props.history} top="70px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}