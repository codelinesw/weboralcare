import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Cuidadodelosmaspeques/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Cuidadodelosmaspeques/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoDeLosMasPequesMain extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -20px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '200px', top:'50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="Minions" style={{ position: 'relative', top: '-70px', width: '700px', left: '-270px' }} />
              </div>
              <div className="column" style={{position:'relative',marginLeft:'-250px', top:'50px'}}>
                <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px' }}>Combate las caries y protege el esmalte con</p>
                <p className="text-danger title-red" style={{ position: 'relative', marginTop: '-20px' }}>los productos infantiles Colgate Minion<span style={{color:"#545454"}}>&trade;</span> !</p>
                <h6 className="text-danger title-red" style={{position:"relative", left:'50px'}}>BENEFICIOS:</h6>
                <p className="small text-muted text-normal" style={{position:"relative", left:'50px'}}><b className="text-danger">+</b> Cepillos con cerdas multi-nivel para limpiar dientes chicos y grandes</p>
                <p className="small text-muted text-normal" style={{position:"relative", left:'50px'}}><b className="text-danger">+</b> Gel dental clínicamente probado para dar protección contra las caries.</p>
                <p className="small text-muted text-normal" style={{position:"relative", left:'50px'}}><b className="text-danger">&nbsp;&nbsp;&nbsp;</b> Fortalece y protege los dientes en desarrollo.</p>
                <p className="small text-muted text-normal" style={{position:"relative", left:'50px'}}><b className="text-danger">+</b> Enjuague bucal que limpia toda la boca, eliminando las partículas</p>
                <p className="small text-muted text-normal" style={{position:"relative", left:'50px'}}><b className="text-danger">&nbsp;&nbsp;&nbsp;</b> que pudieron haber quedado después del cepillado.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadodelosmaspequesmenu" screenPrev="cuidadodelosmaspeques" top="-15px" showButton={true} history={this.props.history} />
        </div>
      </div>
    );
  }
}