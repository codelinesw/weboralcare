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
import Titulo from '../images/Preguntas/Titulo.png';
import shadow from '../images/Preguntas/reactangulo-preguntas.png';
import shadowAnswer from '../images/Preguntas/rectangulo-respuesta.png';
import option from '../images/Preguntas/option.png';
import optionCorrecto from '../images/Preguntas/option-correcto.png';
import optionIncorrecto from '../images/Preguntas/option-incorrecto.png';
import respuestaCorrecta from '../images/Preguntas/respuesta-correcta.png';
import Footer from '../components/Footer';

export default class QuestionOne extends React.Component{


	constructor(props) {
	  super(props);
	
	  this.state = {
	  	chooseResponseOne:false,
      chooseResponseTwo:false,
      chooseResponseThree:false,
      Answers:[
        {
          "FirstResponses":[
            {

              "answer":"Una vez",
              "valid":false
            },
            {
              "answer":"Dos veces",
              "valid":false
            },
            {
              "answer": "Al menos, tres veces",
              "valid":true
            }
          ]
        },
        {
          "SecondResponses":[
            {

              "answer":"30 Segundos",
              "valid":false
            },
            {
              "answer":"1 Minuto",
              "valid":false
            },
            {
              "answer": "2 Minutos",
              "valid":true
            }
          ]
        },
        {
          "ThirdResponses":[
            {

              "answer":"Entre el quinto y sexto mes",
              "valid":true
            },
            {
              "answer":"A los dos años",
              "valid":false
            },
            {
              "answer": "A los cinco años",
              "valid":false
            }
          ]
        }
      ],
      AnswersFirstQuestion:false,
      IndexChooseAnswer:0,
      AnswersSecondQuestion:false,
      IndexChooseAnswerTwo:0,
      AnswersThirdQuestion:false,
      IndexChooseAnswerThird:0
	  };

	  this.countAnswers = 0;
	}

	componentDidMount(){
    	document.body.style.backgroundImage = `url(${background_})`;
    	document.body.style.backgroundSize = "cover";
    	document.body.style.backgroundColor = "white";
  	}

  chooseAnswer(index,valid){
    this.setState({AnswersFirstQuestion:true,IndexChooseAnswer:index});
    if(valid){
      this.countAnswers = this.countAnswers+1;
    }
  }

  chooseAnswerTwo(index,valid){
    this.setState({AnswersSecondQuestion:true,IndexChooseAnswerTwo:index});
    if(valid){
      this.countAnswers = this.countAnswers+1;
    }
  }

  chooseAnswerThird(index,valid){
    this.setState({AnswersThirdQuestion:true,IndexChooseAnswerThird:index});
    if(valid){
      this.countAnswers = this.countAnswers+1;
    }
  }


