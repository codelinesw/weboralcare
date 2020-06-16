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
import background_ from '../images/Img.png';

var sectionStyle = {
  backgroundImage: "url(http://localhost:3000/static/media/Img.a8ba560e.png)"
};

class SecondScreen extends React.Component{

  constructor(props){
    super(props);

    this.state = {
 
    }
  }

  componentDidMount(){
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
    this.renderRedirect();
  }

  renderRedirect = () => {
    //console.log(this.props.history);
    setTimeout(() => this.props.history.push('/threescreen'),10000) 
  }

  render(){
    return (
      <div className="backgroundimage">
        <div className="container-progressbar bg-transparent rounded_20 xh10 absolute bottom">
          <div className="progressbar bg-white rounded_20 xh10 active"></div>
        </div>
      </div> 
  	);
  }
}

export default SecondScreen;
