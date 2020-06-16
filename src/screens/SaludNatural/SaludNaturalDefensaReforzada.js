import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/SaludNatural/DefensaReforzada/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/SaludNatural/DefensaReforzada/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludNaturalDefensaReforzada extends React.Component {


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
              <img src={titulo} alt="error" width="700" style={{ position: 'relative' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="image-left expand lessexpand" style={{ position: 'relative', height: '670px', top:'-80px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>Colgate Natural Extracts contiene extractos de limón, lima, naranja</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>y eucalipto  con un toque de menta verde. Su combinación única</p>
                <p className="small text-muted text-normal top-25" style={{ position: 'relative', left: '-130px' }}>de ingredientes naturales y lo mejor de la ciencia de Colgate te ayudan</p>
                <p className="small text-muted text-normal top-25" style={{ position: 'relative', left: '-130px' }}>a fortalecer tus dientes y te brinda una sensación natural de frescura.</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '-100px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Explosión de sabores para el cuidado de tu sonrisa</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Contiene extractos de limón, lima, naranja y eucalipto</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>con un toque de hierbabuena que ayudan a fortalecer</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>los dientes y refrescar tu boca</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><strong className="text-danger mr-2">+</strong>Ayuda a fortalecer los dientes y proporciona una</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>sensación natural refrescante</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="saludnaturaldetox" screenPrev="saludnaturalmenu" currentScreen="SaludNatural" showsubmenu={true} history={this.props.history} top="70px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}