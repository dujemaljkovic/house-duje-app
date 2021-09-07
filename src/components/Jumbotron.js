import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import firstPic from '../assets/Images/Cropped.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${firstPic}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
  }

  .container {
      margin-top: 20px;
  }
  
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container className="container">
        <h1>Welcome</h1>
        <p>Enjoy your stay at this beautiful place</p>
      </Container>
    </Jumbo>
  </Styles>
)

export default Jumbotron;