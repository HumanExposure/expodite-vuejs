import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Results from "./components/Results";


function App() {
  return (
    <div className="App">
      <Container>
        <p />
        <Jumbotron>
          <Row>
            <Col>
              <h1>expodite-app</h1>
              <p>
                This is a simple mockup of Kristen's chemical ranking script linking back to supporting documents.
              </p>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      <Results/>

    </div>
  );
}

export default App;
