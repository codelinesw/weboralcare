import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Blanqueamiento/360Advanced/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Blanqueamiento/360Advanced/Imagen.png';
import Footer from '../../components/Footer'


export default class AdvancedLuminousWhite extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -135px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_advanced lx30" style={{ position: 'relative' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" className="productFive rx50_" style={{ position: 'relative' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-danger text-normal top-30 font-weight-bold font-italic" style={{ position: 'relative', right: '80px', marginTop: '55px' }}>BENEFICIOS:</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', right: '50px', }}><strong className="text-danger mr-2">+</strong>Copas removedoras de manchas..</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', right: '50px', }}><strong className="text-danger mr-2">+</strong>Cerdas pulidoras exclusivas.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', right: '50px', }}><strong className="text-danger mr-2">+</strong>Limpiador de lengua y mejillas único y punta</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', right: '50px', }}>limpiadora elevada.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', right: '50px', }}><strong className="text-danger mr-2">+</strong>Diseño avanzado y limpieza efectiva y cómoda.</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="luminouswhite360" screenPrev="maxwhite" currentScreen="Blanqueamiento" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}