	render() {
		return (
			<div className="container-fluid">
		        <header className="main-navigation border-bottom bg-transparent border-0">
		          <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent border-0">
		              <Link to="Main" className="navbar-brand font-pacifico">
		                <img src={LogoColgate} width="100" height="80" style={{position:'relative',top:'-15px'}}/>
		              </Link>
		          </nav>   
		        </header>
		        <div className="row w-100 m-auto">
		        	<div className="card m-auto border-0 bg-transparent container-questions">
		        		<div className="card-header bg-transparent border-0 d-flex justify-content-center">
		        			<img src={Titulo} width="724" height="50" style={{position:'relative',top:'-55px'}}/>
		        		</div>
		        		<div className="card-body border-0 container-questions" style={{position:'relative',top:'-40px'}}>
		        			<div className="row d-flex justify-content-center all-questions">
		        				<div className="column column-question">
		        					<div className="p-3 text-center m-auto shadow bg-white rounded_10 box-question" style={{left:'-80px'}}>
		        						<p className="text-question">¿<b className="font-italic">Cuántas veces al día</b></p>
		        						<p className="text-question"><b>hay que cepillarse los dientes?</b></p>
		        					</div>
		        					<div className="container-answers mt-5">
		        						{this.state.Answers[0].FirstResponses.map((item,index) => {
						                let stylevalid = !this.state.AnswersFirstQuestion ? null : this.state.IndexChooseAnswer == index ? (item.valid ? null : null) : (item.valid ? {color:'white'} : null);
						                let bground = !this.state.AnswersFirstQuestion ? '' : this.state.IndexChooseAnswer == index ? (item.valid ? `url(${shadowAnswer})` : `url(${shadowAnswer})`) : (item.valid ? `url(${respuestaCorrecta})`: '');
						                let top_ = !this.state.AnswersFirstQuestion ? '-3px' : this.state.IndexChooseAnswer == index ? (item.valid ? '-3px' : '-3px') : (item.valid ? '-3px' : '-3px'); 
						                return(
						                  <button type="button" className="border-0 mb-1 d-flex button-answer" key={index+1} style={{backgroundImage:bground,backgroundSize:'contain',}} onClick={() => this.chooseAnswer(index,item.valid)}>
						                  	<img src={!this.state.AnswersFirstQuestion ? option : this.state.IndexChooseAnswer == index ? (item.valid ? optionCorrecto : optionIncorrecto) : (item.valid ? option : option) } style={{position:'relative',top:top_,width:35,height:35}}/>
						                  	<p className="font-answer" style={{position:'relative',top:'-1px'}}>{item.answer}</p>
						                  	
						                  </button>
						                  )
						              })}
		        					</div>
					        	</div>
					        	<div className="column column-question">
					        		<div className="p-3 text-center m-auto shadow bg-white rounded_10 box-question">
		        						<p className="text-question"><b>¿Cuál es el tiempo indicado para un</b></p>
		        						<p className="text-question"><b className="font-italic">cepillado efectivo?</b></p>
		        					</div>
		        					<div className="container-answers mt-5">
		        						{this.state.Answers[1].SecondResponses.map((item,index) => {
						                let stylevalid = !this.state.AnswersSecondQuestion ? null : this.state.IndexChooseAnswerTwo == index ? (item.valid ? null : null) : (item.valid ? {color:'white'} : null);
						                let bground = !this.state.AnswersSecondQuestion ? '' : this.state.IndexChooseAnswerTwo == index ? (item.valid ? `url(${shadowAnswer})` : `url(${shadowAnswer})`) : (item.valid ? `url(${respuestaCorrecta})`: '');
						                let top_ = !this.state.AnswersFirstQuestion ? '-5px' : this.state.IndexChooseAnswer == index ? (item.valid ? '-5px' : '-5px') : (item.valid ? '-5px' : '-5px'); 
						                return(
						                  <button type="button" className="border-0 mb-1 d-flex button-answer button-estandar" key={index+1} style={{position:'relative',width:'270px',height:'55px',backgroundColor:'transparent',backgroundImage:bground,backgroundSize:'contain',backgroundRepeat  : 'no-repeat',textAlign:'left',padding:'10px',paddingLeft:'20px'}} onClick={() => this.chooseAnswerTwo(index,item.valid)}>
						                  	<img src={!this.state.AnswersSecondQuestion ? option : this.state.IndexChooseAnswerTwo == index ? (item.valid ? optionCorrecto : optionIncorrecto) : (item.valid ? option : option) } style={{position:'relative',top:top_,width:35,height:35}}/>
						                  	<p className="font-answer" style={{position:'relative',top:'-3px'}}>{item.answer}</p>
						                  	
						                  </button>
						                  )
						              })}
		        					</div>
					        	</div>
					        	<div className="column column-question">
					        		<div className="p-3 text-center m-auto shadow bg-white rounded_10 box-question extend-question" style={{position:'relative',left:'80px'}}>
		        						<p className="text-question"><b>¿Cuándo se debería hacer</b></p>
		        						<p className="text-question"><b className="font-italic">la primera visita</b></p>
		        						<p className="text-question"><b>al odontólogo?</b></p>
		        					</div>
		        					<div className="container-answers mt-5">
		        						{this.state.Answers[2].ThirdResponses.map((item,index) => {
						                let stylevalid = !this.state.AnswersThirdQuestion ? null : this.state.IndexChooseAnswerThird == index ? (item.valid ? null : null) : (item.valid ? {color:'white'} : null);
						                let bground = !this.state.AnswersThirdQuestion ? '' : this.state.IndexChooseAnswerThird == index ? (item.valid ? `url(${shadowAnswer})` : `url(${shadowAnswer})`) : (item.valid ? `url(${respuestaCorrecta})`: '');
						                let top_ = !this.state.AnswersFirstQuestion ? '-3px' : this.state.IndexChooseAnswer == index ? (item.valid ? '-3px' : '-3px') : (item.valid ? '-3px' : '-4px');  
						                return(
						                  <button type="button" className="border-0 mb-1 d-flex button-answer button-extend" key={index+1} style={{backgroundImage:bground,backgroundSize:'contain'}} onClick={() => this.chooseAnswerThird(index,item.valid)}>
						                  	<img src={!this.state.AnswersThirdQuestion ? option : this.state.IndexChooseAnswerThird == index ? (item.valid ? optionCorrecto : optionIncorrecto) : (item.valid ? option : option) } style={{position:'relative',top:top_,width:35,height:35}}/>
						                  	<p className="font-answer" style={{position:'relative',top:'-1px'}}>{item.answer}</p>
						                  	
						                  </button>
						                  )
						              })}
		        					</div>
					        	</div>
		        			</div>
		        		</div>
		        	</div>
		        </div>
		        <Footer otherOption={true} screenNext="QuestionTwo" history={this.props.history} showIndex={false} countResponses={{countAnswers:this.countAnswers}}/>
      		</div>
		);
	}


}