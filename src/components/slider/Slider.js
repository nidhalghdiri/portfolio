import React, {Component} from 'react';
import classes from './Slider.module.css';
import {Row, Col} from 'react-bootstrap';
import {   Link, NavLink } from 'react-router-dom';
import html from '../../assets/icons/skills/html-5.png';
import css from '../../assets/icons/skills/css.png';
import js from '../../assets/icons/skills/js.png';
import boot from '../../assets/icons/skills/bootstrap.png';
import php from '../../assets/icons/skills/php.png';
import symfony from '../../assets/icons/skills/symfony.png';
import jquery from '../../assets/icons/skills/jquery.png';
import rct from '../../assets/icons/skills/react.png';
import redx from '../../assets/icons/skills/redux.png';
// import download from '../../assets/icons/download.png';
import myImg from '../../assets/images/myImg.png';
import cv from '../../assets/GhdiriNidhalCV.pdf';
// import { Link, animateScroll as scroll } from "react-scroll";
import Aos from 'aos';
import 'aos/dist/aos.css';
class Slider extends Component {
    componentDidMount(){
        Aos.init({
          duration : 800
        })
    }
    render(){
        return(

<div className={classes.SliderContainer}>
                <Row>
                    <Col lg={{span:7, order:1}} md={{span:12, order:2}} sm={{span:12, order:2}} xs={{span:12, order:2}}>
                        <div className={classes.SliderContent}>
                            <div className={classes.MyName}>
                                <h1 data-aos="fade-right" data-aos-delay="500" >I'm Nidhal Ghdiri</h1>
                                <h2 data-aos="fade-right" data-aos-delay="800" >Full stack Web Developer</h2>
                            </div>
                            <div className={classes.Skills}>
                                <ul className={classes.SkillsItems}>
                                    <li className={classes.SkillsItem}>
                                        <img src={html} alt="html"
                                        data-aos="zoom-in" data-aos-delay="1100" />
                                    </li>
                                    <li className={classes.SkillsItem}>
                                        <img src={css} alt="css" 
                                        data-aos="zoom-in" data-aos-delay="1200" />
                                    </li>
                                    <li className={classes.SkillsItem}>
                                        <img src={js} alt="js" 
                                        data-aos="zoom-in" data-aos-delay="1300" />
                                    </li>
                                    <li className={classes.SkillsItem}>
                                        <img src={boot} alt="bootstrap" 
                                        data-aos="zoom-in" data-aos-delay="1400" />
                                    </li>
                                    <li className={classes.SkillsItem}>
                                        <img src={php} alt="php" 
                                        data-aos="zoom-in" data-aos-delay="1500"/>
                                    </li>
                                    <li className={classes.SkillsItem}>
                                        <img src={symfony} alt="symfony" 
                                        data-aos="zoom-in" data-aos-delay="1600" />
                                    </li>
                                    <li className={classes.SkillsItem}>
                                        <img src={jquery} alt="jquery"
                                        data-aos="zoom-in" data-aos-delay="1700" />
                                    </li>
                                    <li className={classes.SkillsItem}>
                                        <img src={rct} alt="react js"
                                        data-aos="zoom-in" data-aos-delay="1800" />
                                    </li>
                                    <li className={classes.SkillsItem}>
                                        <img src={redx} alt="redux"
                                        data-aos="zoom-in" data-aos-delay="1900" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.Buttons}>
                                <a href={cv} target="_blank" rel="noopener noreferrer" className={classes.BtnCV}
                                data-aos="fade-up" data-aos-delay="2000">
                                    {/* <img src={download} alt="Download Icon" /> */}
                                    <span>Download CV</span>
                                </a>
                                <NavLink
                                   to='/projects'
                                   activeClassName="active"
                                   exact
                                    className={classes.btnProjects}
                                    data-aos="fade-up" data-aos-delay="2200"
                                >
                                 My Projects
                                </NavLink>
                               
                            </div>
                        </div>
                    </Col>
                    <Col lg={{span:5, order:2}} md={{span:12, order:1}} sm={{span:12, order:1}} xs={{span:12, order:1}}>
                        <div className={classes.SliderImg}>
                            <img src={myImg} alt="Nidhal Ghdiri" data-aos="zoom-in" data-aos-delay="500" />
                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Slider;