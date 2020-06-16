import React from 'react';
import {
 HashRouter as Router,
 Switch,
 Route,
 Link,
 Redirect,
  useHistory,
  useLocation
} from  'react-router-dom';
import Hammer from 'hammerjs';
import LogoColgate from '../images/Logo-colgate.png';
import background_ from '../images/Fondo-white.png';
import Confeti from '../images/Preguntas/Confeti.png';
import Footer from '../components/Footer';
import handOne from '../images/Preguntas/Aplausos-1.png';
import handTwo from '../images/Preguntas/Aplausos-2.png';

export default class ResultQuestions extends React.Component{


	constructor(props) {
	  super(props);
	
	  this.state = {
	  	countAnswers:this.props.location.state == undefined ? '0' : (this.props.location.state.countAnswers != undefined ? this.props.location.state.countAnswers : '0'),
	  }
	}

	componentDidMount(){
    	document.body.style.backgroundImage = `url(${background_})`;
    	document.body.style.backgroundSize = "cover";
    	document.body.style.backgroundColor = "white";
    	console.log(this.state.countAnswers);
  	}

	render() {
		const { countAnswers } = this.state;
		let bground = countAnswers>=4 ? {backgroundImage:`url(${Confeti})`,backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'} : {backgroundImage:`url()`,backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',};
		return (
			<div className="container-fluid container-global w-100" style={bground}>
		        <header className="main-navigation border-bottom bg-transparent border-0">
		          <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent border-0">
		              <Link to="Main" className="navbar-brand font-pacifico">
		                <img src={LogoColgate} width="100" height="80" style={{position:'relative',top:'-15px'}}/>
		              </Link>
		          </nav>   
		        </header>
		        <div className="row w-100 m-auto d-flex justify-content-center container-result-quesiton">
		        	<div className="column w-100">
		        		{countAnswers <= 3 ? <h1 className={(countAnswers==3)?'title-points text-warning':'title-points'}>{`${countAnswers}`}/5 Correctas</h1> : <div className="column"><h1 className="title-points title-green">{`${countAnswers}`}/5</h1><h1 className="title-points title-letter-point title-green">Correctas</h1></div> }
		        		{countAnswers >= 3 && countAnswers <= 5 ? <h3 className={"second-title"}>{countAnswers == 3 ? '¡Muy bien!' : (countAnswers >3) ? '¡Felicitaciones!' : ''}</h3> : null }
		        		{countAnswers <= 2 ? <p className="description text__light">Sigamos aprendiendo juntos,</p> : (countAnswers == 3) ? <p className="description text__light">Sigamos aprendiendo juntos</p> : null}
		        		{countAnswers <= 2 ? <p className="description text__light">Visita nuestra sección de consejos</p> : (countAnswers > 3) ? <p className="description text__light">Eres un experto en cuidado oral</p> : null}
		        		{countAnswers >= 4 ? <p className="description description-upper">¡CONTAGIA TU SONRISA!</p> : null}
		        		{countAnswers == 3 ? <div className="w-100">
		        		<img src={handOne} className="imagen-hand hand-left"/>
		        		<img src={handTwo} className="imagen-hand hand-right"/></div> : null}
		        	</div>
		       </div>
		        <Footer otherOption={true} screenNext="ThreeScreen" history={this.props.history} showIndex={true} countResponses={{countAnswers:this.countAnswers}}/>
      		</div>
		);
	}


}