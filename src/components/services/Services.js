import React , {Component} from 'react';
import classes from './Services.module.css';
import {Row, Col} from 'react-bootstrap';
import design from '../../assets/images/webDesign.png';
import dev from '../../assets/images/webDev.png';
import digital from '../../assets/images/digitalMark.png';
import seo from '../../assets/images/seo.png';
class Services extends Component {
    render(){
        return(
            <div className={classes.ServicesMain}>
                <div className={classes.ServicesTitle}>
                    <h1>Services</h1>
                </div>
                <div className={classes.ServicesContent}>
                    <Row>
                        <Col lg={3} md={6} sm={6} xs={12}>
                            <div className={classes.Service}>
                                <div className={classes.ServiceImg}>
                                    <img src={design} alt="Web Design" />
                                </div>
                                <div className={classes.ServiceTitle}>
                                    <span>Web</span>
                                    <span>Design</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12}>
                            <div className={classes.Service}>
                                <div className={classes.ServiceImg}>
                                    <img src={dev} alt="Web Development" />
                                </div>
                                <div className={classes.ServiceTitle}>
                                    <span>Web</span>
                                    <span>Development</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12}>
                            <div className={classes.Service}>
                                <div className={classes.ServiceImg}>
                                    <img src={digital} alt="Marketing Digital" />
                                </div>
                                <div className={classes.ServiceTitle}>
                                    <span>Digital</span>
                                    <span>Marketing</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12}>
                            <div className={classes.Service}>
                                <div className={classes.ServiceImg}>
                                    <img src={seo} alt="SEO" />
                                </div>
                                <div className={classes.ServiceTitle}>
                                    <span>SEO</span>
                          
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Services;
