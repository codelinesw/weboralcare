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
export default class QuestionTwo extends React.Component{


	constructor(props) {
	  super(props);
	
	  this.state = {
	  	count_:this.props.location.state == undefined ? '0' : (this.props.location.state.countAnswers != undefined ? this.props.location.state.countAnswers : '0'),
	  	chooseResponseOne:false,
        chooseResponseTwo:false,
        chooseResponseThree:false,
        Answers:[
        {
          "FirstResponses":[
            {

              "answer":"Una vez al año",
              "valid":false
            },
            {
              "answer":"Cada seis meses",
              "valid":false
            },
            {
              "answer": "Cada dos o tres meses",
              "valid":true
            }
          ]
        },
        {
          "SecondResponses":[
            {

              "answer":"Cepilla, crema, enjuague e hilo dental",
              "valid":true
            },
            {
              "answer":"Cepillo y crema dental",
              "valid":false
            },
            {
              "answer": "Cepillo dental",
              "valid":false
            }
          ]
        },
        
      ],
      AnswersFirstQuestion:false,
      IndexChooseAnswer:0,
      AnswersSecondQuestion:false,
      IndexChooseAnswerTwo:0
	  };
	  this.countAnswers = 0;
	}

	componentDidMount(){
    	document.body.style.backgroundImage = `url(${background_})`;
    	document.body.style.backgroundSize = "cover";
    	document.body.style.backgroundColor = "white";
    	console.log(this.props.location);
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
		        					<div className="p-3 text-center m-auto shadow bg-white rounded_10 box-question extend-question_" style={{position:'relative',left:'-120px'}}>
		        						<p className="text-question lheight" style={{position:'relative',top:'-1px'}}><b>¿Cada cuánto hay que</b> <b className="font-italic"> cambiar</b></p>
		        						<p className="text-question lheight"><b className="font-italic">el cepillo de dientes</b><b>?</b></p>
		        					</div>
		        					<div className="container-answers mt-5">
		        						{this.state.Answers[0].FirstResponses.map((item,index) => {
						                let stylevalid = !this.state.AnswersFirstQuestion ? null : this.state.IndexChooseAnswer == index ? (item.valid ? null : null) : (item.valid ? {color:'white'} : null);
						                let bground = !this.state.AnswersFirstQuestion ? '' : this.state.IndexChooseAnswer == index ? (item.valid ? `url(${shadowAnswer})` : `url(${shadowAnswer})`) : (item.valid ? `url(${respuestaCorrecta})`: '');
						                let top_ = !this.state.AnswersFirstQuestion ? '-6px' : this.state.IndexChooseAnswer == index ? (item.valid ? '-4px' : '-4px') : (item.valid ? '-6px' : '-6px'); 
						                return(
						                  <button type="button" className="border-0 mb-1 d-flex button-estandar button_atwo" key={index+1} style={{backgroundColor:'transparent',backgroundImage:bground,backgroundSize:'contain',backgroundRepeat  : 'no-repeat',textAlign:'left',padding:'10px',paddingLeft:'20px'}} onClick={() => this.chooseAnswer(index,item.valid)}>
						                  	<img src={!this.state.AnswersFirstQuestion ? option : this.state.IndexChooseAnswer == index ? (item.valid ? optionCorrecto : optionIncorrecto) : (item.valid ? option : option) } style={{position:'relative',top:top_,width:35,height:35}}/>
						                  	<p className="font-answer" style={{position:'relative',top:'-1px'}}>{item.answer}</p>
						                  </button>
						                  )
						              })}
		        					</div>
					        	</div>
					        	<div className="column column-question">
					        		<div className="p-3 text-center m-auto shadow bg-white rounded_10 box-question extend-question_ w500" style={{position:'relative',left:'100px'}}>
		        						<p className="text-question lheight" style={{position:'relative',top:'-1px'}}><b>¿Qué elementos se necesitan</b></p>
		        						<p className="text-question lheight" style={{position:'relative'}}><b>para una </b><b className="font-italic">correcta higiene bucal</b><b>?</b></p>
		        					</div>
		        					<div className="container-answers mt-5">
		        						{this.state.Answers[1].SecondResponses.map((item,index) => {
						                let stylevalid = !this.state.AnswersSecondQuestion ? null : this.state.IndexChooseAnswerTwo == index ? (item.valid ? null : null) : (item.valid ? {color:'white'} : null);
						                let bground = !this.state.AnswersSecondQuestion ? '' : this.state.IndexChooseAnswerTwo == index ? (item.valid ? `url(${shadowAnswer})` : `url(${shadowAnswer})`) : (item.valid ? `url(${respuestaCorrecta})`: '');
						                let top_ = !this.state.AnswersFirstQuestion ? '3px' : this.state.IndexChooseAnswer == index ? (item.valid ? '3px' : '3px') : (item.valid ? '3px' : '3px'); 
						                return(
						                  <button type="button" className="border-0 mb-1 d-flex button-answer button-estandar button-atwosecond" key={index+1} style={{backgroundColor:'transparent',backgroundImage:bground,backgroundSize:'cover',backgroundRepeat  : 'no-repeat',textAlign:'left',padding:'5px',paddingLeft:'20px'}} onClick={() => this.chooseAnswerTwo(index,item.valid)}>
						                  	<img src={!this.state.AnswersSecondQuestion ? option : this.state.IndexChooseAnswerTwo == index ? (item.valid ? optionCorrecto : optionIncorrecto) : (item.valid ? option : option) } style={{position:'relative',top:top_,width:35,height:35,right:'10px'}}/>
						                  	<p className="font-answer" style={{position:'relative',top:'5px',right:'10px'}}>{item.answer}</p>
						                  </button>
						                  )
						              })}
		        					</div>
					        	</div>
		        			</div>
		        		</div>
		        	</div>
		        </div>
		        <Footer otherOption={true} screenNext="ResultQuestions" history={this.props.history} showIndex={false} countResponses={{countAnswers:(this.state.count_+this.countAnswers)}}/>
      		</div>
		);
	}


}