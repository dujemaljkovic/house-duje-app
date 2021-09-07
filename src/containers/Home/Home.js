import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import picture from '../../assets/Images/picture.jpg';
import picture1 from '../../assets/Images/picture1.jpg';
import picture2 from '../../assets/Images/picture2.jpg';
import picture3 from '../../assets/Images/picture3.jpg';
import picture4 from '../../assets/Images/picture4.jpg';
import picture5 from '../../assets/Images/picture5.jpg';

const Home = (props) => (
  <Row>
    <Col sm={8}>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            width={400}
            height={400}
            src={picture}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            width={400}
            height={400}
            src={picture1}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            width={400}
            height={400}
            src={picture2}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            width={400}
            height={400}
            src={picture3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            width={400}
            height={400}
            src={picture4}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            width={400}
            height={400}
            src={picture5}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>
    <Col sm={4}>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </Col>
  </Row>
);

export default Home;
