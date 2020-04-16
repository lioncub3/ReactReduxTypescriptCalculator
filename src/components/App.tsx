import React from 'react';
import '../App.css';
import { Container, Row, Col } from "reactstrap";
import CalcContainer from '../containers/CalcContainer';

const App = () => (
  <Container>
    <Row>
      <Col xs="3">
        <CalcContainer />
      </Col>
    </Row>
  </Container>
);

export default App;