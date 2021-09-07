import React from 'react';
import Map from '../../components/Map';
import {Container, Row, Col} from 'react-bootstrap';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { FaAirbnb } from 'react-icons/fa';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import classes from '../Contact/Contact.module.css';

const Contact = props => (
    <React.Fragment>
    <Container fluid className={classes.Container}>
        <Row className={classes.Row}>
        <Col sm={8} className={classes.Col}>
            <Map />
        </Col>
        <Col sm={4} className={classes.Col2}>
            <h3>Contact Details:</h3>
            <br/>
            <h5>Address:</h5>
            <p>Cesta Dr. Franje Tudmana 16, Labin</p> 
            <h5>Phone:</h5>
            <p>085 173 5003</p> 
            <h5>Mail:</h5>
            <a href="mailto:duje.maljkovic@gmail.com">duje.maljkovic@gmail.com</a>
            <br/>
            <br/>  
            <h5>Find us at:</h5>
            <a href="https://www.facebook.com/houseduje/">
                <AiOutlineFacebook size="2em" color="grey"/>
            </a>
            <a href="https://www.instagram.com/houseduje/">
                <AiOutlineInstagram size="2em" color="gray"/>
            </a>
            <a href="https://www.airbnb.ie/rooms/18722462?preview_for_ml=true&source_impression_id=p3_1595682222_lEpnmQykX0JhazwD&guests=1&adults=1">
                <FaAirbnb size="2em" color="gray"/>
            </a>
        </Col>
        </Row>
    </Container>
    <Col sm={8} className={classes.Col}>
    <h4>Send us a Message</h4>
    <Form>
    <Form.Group>
        <Form.Label>Full Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group>
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone number" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address:</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" />
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message:</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    </Col>
    </React.Fragment>

)

export default Contact;