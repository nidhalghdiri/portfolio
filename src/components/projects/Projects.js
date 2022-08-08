import React, {Component} from 'react';
import classes from './Projects.module.css';
import {Row, Col} from 'react-bootstrap';
import company1 from '../../assets/images/companies/company1.png';
import company1Mockup from '../../assets/images/companies/company1Mockup.png';
import hydroProd1 from '../../assets/images/companies/hydroProd1.png';
import hydroProd2 from '../../assets/images/companies/hydroProd2.png';
import hydroProd3 from '../../assets/images/companies/hydroProd3.png';
import hydroProd4 from '../../assets/images/companies/hydroProd4.png';

import company2 from '../../assets/images/companies/company2.png';
import company2Mockup from '../../assets/images/companies/company2Mockup.png';
import spzProd1 from '../../assets/images/companies/spzProd1.png';
import spzProd2 from '../../assets/images/companies/spzProd2.png';
import spzProd3 from '../../assets/images/companies/spzProd3.png';
import spzProd4 from '../../assets/images/companies/spzProd4.png';

import company3 from '../../assets/images/companies/company3.png';
import company3Mockup from '../../assets/images/companies/company3Mockup.png';
import oggProd1 from '../../assets/images/companies/oggProd1.png';
import oggProd2 from '../../assets/images/companies/oggProd2.png';
import oggProd3 from '../../assets/images/companies/oggProd3.png';
import oggProd4 from '../../assets/images/companies/oggProd4.png';

import company4 from '../../assets/images/companies/company4.png';
import company4Mockup from '../../assets/images/companies/company4Mockup.png';
import bbroyalProd1 from '../../assets/images/companies/bbroyalProd1.png';
import bbroyalProd2 from '../../assets/images/companies/bbroyalProd2.png';
import bbroyalProd3 from '../../assets/images/companies/bbroyalProd3.png';
import bbroyalProd4 from '../../assets/images/companies/bbroyalProd4.png';

