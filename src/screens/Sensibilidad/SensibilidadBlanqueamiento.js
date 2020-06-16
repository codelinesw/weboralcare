import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/EnciasSaludables/Fondo.jpg';
import titulo from '../../images/Productos/Sensibilidad/Blanqueamiento/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Sensibilidad/Blanqueamiento/Imagen.png';
import Footer from '../../components/Footer'


export default class SensibilidadBlanqueamiento extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px 20px";

  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="700" style={{ position: 'relative', top:'50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" style={{ position: 'relative', width: '970px', top:'175px', right:'50px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{position:'relative', top:'70px'}}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px',marginTop:'-80px' }}>Su fórmula ayuda a aliviar la sensibilidad del diente y</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>crea un escudo protector, ayudando a proporcionar</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>rápido alivio contra la sensibilidad dental y un sistema</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>blanqueador que ayuda a combatir la formación del</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>sarro y remover suavemente las manchas dejando sus</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px' }}>dientes más blancos. Proporciona también la protección</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '0px',marginBottom:'80px' }}>contra la caries, placa y un delicioso sabor refrescante.</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '30px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '30px', }}><strong className="text-danger mr-2">+</strong>Sabor refrescante</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '30px', }}><strong className="text-danger mr-2">+</strong>Ayuda a remover manchas</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '30px', }}><strong className="text-danger mr-2">+</strong>Protección comprobada</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadproalivioinmediato" screenPrev="sensibilidadproaliviooriginal" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}