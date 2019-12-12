import React,{Component} from 'react';
import Scrollchor from "react-scrollchor";
//import Img from 'gatsby-image';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';

class Home extends Component{
  render(){
    return(
      <div id="home" className="cover animated">
          <img src="" alt="Home Cover"/>
          <div className="overlay"/>
          <div className="center">
            <h1>Hi, I'm Kenny</h1>
            <p className="greetings">I graduated from HKUST in 2019</p>
          </div>
          <div className="arrow animated bounceInDown">
            <Scrollchor to="#about" className="btn" animate={{duration:500}}>
                <FontAwesomeIcon icon={faArrowDown} />
            </Scrollchor>
          </div>
        </div>
    );
  }
        
}

  export default Home;