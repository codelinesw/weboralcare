import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/CuidadoFamiliar/XtraFrescura/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/CuidadoFamiliar/XtraFrescura/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoFamiliarXtraFrescura extends React.Component {


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
                <img src={img} alt="error" style={{ position: 'relative', width: '970px', top:'150px', right:'200px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{position:'relative', top:'80px'}}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px',marginTop:'-65px' }}>Nuevo Triple acción* Xtra</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>frescura con micro cristales</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px',marginBottom:'85px' }}>para una sensación refrescante.</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '-100px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Explosión de frescura</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Sensación refrescante</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Sabor intenso</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliartripleaccion" screenPrev="cuidadofamiliarxtrablancura" currentScreen="CuidadoFamiliar" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}