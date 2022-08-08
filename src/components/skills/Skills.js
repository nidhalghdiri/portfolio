import React, {Component} from 'react';

import './Skills.css';
import {Row, Col} from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
class Skills extends Component {
    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }
    render(){
        return(

<section className="SkillsMain" id="skills">
                <div className="SkillsTitle">
                    <h1>My Skills</h1>
                </div>
            <div className="SkillsContent">
                <Row>
                    <Col lg={6}>
                    <div className="SkillsBar" data-aos="fade">
                    <div className="Bar">
                        <div className="Info">
                            <span>HTML</span>
                        </div>
                        <div className="Line Html">
                            <span></span>
                        </div>
                    </div>
                    <div className="Bar">
                        <div className="Info">
                            <span>CSS</span>
                        </div>
                        <div className="Line CSS">
                            <span></span>
                        </div>
                    </div>
                    <div className="Bar">
                        <div className="Info">
                            <span>JS</span>
                        </div>
                        <div className="Line JS">
                            <span></span>
                        </div>
                    </div>
                   
                </div>
                    </Col>
                    <Col lg={6}>
                    <div className="SkillsBar" data-aos="fade">
                    <div className="Bar">
                        <div className="Info">
                            <span>PHP</span>
                        </div>
                        <div className="Line php">
                            <span></span>
                        </div>
                    </div>
                    <div className="Bar">
                        <div className="Info">
                            <span>ReactJS</span>
                        </div>
                        <div className="Line react">
                            <span></span>
                        </div>
                    </div>
                    <div className="Bar">
                        <div className="Info">
                            <span>Symfony</span>
                        </div>
                        <div className="Line symfony">
                            <span></span>
                        </div>
                    </div>
                   
                </div>
                    </Col>
                </Row>
               
            </div>
               
            </section>

        );
    }
}


export default Skills;