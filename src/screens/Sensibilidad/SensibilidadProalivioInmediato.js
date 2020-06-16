import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Sensibilidad/ProAlivioInmediato/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Sensibilidad/ProAlivioInmediato/Imagen.png';
import Footer from '../../components/Footer'


export default class SensibilidadProalivioInmediato extends React.Component {


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
                <img src={img} alt="error" style={{ position: 'relative', width: '970px', top:'200px', right:'50px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{ position: 'relative',top:'210px'}}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>Fórmula clínicamente comprobada y desarrollada con el poder de</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}><strong className="text-danger mr-2">la tecnología de arginina</strong> para una acción inmediata y eficaz</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>contra las molestias causadas por la sensibilidad en los dientes.</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>Con el uso regular, se crea una barrera de larga duración que actúa como</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>un escudo protector contra la sensibilidad dental</p>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadcepillos" screenPrev="sensibilidadblanqueamiento" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}