import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/CuidadoFamiliar/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/CuidadoFamiliar/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoFamiliarMain extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -10px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '50px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="Triple Acción" style={{ position: 'relative', left: '250px', width:'600px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="Cuidado Familiar" style={{position:"relative", width:'700px', left:'-170px',top:'-200px'}} />
              </div>
              <div className="column pl-5 pt-4">
                <h6 className="text-danger title-red">BENEFICIOS:</h6>
                <p className="small text-muted text-normal"><span>&nbsp;</span><b className="text-danger"></b></p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Extra Blancura</p>
                <p className="small text-muted text-normal"><span>&nbsp;</span><b className="text-danger"></b></p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Protección Anticaries</p>
                <p className="small text-muted text-normal"><span>&nbsp;</span><b className="text-danger"></b></p>
                <p className="small text-muted text-normal"><b className="text-danger">+</b> Aliento fresco</p>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliarmenu" screenPrev="cuidadofamiliar" top="-124px" showButton={true} history={this.props.history} />
        </div>
      </div>
    );
  }
}