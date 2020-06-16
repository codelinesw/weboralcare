import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Sensibilidad/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Sensibilidad/Imagen.png';
import Footer from '../../components/Footer'


export default class SensibilidadMain extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -105px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '300px',top:'50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="Sensitive" style={{position:'relative',width:'700px', top:'-100px'}} />
              </div>
              <div className="column pl-5 pt-4" style={{ position: 'relative', left: '0px' }}>
                <h6 className="text-danger title-red">BENEFICIOS:</h6>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Exclusiva fórmula Pro-Argin</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Alivio Instantáneo (Con aplicación directa)</p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Alivio duradero (Con cepillado diario)</p>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadmenu" screenPrev="sensibilidad" top="-45px" showButton={true} history={this.props.history} />
        </div>
      </div>
    );
  }
}