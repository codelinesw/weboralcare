import React from 'react';
import background_ from '../../images/Productos/Multibeneficios/Menu/Fondo.png';
import titulo from '../../images/Productos/Cuidadodelosmaspeques/Enjuague/Titulo.png';
import Header from '../../components/Header';
import video from '../../images/MundodeNinios/video/video.mp4';


export default class MundodeNinios extends React.Component {


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
              
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <video src={video} width="730" height="550" controls autoPlay></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}