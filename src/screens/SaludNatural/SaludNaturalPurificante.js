import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/SaludNatural/CarbonActivado&Menta/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/SaludNatural/CarbonActivado&Menta/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludNaturalPurificante extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -110px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="700" style={{ position: 'relative' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="image-left expand lessexpand" style={{ position: 'relative', height: '670px', top: '-80px' }} />
              </div>
              <div className="column pt-4 mt-0"  style={{ position: 'relative',top:'20px' }}>
                <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', marginBottom:'100px', left: '-20px', }}>Sorpréndete con su purificante y refrescante sensación.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>Los científicos de Colgate, después de años de investigación,</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>han combinado el carbón activado y la menta,</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>en una exclusiva fórmula con espuma activa que ayuda a eliminar las</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>impurezas<strong className="text-danger mr-2">*</strong> y proteger tus dientes.</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '0px' }}>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">*</strong>Con cepillado regular</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="saludnaturalbamboo" screenPrev="saludnaturaldetox" currentScreen="SaludNatural" showsubmenu={true} history={this.props.history} top="70px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}