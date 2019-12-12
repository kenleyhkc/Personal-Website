import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component{
    render(){
        return(
            <footer id="footer">
                <hr/>
                <Container>
                    <a href="https://www.facebook.com/KennyHoKC"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href="https://www.instagram.com/kenleyhkc"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://twitter.com/KennyHoKC"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.linkedin.com/in/ka-chung-ho-2647a1173/"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="https://github.com/kenleyhkc"><FontAwesomeIcon icon={faGithub}/></a>
                    <h6>© Copyright 2019 Kenny Ho, Ka Chung. All rights reserved.</h6>
                </Container>
            </footer>
        )
    }
}

export default Footer;