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
import logo from '../images/Colgate-Logo.png'
import text from '../images/touch.png'
export default class Main extends React.Component{

  constructor(props){
    super(props);

    this.state = {
 
    }
  }

  componentDidMount(){
  	document.body.style.backgroundImage = "none";
    document.body.style.backgroundSize = "auto";
  	document.body.style.backgroundColor = "red";
  }

  render(){
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center container-global">
        	<div className="column d-flex justify-content-center align-items-center">
        		<div className="card w-100 bg-transparent border-0 overflow-hidden">
        			<div className="card-header bg-transparent border-0 overflow-hidden cheader" >
        				<img src={logo} className="imgMain"/>
        			</div>
        			<div className="card-body d-flex justify-content-center align-items-center pt-5">
        				<Link to="/sencondscreen"><img src={text} className="buttonIndex" /></Link>
        			</div>
        		</div>
        	</div>
      </div>
  	);
  }
}
