import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Blanqueamiento/EnjuagueLuminuosWhite/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Blanqueamiento/EnjuagueLuminuosWhite/Imagen.png';
import Footer from '../../components/Footer'


export default class EnjuagueLuminousWhite extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -95px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '130px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="image-left productEnjuague" />
              </div>
              <div className="column pl-5 pt-4">
                <p className="small text-muted text-normal textmove" style={{ position: 'relative', right: '60px', marginTop: '25px' }}>Ayuda a mantener el blanco natural de</p>
                <p className="small text-muted text-normal textmove" style={{ position: 'relative', right: '60px' }}>los dientes y refresca el aliento.</p>
                <h6 className="text-danger title-red" style={{ position: 'relative', right: '60px' }}>BENEFICIOS:</h6>
                <p className="small text-muted text-normal" style={{ position: 'relative', right: '60px' }}><b className="text-danger">+</b>Asegura una sonrisa brillante y una boca</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', right: '60px' }}>siempre fresca.</p>
                <p className="small mt-5 text-muted text-normal textmove" style={{ position: 'relative', top: '60px', right: '60px', fontSize: '17px' }}>-Para obtener los mejores resultados, utilice la línea completa</p>
                <p className="small mt-5 text-muted text-normal textmove" style={{ position: 'relative', top: '18px', right: '60px', fontSize: '17px' }}>de Colgate Luminous White.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="luminouswhite" screenPrev="luminouswhite360" currentScreen="Blanqueamiento" top="72px" showsubmenu={true} history={this.props.history} />
        </div>
      </div>
    );
  }
}