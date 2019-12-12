import React from 'react';
import { Jumbotron } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
import './About.css'
class About extends React.Component{

    render(){
        return(
            <section id="about" className="section">
                <div className="section-content">
                <Jumbotron className="aboutBox">
                    <h2 className="title">About me</h2>
                    <h2 className="subTitle">Who am I?</h2>
                    <hr />
                    <Container>
                        <Row>
                            <Col xs="auto"><img src="" alt="ProPic" /></Col>
                            <Col>
                            <p className="self-intro-1"> Hi! I am Kenny Ho.</p>
                            <br />
                            <p className="self-intro-2">
                            A self-disciplined and passionate student in Computer Engineering, proficient in various 
                            structuring programming techniques, such as Java, C/C++. Seeking the opportunity to take 
                            Graduate job with an IT firm to keep up with the forefront of technologies, preferably in 
                            Computing, and building a long-term career as a professional developer.
                            </p>
                            </Col>
                        </Row>
                    </Container>                   
                </Jumbotron>
                </div>
                <div className="row">
                    <div class="col-12 col-md-4 col-lg4 offset-lg-1">
                        <div className="box">
                            <h5>Toolbox</h5>
                            <p>
                                <b>Framework:</b>
                                React.js, Redux
                                <br/>
                                <b>IDE:</b>
                                VS code
                                <br/>
                                <b>VCS:</b>
                                Github
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="box">
                            <h5>Learning</h5>
                            <p>
                                Currently: React Native
                                <br />
                                On the radar: React Hooks
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default About;