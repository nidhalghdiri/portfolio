import React, {Component} from 'react';
import './Auth.css';
import {Form, Button} from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {app} from '../../firebase';
class Auth extends Component {

    state = {
            email: '',
            password: ''
        }
        

    componentDidMount(){
        Aos.init({
          duration : 1000
        })
    }

     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        app.push(user);
    }
    render(){
        return(

<section className="AuthMain" id="Auth">
                <div className="AuthTitle">
                    <h1>Authentication</h1>
                </div>
            <div className="AuthContent">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
               
            </div>
               
            </section>

        );
    }
}


export default Auth;