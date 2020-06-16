import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/CuidadoFamiliar/SoftMint/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/CuidadoFamiliar/SoftMint/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoFamiliarSoftMint extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -35px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="500" className="lx30" style={{ position: 'relative', top:'50px', left:'150px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" style={{ position: 'relative', top: '-255px', height: '770px', right: '50px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>Colgate Plax Soft Mint mata los gérmenes</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>que causan la gingivitis, la placa bacteriana</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>y el mal aliento hasta por 12 horas.</p>

                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', left: '35px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', left: '35px', }}><strong className="text-danger mr-2">+</strong>Ayuda a reducir hasta el 99% de los gérmenes</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '35px', }}><strong className="text-danger mr-2">+</strong>Aliento fresco</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliar" screenPrev="cuidadofamiliartripleaccion" currentScreen="CuidadoFamiliar" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}