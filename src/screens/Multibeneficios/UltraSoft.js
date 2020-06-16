import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/UltraSoft/Fondo.jpg';
import titulo from '../../images/Productos/Multibeneficios/UltraSoft/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/UltraSoft/Imagen.png';
import Footer from '../../components/Footer'


export default class UltraSoft extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundPosition = "0px -197px";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="" style={{ position: 'relative', width:'500px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" className="productFiveN rx50" style={{ position: 'relative' }} />
              </div>
              <div className="column pt-4 mt-0">
                <p className="small text-danger text-normal top-30 font-weight-bold font-italic" style={{ position: 'relative', left: '150px' }}>BENEFICIOS:</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', left: '175px', }}><strong className="text-danger mr-2">+</strong>Ultra suave.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '175px', }}><strong className="text-danger mr-2">+</strong>0,1 mm ultra suaves filamentos en alta densidad para una gentil y eficaz limpieza</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '175px', }}><strong className="text-danger mr-2">+</strong>Gentil en las encías</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '175px', }}><strong className="text-danger mr-2">+</strong>Remueve la placa</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '175px', }}><strong className="text-danger mr-2">+</strong>Remueve las manchas superficiales</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '175px', }}><strong className="text-danger mr-2">+</strong>Ayuda a proteger de las caries</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="multibeneficios" screenPrev="advancedtotal" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}