import company5 from '../../assets/images/companies/company5.png';
import company5Mockup from '../../assets/images/companies/company5Mockup.png';
import lubanProd1 from '../../assets/images/companies/lubanProd1.png';
import lubanProd2 from '../../assets/images/companies/lubanProd2.png';
import lubanProd3 from '../../assets/images/companies/lubanProd3.png';
import lubanProd4 from '../../assets/images/companies/lubanProd4.png';
class Projects extends Component {
    render(){
        return(
      
            <section className={classes.ProjectsMain} id="projects">
                <div className={classes.ProjectsTitle}>
                    <h1>My Projects</h1>
                </div>

                <div className={classes.ProjectsContent} 
                // style={{backgroundColor: "#474B4F"}}
                >
                    <Row>
                        <Col lg={{span:6, order:1}} md={{span:12, order: 2}} sm={{span:12, order: 2}} xs={{span:12, order: 2}}>
                            <div className={classes.ProjectInfo}>
                                <div className={classes.CompanyLogo}>
                                    <img src={company1} alt="Hydro Technology" />
                                </div>
                                <div className={classes.CompanyAbout}>
                                    <p>
                                    HYDRO TECHNOLOGY company is established in 2014 to supply high quality for hydraulics parts.
                                    </p>
                                </div>
                                <div className={classes.Buttons}>
                                    <a href="http://www.hydrotechnology.com.tn" target="_blank" rel="noopener noreferrer" className={classes.Btn1}>
                                        View Website
                                    </a>
                                    <a href="#" className={classes.Btn2}>
                                        More Details
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}} md={{span:12, order: 1}} sm={{span:12, order: 1}} xs={{span:12, order: 1}}>
                            <div className={classes.ProjectImages}>
                                <div className={classes.ProjectMockup}>
                                    <img src={company1Mockup} alt="Project Mockup" />
                                </div>
                                <div className={classes.ProjectProducts}>
                                    <ul>
                                        <li>
                                            <img src={hydroProd1} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={hydroProd2} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={hydroProd3} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={hydroProd4} alt="Product Image" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={classes.ProjectsContent} 
                // style={{backgroundColor: "#7FC53C"}}
                >
                    <Row>
                        <Col lg={{span:6, order:1}} md={{span:12, order: 2}} sm={{span:12, order: 2}} xs={{span:12, order: 2}}>
                            <div className={classes.ProjectInfo}>
                                <div className={classes.CompanyLogo}>
                                    <img src={company2} alt="SPZ Tunisia" />
                                </div>
                                <div className={classes.CompanyAbout}>
                                    <p>
                                    SPZ Tunisia is the specialist in electric motors with a wide range of products which combine high quality and a better price.
                                    </p>
                                </div>
                                <div className={classes.Buttons}>
                                    <a href="http://www.spztunisia.com.tn" target="_blank" rel="noopener noreferrer" className={classes.Btn1}>
                                        View Website
                                    </a>
                                    <a href="#" className={classes.Btn2} 
                                    // style={{backgroundColor: "#474B4F", color: "#FFFFFF"}}
                                    >
                                        More Details
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}} md={{span:12, order: 1}} sm={{span:12, order: 1}} xs={{span:12, order: 1}}>
                            <div className={classes.ProjectImages}>
                                <div className={classes.ProjectMockup}>
                                    <img src={company2Mockup} alt="Project Mockup" />
                                </div>
                                <div className={classes.ProjectProducts}>
                                    <ul>
                                        <li>
                                            <img src={spzProd1} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={spzProd2} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={spzProd3} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={spzProd4} alt="Product Image" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={classes.ProjectsContent}
                //  style={{backgroundColor: "#F0F0F0"}}
                 >
                    <Row>
                        <Col lg={{span:6, order:1}} md={{span:12, order: 2}} sm={{span:12, order: 2}} xs={{span:12, order: 2}}>
                            <div className={classes.ProjectInfo}>
                                <div className={classes.CompanyLogo}>
                                    <img src={company3} alt="OGG" />
                                </div>
                                <div className={classes.CompanyAbout}>
                                    <p style={{color: "#ffffff"}}>
                                    The National Corporation for Importing Foodstuff, established in Yemen, a commercial establishment was established 30 years ago. . Its products are demolished in a high profile, as its commercial activity is concentrated in some countries of the world and regionally in some countries of the United Gulf, Pakistan, Pakistan, Brazil, Malaysia and Indonesia.
                                    </p>
                                </div>
                                <div className={classes.Buttons}>
                                    <a href="https://www.oggt-om.com" target="_blank" rel="noopener noreferrer" className={classes.Btn1}
                                    // style={{color: "#6B6E70", borderColor: "#6B6E70"}}
                                    >
                                        View Website
                                    </a>
                                    <a href="#" className={classes.Btn2} >
                                        More Details
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}} md={{span:12, order: 1}} sm={{span:12, order: 1}} xs={{span:12, order: 1}}>
                            <div className={classes.ProjectImages}>
                                <div className={classes.ProjectMockup}>
                                    <img src={company3Mockup} alt="Project Mockup" />
                                </div>
                                <div className={classes.ProjectProducts}>
                                <ul>
                                        <li>
                                            <img src={oggProd1} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={oggProd2} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={oggProd3} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={oggProd4} alt="Product Image" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={classes.ProjectsContent} 
                // style={{background: "none"}}
                >
                    <Row>
                        <Col lg={{span:6, order:1}} md={{span:12, order: 2}} sm={{span:12, order: 2}} xs={{span:12, order: 2}}>
                            <div className={classes.ProjectInfo}>
                                <div className={classes.CompanyLogo}>
                                    <img src={company4} alt="bbroyal" />
                                </div>
                                <div className={classes.CompanyAbout}>
                                    <p style={{color: "#FFFFFF"}}>
                                    The Arab International Industrial Company (SFZ) WLL is located in the Salalah Free Zone, Sultanate of Oman. The company has the infrastructure of the most advanced technology, high-efficiency machinery for the production of baby diapers and all related products.
                                    </p>
                                </div>
                                <div className={classes.Buttons}>
                                    <a href="http://alarabco.com" target="_blank" rel="noopener noreferrer" className={classes.Btn1}
                                    // style={{backgroundColor: "#6B6E70", borderColor: "#6B6E70"}}
                                    >
                                        View Website
                                    </a>
                                    <a href="#" className={classes.Btn2} >
                                        More Details
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}} md={{span:12, order: 1}} sm={{span:12, order: 1}} xs={{span:12, order: 1}}>
                            <div className={classes.ProjectImages}>
                                <div className={classes.ProjectMockup}>
                                    <img src={company4Mockup} alt="Project Mockup" />
                                </div>
                                <div className={classes.ProjectProducts}>
                                <ul>
                                        <li>
                                            <img src={bbroyalProd1} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={bbroyalProd2} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={bbroyalProd3} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={bbroyalProd4} alt="Product Image" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={classes.ProjectsContent} 
                // style={{backgroundColor: "#F0F0F0"}}
                >
                    <Row>
                        <Col lg={{span:6, order:1}} md={{span:12, order: 2}} sm={{span:12, order: 2}} xs={{span:12, order: 2}}>
                            <div className={classes.ProjectInfo}>
                                <div className={classes.CompanyLogo}>
                                    <img src={company5} alt="Luban Dhofar" style={{width: "150px"}} />
                                </div>
                                <div className={classes.CompanyAbout}>
                                    <p >
                                    Luban Dhofar Frankincense Distillation LLC is an Omani company with profound experience in development and marketing of natural products of frankincense tree that grows in the southern part of the sultanate of Oman namely the Governorate of Dhofar.
                                    </p>
                                </div>
                                <div className={classes.Buttons}>
                                    <a href="http://lubandhofar.om/" target="_blank" rel="noopener noreferrer" className={classes.Btn1}
                                    // style={{color: "#6B6E70", borderColor: "#6B6E70"}}
                                    >
                                        View Website
                                    </a>
                                    <a href="#" className={classes.Btn2} >
                                        More Details
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{span:6, order:2}} md={{span:12, order: 1}} sm={{span:12, order: 1}} xs={{span:12, order: 1}}>
                            <div className={classes.ProjectImages}>
                                <div className={classes.ProjectMockup}>
                                    <img src={company5Mockup} alt="Project Mockup" />
                                </div>
                                <div className={classes.ProjectProducts}>
                                <ul style={{justifyContent: "space-between"}}>
                                        <li>
                                            <img src={lubanProd1} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={lubanProd2} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={lubanProd3} alt="Product Image" />
                                        </li>
                                        <li>
                                            <img src={lubanProd4} alt="Product Image" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        );
    }
}


export default Projects;