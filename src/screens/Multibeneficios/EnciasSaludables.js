import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Multibeneficios/EnciasSaludables/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/EnciasSaludables/Imagen.png';
import Footer from '../../components/Footer'


export default class EnciasSaludables extends React.Component {


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
              <img src={titulo} alt="error" width="500" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                 <img src={img} alt="error" style={{ position: 'relative', width:'900px', left: '-110px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative' }}>Además de brindar una salud bucal completa,</p>
                <p className="small text-muted text-normal top-25" style={{ position: 'relative' }}>ayuda a prevenir problemas de encías causa-</p>
                <p className="small text-muted text-normal top-20" style={{ position: 'relative' }}>dos por bacterías.</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <h6 className="text-danger text-normal font-weight-bold font-italic title_second_">BENEFICIOS:</h6>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', right: '-1px', }}><strong className="text-danger mr-2">+</strong>Reduce bacterias en los dientes, lengua, mejillas y encías.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', right: '-1px', }}><strong className="text-danger mr-2">+</strong>Ayuda a reducir la placa que causa problemas en las encías.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-10px', right: '-1px', }}><strong className="text-danger mr-2">+</strong>Fortalece el esmalte y ayuda a aliviar la sensibilidad</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-15px', right: '-20px', }}>con el uso continuo.</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="alientosaludable" screenPrev="saludvisible" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="105px" />
        </div>
      </div>
    );
  }
}