import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/AlientoSaludable/Fondo.jpg';
import titulo from '../../images/Productos/Multibeneficios/360-Avanced-Total-12/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/360-Avanced-Total-12/Imagen.png';
import Footer from '../../components/Footer'


export default class AdvancedTotal extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -120px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_cleanmint" style={{ position: 'relative', right:'-230px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" className="productFiveN" style={{ position: 'relative' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '80px',marginTop:'60px' }}>Limpieza saludable en toda tu boca</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '80px' }}>limpiador de lengua y mejillas con diseño innovador,</p>
                <p className="small text-muted text-normal top-25" style={{ position: 'relative', left: '80px' }}>remueve bacterias en cuatro áreas:</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', left: '145px', }}><strong className="text-danger mr-2">+</strong>Dientes.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '145px', }}><strong className="text-danger mr-2">+</strong>Lengua</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '145px', }}><strong className="text-danger mr-2">+</strong>Mejillas</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '145px', }}><strong className="text-danger mr-2">+</strong>Encías</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="ultrasoft" screenPrev="alientosaludable" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}