import React , {Component } from 'react';
import classes from './About.module.css';
import {Row, Col} from 'react-bootstrap';
import Img from '../../assets/images/aboutImg.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
class About extends Component {
    componentDidMount(){
        Aos.init({
          duration : 800
        })
    }
    render(){
        return (
            <div className={classes.AboutMain} id="about">
                <Row>
                    <Col lg={3}>
                        <div className={classes.AboutImg}>
                            <img src={Img} alt="My Image" data-aos="fade" data-aos-delay="300" />
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className={classes.AboutContent}>
                            <div className={classes.AboutTitle}>
                                <h1 data-aos="fade-down" data-aos-delay="500">About Me</h1>
                            </div>
                            <div className={classes.AboutPara}>
                                <p data-aos="fade-up" data-aos-delay="600">
                                Nidhal Ghdiri Full Stack Developer with 2 years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;