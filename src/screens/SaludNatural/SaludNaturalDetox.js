import React from 'react';
import background_ from '../../images/Productos/SaludNatural/CocoJengibre/Fondo.jpg';
import titulo from '../../images/Productos/SaludNatural/CocoJengibre/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/SaludNatural/CocoJengibre/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludNaturalDetox extends React.Component {


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
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="detox" width="700" style={{ position: 'relative' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="image-left expand lessexpand" style={{ position: 'relative', height: '670px', top: '-80px' }} />
              </div>
              <div className="column pt-4 mt-0"  style={{ position: 'relative',top:'-60px' }}>
                <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', left: '-20px', }}>Protege tu sonrisa & llénala de vida.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>Colgate Natural Extracts contiene aceite de jengibre y extracto</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>de coco. Su combinación única de ingredientes naturales y lo</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>mejor de la ciencia de Colgate te ayudan a remover bacterias</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>que pueden causar mal aliento, caries o problemas de encías</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>con el cepillado regular. Déjate sorprender por el sabor del</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>jengibre que proporciona un sabor refrescante, mientras que el</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-110px' }}>aceite de coco envuelve en tu boca una sensación suave y dulce.</p>
                <div className="" style={{ position: 'relative', top: '10px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', left: '-80px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>Explosión de sabores para el cuidado de tu sonrisa</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>Contiene extractos naturales de aceite de coco</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> y jengibre que ayudan a eliminar bacterias que</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>causan el mal aliento, la caries y problemas de encías.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>Ayuda a fortalecer los dientes y proporciona una</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>sensación natural refrescante</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>El sabor del jengibre proporciona una sensación refrescante</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-80px', }}><strong className="text-danger mr-2">+</strong>El aceite de coco proporciona una sensación suave y dulce</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="saludnaturalpurificante" screenPrev="saludnaturaldefensareforzada" currentScreen="SaludNatural" showsubmenu={true} history={this.props.history} top="70px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}