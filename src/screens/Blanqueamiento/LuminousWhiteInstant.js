import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Blanqueamiento/DientesBlancos/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Blanqueamiento/DientesBlancos/Imagen.png';
import Footer from '../../components/Footer'


export default class LuminousWhiteInstant extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -130px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '-0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="image-left expand lessexpand" />
              </div>
              <div className="column pl-5 pt-4">
                <h6 className="text-danger title-red textmove">BENEFICIOS:</h6>
                <p className="small text-muted text-normal textmove"><b className="text-danger">+</b>Su innovadora tecnología ahora combina</p>
                <p className="small text-muted text-normal textmove">abrillantadores ópticos para blanquear los</p>
                <p className="small text-muted text-normal textmove">dientes instantáneamente*</p>
                <p className="small mt-5 text-muted text-normal textmove" style={{ position: 'relative', top: '60px' }}><small className="text-danger">*</small>Efecto blanqueador instantáneo es temporal</p>
              </div>
            </div>
          </div>
          <Footer screenNext="carbonactivado" screenPrev="luminouswhitenormal" currentScreen="Blanqueamiento" showsubmenu={true} history={this.props.history} top="210px" />
        </div>
      </div>
    );
  }
}