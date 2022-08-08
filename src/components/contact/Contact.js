import React from 'react';
import './Contact.css';
import {Row, Col, Form, Button} from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_1u9ep1h', 'template_5fvxiif', e.target, 'user_3n99YGGCJdNCpvID7Iyof')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
        return(
                <section className="ContactMain">
                 <div className="ContactTitle">
                    <h1>Contact Me</h1>
                </div>
               <div className="ContactContent">
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <div className="ContactInfo">
                            <div className="ContactInfoTitle">
                            <h2>Let's get in touch</h2>
                            <h5>We're open for any suggestion or just to have a chat.</h5>
                            
                            </div>
                            <div className="ContactInfoItems">
                                <ul>
                                    <li>
                                        <p>52652537</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                    <Form className="contactForm" onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control className="contactInputs" type="text" placeholder="Name" name="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="contactInputs" type="email" placeholder="Enter email" name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control className="contactInputs" name="message"
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '100px' }}
                            />
                        </Form.Group>
                        <Button variant="primary" className="contactButton" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
               </div>
            </section>   
        );
}

export default Contact;