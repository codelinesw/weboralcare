import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Cuidadodelosmaspeques/Enjuague/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Cuidadodelosmaspeques/Enjuague/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoDeLosMasPequesEnjuague extends React.Component {


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
              <img src={titulo} alt="error" width="600" className="lx30" style={{ position: 'relative', left: '100px', top:'50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" style={{ position: 'relative', top: '-225px', height: '750px', left: '-70px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>Enjuague bucal con flúor que ayuda a fortalecer</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>el esmalte y brinda protección anticaries para los niños.</p>

                <div className="mt-5" style={{ position: 'relative', top: '80px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', left: '30px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', left: '30px', }}><strong className="text-danger mr-2">+</strong>Ahora presentando por los personajes favoritos de tus hijos, los minions!</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '30px', }}><strong className="text-danger mr-2">+</strong>Limpia toda la boca, eliminando las partículas que pudieron haber quedado</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '30px', }}><strong className="text-danger mr-2">&nbsp;&nbsp;&nbsp;</strong>después del cepillado</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '30px', }}><strong className="text-danger mr-2">+</strong>Fun Bello<span>&trade;</span> Bubble Fruit<sup>&reg;</sup>, con sabor a chicle de frutas que los niños</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '30px', }}><strong className="text-danger mr-2">&nbsp;&nbsp;&nbsp;</strong>disfrutarán</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '30px', }}><strong className="text-danger mr-2">+</strong>Recomendado para niños mayores a 6 años</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadodelosmaspeques" screenPrev="cuidadodelosmaspequescepillos" currentScreen="Cuidadochicos" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}