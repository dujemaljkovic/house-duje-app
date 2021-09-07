import React, {useState} from 'react';
import {
  Container,
  Row, 
  Col, 
  Image, 
  Modal, 
  Button, 
  ModalFooter,} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import picture from '../../assets/Images/picture.jpg'
import picture1 from '../../assets/Images/picture1.jpg';
import picture2 from '../../assets/Images/picture2.jpg';
import picture3 from '../../assets/Images/picture3.jpg';
import picture4 from '../../assets/Images/picture4.jpg';
import picture5 from '../../assets/Images/picture5.jpg';
import classes from './Gallery.module.css';


 

const Gallery = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return(
    <React.Fragment>
        <Container fluid className={classes.Container}>
            <Row className={classes.Row}>
            <Col xs={6} md={4}>
                <Image onClick={handleShow} src={picture} rounded fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image  onClick={handleShow}src={picture1} rounded fluid/>
            </Col>
            <Col xs={6} md={4}>
                <Image onClick={handleShow} src={picture2} rounded fluid />
            </Col>
            </Row>
            <Row >
            <Col xs={6} md={4}>
                <Image onClick={handleShow} src={picture3} rounded fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image onClick={handleShow} src={picture4} rounded fluid/>
            </Col>
            <Col xs={6} md={4}>
                <Image onClick={handleShow}  src={picture5} rounded fluid />
            </Col>
            </Row>
        </Container>

      <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
         >
        <ModalHeader closeButton></ModalHeader>
          <Image onClick={handleShow}  src={picture} rounded fluid/>
        <ModalFooter >
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </Modal>
     
 </React.Fragment>
    )
    
}
    
export default Gallery;