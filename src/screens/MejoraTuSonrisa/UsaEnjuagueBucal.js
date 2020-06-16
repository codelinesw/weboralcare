import React from 'react';
import background_ from '../../images/Fondo-white.png';
import titulo from '../../images/MejoraTuSonrisa/UsaEnjuagueBucal/Titulo-02.png';
import subtitulo from '../../images/MejoraTuSonrisa/UsaEnjuagueBucal/barra-arriba.png';
import Header from '../../components/Header';
import img from '../../images/MejoraTuSonrisa/UsaEnjuagueBucal/Plax-luminous-white.png';
import imgTwo from '../../images/MejoraTuSonrisa/UsaEnjuagueBucal/Plax-sensitive-pro-alivio.png';
import imgThree from '../../images/MejoraTuSonrisa/UsaEnjuagueBucal/Plax-soft-mint.png';
import Footer from '../../components/Footer'
import video from '../../images/MejoraTuSonrisa/video/Coaching.mp4';

export default class UsaEnjuagueBucal extends React.Component {


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
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px', height:'80px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{marginTop:'90px'}}>
              <div className="column pr-4" style={{position:'relative',right:'130px'}}>
                <img src={subtitulo} alt="error" style={{ position: 'relative', top: '10px', width:'550px',right:'50px',height:'60px' }} />
               <div style={{display:'flex'}}>
                    <img src={imgThree} alt="error" style={{ position: 'relative', top: '70px', width:'200px',right:'80px',height:'350px' }} />
                    <img src={img} alt="error" style={{ position: 'relative', top: '150px', width:'200px',right:'80px',height:'350px' }} />
                    <img src={imgTwo} alt="error" style={{ position: 'relative', top: '70px', width:'200px',right:'80px',height:'350px' }} />
               </div>
              </div>
              <div className="column pl-5 pt-4">
                <p className="small text-muted text-normal " style={{position:'relative',marginTop:'140px',right:'-25px',fontSize:'25px'}}><b className="text-danger">*</b> Enjuaga tus dientes durante 1 minuto</p>
                <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>con tu enjuague de elección para</p>
                <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>completar tu higiene bucal.</p>
                <p className="small text-muted text-normal " style={{position:'relative',marginTop:'80px',right:'-25px',fontSize:'25px'}}><b className="text-danger">*</b> Usando tu enjuague bucal preferido</p>
                <p className="small text-muted text-normal " style={{position:'relative',right:'-25px',fontSize:'25px'}}>durante un minuto luego del cepillado</p>
                <p className="small text-muted text-normal" style={{position:'relative',right:'-25px',fontSize:'25px'}}>lograras un complemento perfecto para</p>
                <p className="small text-muted text-normal" style={{position:'relative',right:'-25px',fontSize:'25px'}}>el cuidado de tu sonrisa.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="visitaldentista" screenPrev="cepillatusdientes" currentScreen="Blanqueamiento" history={this.props.history} top="336px" />
        </div>
      </div>
    );
  }
}