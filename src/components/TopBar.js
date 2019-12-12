import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './TopBar.css'
import ScrollchorItem from "./scrollchor-item";
import Scrollspy from "react-scrollspy";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
class TopBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasScrolledDown: false,
        isOpen: false
      };
      this.handleScroll = this.handleScroll.bind(this);
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.handleCloseCollapse = this.handleCloseCollapse.bind(this);
    }
    handleScroll(){
      const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let scrolledDownEnough = bodyScrollTop > 75 ? true : false;
    this.setState({
      hasScrolledDown: scrolledDownEnough
    });
    }

    toggleNavbar() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    handleCloseCollapse(){
      if (this.state.isOpen) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
    render() {
      const whiteBackground = this.state.hasScrolledDown
      ? "white-background navbar-border"
      : "";
    const fontColor = this.state.hasScrolledDown ? "blue-font" : "white-font";
      return (
        <Navbar className={whiteBackground} expand="md" fixed="top">
            <NavbarBrand href="/" className={fontColor}>
              Kenny
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar}>
              <FontAwesomeIcon icon={faBars} />
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} className={`${fontColor}`} navbar>
              <Scrollspy
              items={['home','about','skills','education','works','contact']}
              currentClassName="active"
              className={`${fontColor} ml-auto navbar-nav`}
              navbar
              >
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#home" className="nav-link">HOME</ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#about" className="nav-link">ABOUT</ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#skills" className="nav-link">SKILLS</ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#education" className="nav-link">EDUCATION</ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#works" className="nav-link">WORKS</ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#contact" className="nav-link">CONTACT</ScrollchorItem>
                </NavItem>
              </Scrollspy>
            </Collapse>
        </Navbar>
      );
    }
  }

export default TopBar;