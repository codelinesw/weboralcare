import React from 'react';
import { Link } from 'react-router-dom';
import LogoColgate from '../images/Logo-colgate.png';
import BotonMenu from '../images/BotonMenu.png'

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { showBotonMenu } = this.props;
    return (
      <header className="main-navigation border-bottom bg-transparent border-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent border-0">
          <Link to="/" className="navbar-brand font-pacifico">
            <img src={LogoColgate} width="200" style={{ position: 'absolute', top: '0px', left: '100px' }} />
          </Link>
        </nav>
        {showBotonMenu && <Link to="/threescreen" className="navbar-brand font-pacifico" style={{ position: 'absolute', top: '20px', right: '20px', zIndex: '200' }}>
          <img src={BotonMenu} width="190" style={{ position: 'relative', top: '-15px' }} />
        </Link>}
      </header>
    );
  }
}