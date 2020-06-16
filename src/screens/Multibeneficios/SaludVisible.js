import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/TotalProfessional/Fondo.jpg';
import titulo from '../../images/Productos/Multibeneficios/TotalProfessional/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/TotalProfessional/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludVisible extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '70px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" style={{ position: 'relative', left: '30px', width:'800px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{position:'relative',top:'100px'}}>
              <div className="column mt-5">
                <img src={img} alt="error" className="productThree" style={{ position: 'relative', top: '0px' }} />
              </div>
              <div className="column pt-4 mt-5">
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '40px',marginTop:'2px' }}>Adicionada con tecnología que cambia de color</p>
                <p className="small text-muted mt-3 text-normal" style={{ position: 'relative', top: '40px' }}>ayudándote a reducir la formación de placa y bacterias</p>
                <p className="small text-muted mt-3 text-normal" style={{ position: 'relative', top: '40px' }}>para una salud bucal completa* que hasta un</p>
                <p className="small text-muted mt-3 text-normal" style={{ position: 'relative', top: '40px' }}>odontólogo podrá ver.</p>
                <p className="small mt-5 text-muted text-inferior" style={{ position: 'relative', top: '60px', right: '35px' }}><strong className="text-danger">*</strong> Reduce bacterias en dientes, lengua, mejillas y encias; ayuda a reducir</p>
                <p className="small mt-5 text-muted text-inferior" style={{ position: 'relative', top: '25px', right: '35px' }}>la placa que causa problemas en las encias, fortalece el esmalte y ayuda </p>
                <p className="small mt-5 text-muted text-inferior" style={{ position: 'relative', top: '-10px', right: '35px' }}>a aliviar la sensibilidad con el uso continuo.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="enciasaludables" screenPrev="totalcleanmint" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="35px" />
        </div>
      </div>
    );
  }
}