import React from 'react';
import background_ from '../../images/Productos/Blanqueamiento/CarbonActivo/Fondo.jpg';
import titulo from '../../images/Productos/Blanqueamiento/CarbonActivo/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Blanqueamiento/CarbonActivo/Imagen.png';
import Footer from '../../components/Footer'


export default class CarbonActivado extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -150px";
  
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="productCarbon" style={{ position: 'relative', top: '-0px' }} />
              </div>
              <div className="column pl-5 pt-4">
                <p className="small text-muted text-normal textmove">Sonrisa más blanca en una semana.</p>
                <p className="small text-muted text-normal textmove">Colgate Luminous White quiere dar al mundo sonrisas brillantes y</p>
                <p className="small text-muted text-normal textmove">hermosas que destaquen y celebren la belleza única, esa belleza</p>
                <p className="small text-muted text-normal textmove">que refleja la confianza, la personalidad y la actitud.</p>
                <p className="small text-muted text-normal textmove">Muestra la belleza de tu deslumbrante sonrisa con la tecnología</p>
                <p className="small text-muted text-normal textmove">de Luminous White + Carbón Activado</p>
                <h6 className="text-danger title-red textmove" style={{ marginTop: '75px' }}>BENEFICIOS:</h6>
                <p className="small text-muted text-normal textmove"><b className="text-danger">+</b>Blanquea tus dientes</p>
                <p className="small text-muted text-normal textmove"><b className="text-danger">+</b>Remoción de manchas</p>
                <p className="small mt-5 text-muted text-normal textmove" style={{ position: 'relative', top: '60px', fontSize: '17px' }}>Poderosa tecnología para la remoción de manchas y una sonrisa blanca</p>
              </div>
            </div>
          </div>
          <Footer screenNext="maxwhite" screenPrev="luminouswhiteinstant" currentScreen="Blanqueamiento" showsubmenu={true} history={this.props.history} top="236px" />
        </div>
      </div>
    );
  }
}