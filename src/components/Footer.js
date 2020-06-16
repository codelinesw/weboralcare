import React from 'react';
import imgnext from '../images/next-button.png';
import imgprev from '../images/prev-button.png';
import imgBotonIndex from '../images/Preguntas/Boton-inicio.png';
import imgBotonNext from '../images/Preguntas/boton-continuar.png';
import imgBoton from '../images/Boton.png';
import Submenu from './Submenu';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  changeScreen(screen, data) {
    screen = `/${screen}/`;
    console.log(screen);
    this.props.history.push({
      pathname: screen,
      state: data
    });
  }

  render() {
    const { screenNext, screenPrev, top, currentScreen, showsubmenu, otherOption, countResponses, showIndex, classForStyle, showButton } = this.props;
    let style = (otherOption == true) ? 'justify-content-center' : 'justify-content-between';
    return (
      <footer className={"row d-flex " + style + ' ' + classForStyle} style={{ position: 'relative', top: (top == undefined ? '-15px' : top) }}>
        {!otherOption && <button type="button" className="bg-transparent border-0 btn-prev-top" onClick={() => this.changeScreen(screenPrev)}>
          <img src={imgprev} width="95" height="87" alt="Error" />
        </button>
        }
        {otherOption && <button type="button" className="bg-transparent border-0" onClick={() => this.changeScreen(screenNext, countResponses)}>
          <img src={showIndex ? imgBotonIndex : imgBotonNext} width="85" height="85" alt="Error" />
        </button>}
        {showButton && <img src={imgBoton} alt="atrás" width="800" height="110" style={{ position: 'relative', top: '-20px' }} />}
        {showsubmenu && <Submenu currentScreen={currentScreen} />}
        {!otherOption && <button type="button" className="bg-transparent border-0 btn-next-top" onClick={() => this.changeScreen(screenNext)}>
          <img src={imgnext} width="95" height="87" alt="siguiente" />
        </button>}
      </footer>
    );
  }
}